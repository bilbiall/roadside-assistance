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
        <h2 className="text-5xl font-black text-center mb-16 text-foreground">Your Trusted Partner on the Road</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              RapidRoad Rescue has been serving motorists across the region with reliable, professional roadside
              assistance for over a decade. Our certified technicians are trained to handle any roadside emergency with
              speed, professionalism, and a reassuring presence when you need it most.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, i) => (
                <Card key={i} className="p-4 bg-muted/50 border-primary/20 hover:border-primary/50 transition-colors">
                  <badge.icon className="w-6 h-6 text-accent mb-2" />
                  <p className="font-semibold text-foreground">{badge.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative">
            <img
              src="/skilled-technician-helping-motorist-on-roadside.jpg"
              alt="Professional technician assisting driver"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
