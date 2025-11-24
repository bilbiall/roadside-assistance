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

      <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6 text-accent font-semibold text-sm">
          <AlertCircle className="w-6 h-6 animate-emergency" />
          IN AN EMERGENCY?
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
          Stranded? Don't Panic — Help Is Just a Call Away.
        </h2>

        <p className="text-lg text-primary-foreground/90 mb-8 font-medium">
          24/7 Emergency Line: <span className="text-accent">0700 123 456</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold rounded-full px-8 py-4 h-auto transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get Immediate Help
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold rounded-full px-8 py-4 h-auto bg-transparent transition-all hover:scale-105"
          >
            WhatsApp: +254 740 194 858
          </Button>
        </div>
      </div>
    </section>
  )
}
