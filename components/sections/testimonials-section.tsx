"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Business Owner",
      rating: 5,
      quote:
        "I was stranded on Mombasa Road late at night. LOBS Roadside arrived in 20 minutes and handled everything professionally. I felt safe the entire time. Highly recommend their services!",
      image: "/professional-african-woman-smiling-portrait.png",
    },
    {
      name: "James Ochieng",
      role: "Sales Executive",
      rating: 5,
      quote:
        "Best roadside assistance service I've used in Nairobi. Their technician was courteous, efficient, and fixed my flat tire in minutes. Worth every shilling!",
      image: "/professional-african-man-portrait-smiling.jpg",
    },
    {
      name: "Patricia Muthoni",
      role: "Doctor",
      rating: 5,
      quote:
        "Had a dead battery and was worried about missing an important shift at the hospital. LOBS Roadside got me back on the road so quickly. Exceptional service!",
      image: "/professional-african-woman-doctor-portrait.jpg",
    },
    {
      name: "David Kimani",
      role: "Engineer",
      rating: 5,
      quote:
        "Their GPS tracking feature is amazing. I could see exactly when help was arriving. The technician was professional and knowledgeable. Five stars!",
      image: "/professional-african-engineer.png",
    },
    {
      name: "Mary Akinyi",
      role: "Teacher",
      rating: 5,
      quote:
        "Locked myself out of my car near Westlands. Called LOBS and they sent help within 15 minutes. The locksmith was incredibly skilled. Thank you!",
      image: "/professional-african-woman-teacher-portrait.jpg",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleManualNavigation = (direction: "prev" | "next") => {
    setIsAutoPlaying(false)
    if (direction === "prev") prevSlide()
    else nextSlide()
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground">Real stories from drivers who trust LOBS Roadside</p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/10" />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 10000)
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-accent rounded-full"
                      : "w-2 h-2 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => handleManualNavigation("prev")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleManualNavigation("next")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
