"use client"

import { MapPin } from "lucide-react"
import dynamic from "next/dynamic"

const NairobiMap = dynamic(() => import("@/components/nairobi-map"), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-muted flex items-center justify-center">Loading map...</div>,
})

export default function CoverageSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 text-foreground">We've Got You Covered</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Serving highways, towns, and remote areas across Nairobi — we reach you wherever you are
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 h-96 w-full">
          <NairobiMap />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { region: "Highway Network", coverage: "500+ miles" },
            { region: "Urban Coverage", coverage: "15+ cities" },
            { region: "Remote Areas", coverage: "24/7 access" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-1">{item.region}</h3>
              <p className="text-foreground/70">{item.coverage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
