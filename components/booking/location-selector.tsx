"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

interface LocationSelectorProps {
  onLocationSelect: (location: {
    latitude: number
    longitude: number
    address: string
  }) => void
}

export default function LocationSelector({ onLocationSelect }: LocationSelectorProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const marker = useRef<any>(null)
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number
    lng: number
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!mapContainer.current) return

    const loadLeaflet = async () => {
      if (typeof window !== "undefined") {
        if (!window.L) {
          const leafletCSS = document.createElement("link")
          leafletCSS.rel = "stylesheet"
          leafletCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
          document.head.appendChild(leafletCSS)

          const leafletScript = document.createElement("script")
          leafletScript.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
          leafletScript.async = true
          leafletScript.onload = () => {
            setIsLoading(false)
            initMap()
          }
          document.head.appendChild(leafletScript)
        } else {
          setIsLoading(false)
          initMap()
        }
      }
    }

    function initMap() {
      if (!mapContainer.current) return
      const L = (window as any).L
      const nairobiCoords: [number, number] = [-1.2865, 36.8172]

      if (!map.current) {
        map.current = L.map(mapContainer.current).setView(nairobiCoords, 12)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map.current)

        map.current.on("click", (e: any) => {
          const { lat, lng } = e.latlng
          setSelectedLocation({ lat, lng })

          if (marker.current) {
            marker.current.remove()
          }

          marker.current = L.marker([lat, lng], {
            icon: L.icon({
              iconUrl:
                "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
              shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            }),
          })
            .addTo(map.current)
            .bindPopup("Selected Location")
            .openPopup()

          onLocationSelect({
            latitude: lat,
            longitude: lng,
            address: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
          })
        })
      }
    }

    loadLeaflet()

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [onLocationSelect])

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold flex items-center gap-2 text-foreground">
        <MapPin className="w-4 h-4" />
        Select Your Location on Map
      </label>
      <Card className="border-2 border-primary/20 p-0 overflow-hidden">
        {isLoading && (
          <div className="w-full h-80 bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        )}
        <div ref={mapContainer} className="w-full h-80 rounded-lg" />
      </Card>
      {selectedLocation && (
        <p className="text-sm text-muted-foreground">
          Selected: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
        </p>
      )}
    </div>
  )
}
