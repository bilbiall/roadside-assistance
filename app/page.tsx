"use client"
import HeroSection from "@/components/sections/hero-section"
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
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <HeroSection />
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
