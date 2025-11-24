"use client"

import { AlertCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
          }}
        />
      </div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="flex items-start gap-4 mb-8 text-accent animate-slide-in-left">
          <AlertCircle className="w-8 h-8 flex-shrink-0 animate-emergency" />
          <div className="text-xs font-bold tracking-widest">🚨 24/7 EMERGENCY HOTLINE: 0700 123 456</div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg animate-slide-in-right">
          Stuck on the Road?
          <br />
          <span className="text-accent">We're on Our Way.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl leading-relaxed drop-shadow-md animate-fade-in">
          24/7 Fast, Reliable, Affordable Roadside Assistance — Anytime, Anywhere
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-scale-in">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold rounded-full px-8 py-4 h-auto transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call for Immediate Help
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-base font-semibold rounded-full px-8 py-4 h-auto bg-transparent transition-all hover:scale-105"
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute bottom-0 right-0 opacity-20 animate-float">
        <div className="w-96 h-96 bg-gradient-to-tl from-accent to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  )
}
