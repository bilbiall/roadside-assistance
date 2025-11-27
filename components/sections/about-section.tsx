"use client"

import { CheckCircle2, Clock, Award, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const badges = [
    { icon: Award, label: "Trusted Service" },
    { icon: Clock, label: "24/7 Available" },
    { icon: CheckCircle2, label: "Certified Pros" },
    { icon: Zap, label: "Fast Response" },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">About Us</span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-foreground leading-tight">
              Your Trusted Partner on Every Road
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              LOBS Roadside has been serving motorists across Nairobi and beyond with reliable, professional roadside
              assistance for over a decade. Our certified technicians are trained to handle any roadside emergency with
              speed, professionalism, and a reassuring presence when you need it most.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <badge.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-medium text-foreground text-sm">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/african-american-roadside-assistance-professional-.jpg"
                alt="Professional technician assisting driver"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="text-3xl font-semibold text-accent mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-3xl bg-accent/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
