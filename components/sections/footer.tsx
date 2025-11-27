"use client"

import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-xl font-semibold tracking-tight mb-4 block">
              LOBS<span className="text-accent">Roadside</span>
            </span>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Your trusted partner for 24/7 roadside assistance and emergency rescue services across Nairobi.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/60 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Towing", "Flat Tire Fix", "Battery Jump-Start", "Fuel Delivery", "Lockout Help"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-background/60 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+254740194858"
                  className="flex items-center gap-3 text-background/60 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0740 194 858
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254740194858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/60 hover:text-accent transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@lobsroadside.com"
                  className="flex items-center gap-3 text-background/60 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  support@lobsroadside.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>&copy; {currentYear} LOBS Roadside. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
