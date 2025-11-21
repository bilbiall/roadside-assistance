"use client"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-accent">RapidRoad Rescue</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner for 24/7 roadside assistance and emergency rescue services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-primary-foreground/80 hover:text-accent transition">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                24/7 Hotline: 0700 123 456
              </li>
              <li className="flex gap-2 text-primary-foreground/80 hover:text-accent transition">
                <MessageCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                WhatsApp: +1 (555) 123-4567
              </li>
              <li className="flex gap-2 text-primary-foreground/80 hover:text-accent transition">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                support@rapidroad.com
              </li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-bold text-lg mb-4">Coverage Area</h4>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <div>
                <p>Highway Network</p>
                <p>Urban Areas</p>
                <p>Remote Regions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 RapidRoad Rescue. All rights reserved. | Emergency Line: 0700 123 456</p>
        </div>
      </div>
    </footer>
  )
}
