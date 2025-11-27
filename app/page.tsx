"use client"
import Navbar from "@/components/sections/navbar"
import HeroSlider from "@/components/sections/hero-slider"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import WhyChooseSection from "@/components/sections/why-choose-section"
import CoverageSection from "@/components/sections/coverage-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import PricingSection from "@/components/sections/pricing-section"
import CTABanner from "@/components/sections/cta-banner"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <CoverageSection />
      <TestimonialsSection />
      <PricingSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
