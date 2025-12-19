'use client'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
   iconRetinaUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
   iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
   shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
})

interface LeafletMapComponentProps {
   coordinates: [number, number] // [latitude, longitude]
   zoom?: number
   className?: string
}

const LeafletMapComponent = ({
   coordinates,
   zoom = 17,
   className
}: LeafletMapComponentProps) => {
   const mapRef = useRef<HTMLDivElement>(null)
   const mapInstance = useRef<L.Map | null>(null)

   useEffect(() => {
      if (mapInstance.current || !mapRef.current) return

      // Initialize map
      mapInstance.current = L.map(mapRef.current, {
         center: coordinates,
         zoom: zoom,
         zoomControl: false, // Disable default zoom control to avoid duplicates
         attributionControl: false
      })

      // Light theme tile layer - much brighter
      const lightTileLayer = L.tileLayer(
         'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
         {
            attribution: '©OpenStreetMap contributors',
            maxZoom: 19
         }
      )

      lightTileLayer.addTo(mapInstance.current)

      // Custom marker icon
      // const customIcon = L.divIcon({
      //    className: 'custom-marker',
      //    html: `
      //   <div style="
      //     width: 35px;
      //     height: 35px;
      //     background: #FF6B35;
      //     border: 3px solid white;
      //     border-radius: 50%;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //     box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      //     font-size: 18px;
      //     color: white;
      //     font-weight: bold;
      //   ">
      //     🏢
      //   </div>
      // `,
      //    iconSize: [35, 35],
      //    iconAnchor: [17, 35],
      //    popupAnchor: [0, -35]
      // })

      // Add marker
      const marker = L.marker(coordinates).addTo(
         mapInstance.current
      )

      // Add popup
      const popup = L.popup({
         closeButton: true,
         maxWidth: 350,
         className: 'custom-popup'
      })

      marker.bindPopup(popup)

      // Add single zoom control
      L.control
         .zoom({
            position: 'topright'
         })
         .addTo(mapInstance.current)

      // Cleanup function
      return () => {
         if (mapInstance.current) {
            mapInstance.current.remove()
            mapInstance.current = null
         }
      }
   }, [coordinates, zoom])

   return (
      <div
         ref={mapRef}
         className={className}
         style={{
            width: '100%',
            height: '100%', // Changed to 100% to match parent container
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative'
         }}
      />
   )
}

export default LeafletMapComponent
