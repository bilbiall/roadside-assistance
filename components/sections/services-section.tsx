"use client"

import { useState } from "react"
import { Truck, Zap, Wrench, Lock, Fuel, Radio } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceSelectionModal from "@/components/service-selection-modal"

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    title: string
    type: string
  } | null>(null)

  const services = [
    {
      icon: Truck,
      title: "Towing Services",
      type: "towing",
      description: "Professional towing for any vehicle type, anywhere, anytime",
    },
    {
      icon: Radio,
      title: "Flat Tire Fix",
      type: "flat-tire",
      description: "Quick roadside tire repair or replacement assistance",
    },
    {
      icon: Zap,
      title: "Battery Jump-Start",
      type: "battery-jump",
      description: "Fast battery jump-start to get you back on the road",
    },
    {
      icon: Fuel,
      title: "Fuel Delivery",
      type: "fuel-delivery",
      description: "Emergency fuel delivery when you run out on the road",
    },
    {
      icon: Lock,
      title: "Lockout Assistance",
      type: "lockout",
      description: "Professional help if you're locked out of your vehicle",
    },
    {
      icon: Wrench,
      title: "Mechanical Breakdown",
      type: "mechanical",
      description: "Expert help for mechanical issues and breakdowns",
    },
  ]

  const handleRequestService = (service: { title: string; type: string }) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Roadside Rescue Services</h2>
          <p className="text-center text-foreground/70 mb-16 text-sm">
            Comprehensive assistance for every roadside emergency
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="p-8 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all group bg-card hover:bg-card/95 animate-scale-in hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-foreground/70 mb-6">{service.description}</p>
                <Button
                  onClick={() => handleRequestService(service)}
                  variant="outline"
                  className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm font-medium transition-all hover:scale-105"
                >
                  Request Service
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceSelectionModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          serviceName={selectedService.title}
          serviceType={selectedService.type}
        />
      )}
    </>
  )
}
