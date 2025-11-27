"use client"

import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTABanner() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-accent/20">
          24/7 Emergency Service
        </span>

        <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-primary-foreground leading-tight">
          Stranded on the Road?
          <br />
          <span className="text-accent">We're Here to Help</span>
        </h2>

        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Don't wait in uncertainty. Our professional team is standing by 24/7 to get you back on the road safely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+254740194858">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 h-auto font-medium shadow-xl shadow-accent/30 transition-all duration-300 hover:shadow-accent/40 hover:scale-105 text-base"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0740 194 858
            </Button>
          </a>
          <a
            href="https://wa.me/254740194858?text=Hello%20LOBS%20Roadside%2C%20I%20need%20emergency%20assistance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 h-auto font-medium bg-transparent transition-all duration-300 hover:scale-105 text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center gap-8 text-primary-foreground/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available Now
          </div>
          <div>15 min avg. response</div>
          <div>50,000+ rescues</div>
        </div>
      </div>
    </section>
  )
}
