"use client"

import { Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import BookingForm from "@/components/booking/booking-form"
import { Button } from "@/components/ui/button"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-muted/10 to-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-card rounded-lg border border-primary/20 p-8 shadow-lg">
          <h1 className="text-4xl font-black text-foreground mb-2">Book Your Service</h1>
          <p className="text-foreground/70 mb-8">Fill in your details and select your location on the map below</p>

          <Suspense fallback={<div>Loading booking form...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
