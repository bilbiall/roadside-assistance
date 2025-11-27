"use client"

import { useState } from "react"
import { Truck, Zap, Wrench, Lock, Fuel, Radio, ArrowRight } from "lucide-react"
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
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: Radio,
      title: "Flat Tire Fix",
      type: "flat-tire",
      description: "Quick roadside tire repair or replacement assistance",
      color: "from-amber-500/20 to-amber-600/10",
    },
    {
      icon: Zap,
      title: "Battery Jump-Start",
      type: "battery-jump",
      description: "Fast battery jump-start to get you back on the road",
      color: "from-yellow-500/20 to-yellow-600/10",
    },
    {
      icon: Fuel,
      title: "Fuel Delivery",
      type: "fuel-delivery",
      description: "Emergency fuel delivery when you run out on the road",
      color: "from-green-500/20 to-green-600/10",
    },
    {
      icon: Lock,
      title: "Lockout Assistance",
      type: "lockout",
      description: "Professional help if you're locked out of your vehicle",
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: Wrench,
      title: "Mechanical Breakdown",
      type: "mechanical",
      description: "Expert help for mechanical issues and breakdowns",
      color: "from-red-500/20 to-red-600/10",
    },
  ]

  const handleRequestService = (service: { title: string; type: string }) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  return (
    <>
      <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
              Comprehensive Roadside Solutions
            </h2>
            <p className="text-muted-foreground">
              Professional assistance for every roadside emergency, available 24/7 across Nairobi
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 hover-lift overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    onClick={() => handleRequestService(service)}
                    variant="ghost"
                    className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent font-medium text-sm group/btn"
                  >
                    Request Service
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
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
