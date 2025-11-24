"use client"

import { CheckCircle2, Clock, Award, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutSection() {
  const badges = [
    { icon: Award, label: "Trusted" },
    { icon: Clock, label: "24/7 Available" },
    { icon: CheckCircle2, label: "Trained Professionals" },
    { icon: Zap, label: "Fast Response" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Your Trusted Partner on the Road</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <p className="text-base text-foreground/80 mb-8 leading-relaxed">
              LOBS Roadside has been serving motorists across the region with reliable, professional roadside assistance
              for over a decade. Our certified technicians are trained to handle any roadside emergency with speed,
              professionalism, and a reassuring presence when you need it most.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, i) => (
                <Card
                  key={i}
                  className="p-4 bg-muted/50 border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in hover:shadow-lg"
                >
                  <badge.icon className="w-6 h-6 text-accent mb-2" />
                  <p className="font-medium text-foreground text-sm">{badge.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
              alt="Professional technician assisting driver"
              className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
