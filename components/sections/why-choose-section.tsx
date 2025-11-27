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
      title: "24/7 Support",
      description: "Friendly support team available around the clock",
    },
  ]

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">Trusted by Thousands of Drivers</h2>
          <p className="text-muted-foreground">Experience the difference with LOBS Roadside's premium service</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="group flex gap-5 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-12 rounded-3xl bg-primary text-primary-foreground">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50K+", label: "Rescues Completed" },
            { value: "15min", label: "Avg Response Time" },
            { value: "4.9/5", label: "Customer Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-semibold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
