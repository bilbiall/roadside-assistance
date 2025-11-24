"use client"

import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      quote:
        "I was stranded on the highway late at night. LOBS Roadside arrived in 20 minutes and handled everything professionally. I felt safe the entire time.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Chen",
      rating: 5,
      quote:
        "Best roadside assistance service I've used. Their technician was courteous, efficient, and fixed my flat tire in minutes. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Patricia Williams",
      rating: 5,
      quote:
        "Had a dead battery and was worried about missing an important meeting. LOBS Roadside got me back on the road so quickly. Worth every penny!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Drivers Who Trust Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="p-8 border-primary/20 bg-gradient-to-br from-muted/50 to-muted/20 animate-scale-in hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic text-sm">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
