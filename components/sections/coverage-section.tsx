"use client"

import { MapPin, CheckCircle2 } from "lucide-react"
import dynamic from "next/dynamic"

const NairobiMap = dynamic(() => import("@/components/nairobi-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted/50 flex items-center justify-center rounded-2xl">
      <div className="animate-pulse text-muted-foreground">Loading map...</div>
    </div>
  ),
})

export default function CoverageSection() {
  const coverageAreas = [
    "Nairobi CBD",
    "Westlands",
    "Karen",
    "Langata",
    "Eastleigh",
    "Thika Road",
    "Mombasa Road",
    "Ngong Road",
  ]

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Coverage Area</span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-foreground leading-tight">
              We've Got Nairobi Covered
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Serving highways, towns, and remote areas across Nairobi and surrounding regions. We reach you wherever
              you are, whenever you need us.
            </p>

            {/* Coverage Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: "800+", label: "km Network" },
                { value: "15+", label: "Urban Areas" },
                { value: "24/7", label: "Availability" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-background border border-border">
                  <div className="text-2xl font-semibold text-accent mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Coverage Areas List */}
            <div className="grid grid-cols-2 gap-3">
              {coverageAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Right Map */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <NairobiMap />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Live Coverage Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
