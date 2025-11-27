"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/african-american-tow-truck-driver-helping-customer.jpg",
    title: "24/7 Roadside Assistance",
    subtitle: "Help When You Need It Most",
    description: "Fast, reliable emergency rescue services across Nairobi. We're just one call away.",
  },
  {
    id: 2,
    image: "/african-american-mechanic-changing-flat-tire-on-ca.jpg",
    title: "Expert Tire Services",
    subtitle: "Flat Tire? No Problem",
    description: "Professional tire change and repair services delivered to your location in minutes.",
  },
  {
    id: 3,
    image: "/african-american-technician-jump-starting-car-batt.jpg",
    title: "Battery Jump Start",
    subtitle: "Get Back on the Road",
    description: "Dead battery? Our certified technicians will have you running in no time.",
  },
  {
    id: 4,
    image: "/african-american-tow-truck-operator-loading-car-on.jpg",
    title: "Professional Towing",
    subtitle: "Safe & Secure Transport",
    description: "State-of-the-art towing equipment for all vehicle types. Your car is in safe hands.",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <span
                  className={`inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {slide.subtitle}
                </span>
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 transition-all duration-700 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg text-white/80 mb-8 max-w-lg transition-all duration-700 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  {slide.description}
                </p>
                <div
                  className={`flex flex-wrap gap-4 transition-all duration-700 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <a href="tel:+254740194858">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 font-medium shadow-xl shadow-accent/30 transition-all duration-300 hover:shadow-accent/40 hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/254740194858?text=Hello%20LOBS%20Roadside%2C%20I%20need%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-2 bg-accent rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
