"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LocationSelector from "./location-selector"

const bookingFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  locationDescription: z.string().min(10, "Please describe your location"),
  latitude: z.number(),
  longitude: z.number(),
})

type BookingFormValues = z.infer<typeof bookingFormSchema>

const serviceTypes = [
  { value: "towing", label: "Towing Services" },
  { value: "flat-tire", label: "Flat Tire Fix" },
  { value: "battery-jump", label: "Battery Jump-Start" },
  { value: "fuel-delivery", label: "Fuel Delivery" },
  { value: "lockout", label: "Lockout Assistance" },
  { value: "mechanical", label: "Mechanical Breakdown" },
]

export default function BookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service") || ""
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number
    longitude: number
    address: string
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      serviceType: serviceParam || "",
      locationDescription: "",
      latitude: 0,
      longitude: 0,
    },
  })

  async function onSubmit(values: BookingFormValues) {
    if (!selectedLocation) {
      alert("Please select your location on the map")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          serviceType: values.serviceType,
          locationDescription: values.locationDescription,
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        }),
      })

      if (response.ok) {
        alert("Booking submitted successfully! Our team will contact you soon.")
        router.push("/")
      } else {
        alert("Failed to submit booking. Please try again.")
      }
    } catch (error) {
      console.error("Booking submission error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0740194858" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <LocationSelector onLocationSelect={setSelectedLocation} />
        </div>

        <FormField
          control={form.control}
          name="locationDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your exact location (e.g., near XXX gas station, main road, etc.)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Help our driver find you more easily</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting || !selectedLocation}
        >
          {isSubmitting ? "Submitting..." : "Submit Booking"}
        </Button>
      </form>
    </Form>
  )
}
