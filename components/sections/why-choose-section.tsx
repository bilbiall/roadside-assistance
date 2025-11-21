"use client"

import { Clock, DollarSign, Award, Navigation, MapPin, Users } from "lucide-react"

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: Clock,
      title: "15-30 Min Response",
      description: "Average response time to reach you on the road",
    },
    {
      icon: DollarSign,
      title: "Fixed Pricing",
      description: "Transparent, fair pricing with no hidden charges",
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Highly trained and certified roadside specialists",
    },
    {
      icon: Navigation,
      title: "GPS Tracking",
      description: "Real-time GPS tracking of your rescue vehicle",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "We reach highways, towns, and remote areas",
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Friendly support team available 24/7 for you",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-foreground">Why Motorists Choose RapidRoad Rescue</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
