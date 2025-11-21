"use client"

import { Truck, Zap, Wrench, Lock, Fuel, Radio } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "Towing Services",
      description: "Professional towing for any vehicle type, anywhere, anytime",
    },
    {
      icon: Radio,
      title: "Flat Tire Fix",
      description: "Quick roadside tire repair or replacement assistance",
    },
    {
      icon: Zap,
      title: "Battery Jump-Start",
      description: "Fast battery jump-start to get you back on the road",
    },
    {
      icon: Fuel,
      title: "Fuel Delivery",
      description: "Emergency fuel delivery when you run out on the road",
    },
    {
      icon: Lock,
      title: "Lockout Assistance",
      description: "Professional help if you're locked out of your vehicle",
    },
    {
      icon: Wrench,
      title: "Mechanical Breakdown",
      description: "Expert help for mechanical issues and breakdowns",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 text-foreground">Our Roadside Rescue Services</h2>
        <p className="text-center text-foreground/70 mb-16 text-lg">
          Comprehensive assistance for every roadside emergency
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              className="p-8 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all group bg-card hover:bg-card/95"
            >
              <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <Button
                variant="outline"
                className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Request Service
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
