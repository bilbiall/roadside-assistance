"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, MessageCircle } from "lucide-react"

interface ServiceSelectionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceName: string
  serviceType: string
}

export default function ServiceSelectionModal({
  open,
  onOpenChange,
  serviceName,
  serviceType,
}: ServiceSelectionModalProps) {
  const whatsappNumber = "+254740194858"
  const whatsappMessage = `Hi LOBS Roadside, I need ${serviceName.toLowerCase()}.`
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Request {serviceName}</DialogTitle>
          <DialogDescription>Choose how you'd like to contact us</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Call Directly */}
          <a
            href="tel:+254740194858"
            className="block w-full py-6 px-4 flex flex-col items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md transition-colors cursor-pointer"
          >
            <Phone className="w-6 h-6" />
            <div className="text-center">
              <div className="font-bold">Call Directly</div>
              <div className="text-xs opacity-90">+254 740 194 858</div>
            </div>
          </a>

          {/* Text on WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-6 px-4 flex flex-col items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-md transition-colors cursor-pointer"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="text-center">
              <div className="font-bold">Text on WhatsApp</div>
              <div className="text-xs opacity-90">Quick response</div>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
