"use client"

import { useState } from "react"
import { ChevronDown, Heart, Calendar, Palette, Users, Sparkles } from "lucide-react"

interface Service {
  title: string
  description: string
  image: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    title: "Nişan Töreni Organizasyonu",
    description:
      "At Refit, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    image: "/white-flower-wedding.png",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Düğün Organizasyonu",
    description:
      "Maximise your home's potential with a bespoke loft conversion. Whether you're looking for an extra bedroom, office, or living space, Refit transforms underused lofts into stylish, functional areas, adding both value and comfort to your home with expert planning and precision construction.",
    image: "/elegant-floral-dining.png",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    title: "Konsept Tasarım & Planlama",
    description:
      "From luxurious en-suites to practical family bathrooms, Refit delivers beautifully designed spaces that combine style with functionality. We handle everything from tiling and fixtures to plumbing and lighting, ensuring a high-quality finish that enhances both comfort and aesthetics.",
    image: "/modern-living-room.png",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Mekan & Tedarikçi Koordinasyonu",
    description:
      "Expand your living space with a seamless home extension. Whether you need a bigger kitchen, a new living area, or a multi-purpose space, Refit provides expertly crafted extensions designed to enhance your home's flow, value, and usability, all while maintaining its unique character.",
    image: "/luxury-soft-bedroom.png",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Evlilik Teklifi",
    description:
      "Create unforgettable proposal moments with our specialized planning services. We design intimate, romantic settings that perfectly capture your love story and create memories that will last a lifetime.",
    image: "/hands-arranging-flowers.png",
    icon: <Sparkles className="w-5 h-5" />,
  },
]

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <img
          src={services[activeService].image || "/placeholder.svg"}
          alt={services[activeService].title}
          className="w-full rounded-lg aspect-[4/3] object-cover"
        />
      </div>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveService(activeService === index ? -1 : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${activeService === index ? "rotate-180" : ""}`} />
            </button>
            {activeService === index && (
              <div className="px-4 pb-4">
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
