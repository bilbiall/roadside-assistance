"use client"

import { AlertCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
      {/* Emergency light effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-accent font-bold text-lg">
          <AlertCircle className="w-6 h-6 animate-emergency" />
          IN AN EMERGENCY?
        </div>

        <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-foreground">
          Stranded? Don't Panic — Help Is Just a Call Away.
        </h2>

        <p className="text-2xl text-primary-foreground/90 mb-8 font-semibold">
          24/7 Emergency Line: <span className="text-accent">0700 123 456</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold rounded-full px-8 py-6 h-auto"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get Immediate Help
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg font-bold rounded-full px-8 py-6 h-auto bg-transparent"
          >
            WhatsApp: +1 (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  )
}
