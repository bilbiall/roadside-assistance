"use client"

import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Assistance",
      price: "KSH 6,370",
      period: "per incident",
      features: ["Single roadside assistance call", "Flat tire repair", "Battery jump-start", "Basic towing (8 km)"],
      highlight: false,
    },
    {
      name: "Standard Rescue",
      price: "KSH 10,270",
      period: "per incident",
      features: [
        "All Basic features included",
        "Extended towing (40 km)",
        "Fuel delivery",
        "Lockout assistance",
        "Priority response",
      ],
      highlight: true,
    },
    {
      name: "Premium Coverage",
      price: "KSH 19,370",
      period: "monthly membership",
      features: [
        "Unlimited assistance calls",
        "Unlimited towing (up to 160 km)",
        "All services included",
        "Discounted rates for family",
        "Priority support hotline",
        "Annual coverage guaranteed",
      ],
      highlight: false,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Transparent & Fair Pricing</h2>
        <p className="text-center text-foreground/70 mb-16 text-sm">Choose the plan that works best for you</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`p-8 relative transition-all animate-scale-in hover:scale-105 ${
                plan.highlight ? "border-accent border-2 shadow-xl md:scale-105" : "border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-accent">{plan.price}</span>
                <span className="text-foreground/70 ml-2 text-xs">{plan.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full rounded-full py-4 h-auto text-sm font-semibold transition-all hover:scale-105 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.highlight ? "Subscribe Now" : "Call Now"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
