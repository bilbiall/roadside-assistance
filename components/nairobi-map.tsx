"use client"

import { useEffect, useRef } from "react"

export default function NairobiMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Dynamically load Leaflet CSS and JS
    if (typeof window !== "undefined" && !window.L) {
      const leafletCSS = document.createElement("link")
      leafletCSS.rel = "stylesheet"
      leafletCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      document.head.appendChild(leafletCSS)

      const leafletScript = document.createElement("script")
      leafletScript.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
      leafletScript.onload = initMap
      document.head.appendChild(leafletScript)
    } else if (window.L && !map.current) {
      initMap()
    }

    function initMap() {
      const L = window.L
      // Nairobi coordinates
      const nairobiCoords: [number, number] = [-1.2865, 36.8172]

      if (!map.current) {
        map.current = L.map(mapContainer.current).setView(nairobiCoords, 10)

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map.current)

        // Add marker for Nairobi center
        L.marker(nairobiCoords, {
          icon: L.icon({
            iconUrl:
              "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          }),
        })
          .addTo(map.current)
          .bindPopup("RapidRoad Rescue - Nairobi Service Center")
      }
    }

    return () => {
      // Clean up map on unmount
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />
}
