"use client"

import { Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "KSH 6,370",
      period: "per incident",
      description: "Perfect for occasional assistance",
      features: ["Single roadside assistance call", "Flat tire repair", "Battery jump-start", "Basic towing (8 km)"],
      highlight: false,
    },
    {
      name: "Standard",
      price: "KSH 10,270",
      period: "per incident",
      description: "Most popular choice for drivers",
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
      name: "Premium",
      price: "KSH 19,370",
      period: "monthly",
      description: "Complete peace of mind coverage",
      features: [
        "Unlimited assistance calls",
        "Unlimited towing (up to 160 km)",
        "All services included",
        "Family member coverage",
        "Priority support hotline",
        "Annual coverage guaranteed",
      ],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Pricing</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that works best for your needs. No hidden fees.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-3xl p-8 border transition-all duration-300 hover-lift ${
                plan.highlight
                  ? "border-accent shadow-xl shadow-accent/10 scale-105"
                  : "border-border hover:border-accent/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-semibold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2 text-sm">/{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="tel:+254740194858" className="block">
                <Button
                  className={`w-full rounded-full py-5 h-auto font-medium transition-all ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
