"use client"

import { useState } from "react"
import { ChevronDown, Heart, Calendar, Palette, Users, Sparkles, Building, Award, Mic, GraduationCap, Handshake, Network, Baby, PartyPopper, HeartHandshake, Globe } from "lucide-react"

interface Service {
  category: string
  categoryIcon: React.ReactNode
  items: ServiceItem[]
}

interface ServiceItem {
  title: string
  image: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    category: "Özel Gün & Etkinlik Organizasyonları",
    categoryIcon: <HeartHandshake className="w-6 h-6" />,
    items: [
      {
        title: "Yerli ve Yabancı Düğünler",
        image: "/yerli-yabanci-dugun.JPG",
        icon: <Heart className="w-5 h-5" />,
      },
      {
        title: "Nişan ve Söz Organizasyonu",
        image: "/nisan-soz-torenleri.jpg",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Baby Shower ve Doğum Günleri",
        image: "/baby-shower.jpg",
        icon: <Baby className="w-5 h-5" />,
      },
      {
        title: "Temalı Kutlamalar",
        image: "/temali-kutlamalar.jpg",
        icon: <Sparkles className="w-5 h-5" />,
      },
    ]
  },
  {
    category: "Kurumsal Organizasyonlar",
    categoryIcon: <Building className="w-6 h-6" />,
    items: [
      {
        title: "Gala Geceleri",
        image: "/gala-geceleri.jpg",
        icon: <Award className="w-5 h-5" />,
      },
      {
        title: "Açılış & Lansman Etkinlikleri",
        image: "/acilis-lansman.jpg",
        icon: <Building className="w-5 h-5" />,
      },
      {
        title: "Basın Toplantıları",
        image: "/biz_kimiz_1.JPG",
        icon: <Mic className="w-5 h-5" />,
      },
      {
        title: "Eğitim Kampları",
        image: "/egitim-motivasyon-kamp.JPG",
        icon: <GraduationCap className="w-5 h-5" />,
      },
      {
        title: "Bayi Toplantıları",
        image: "/bayi-toplantilari.JPG",
        icon: <Handshake className="w-5 h-5" />,
      },
      {
        title: "Networking Davetleri",
        image: "/biz_kimiz_2.JPG",
        icon: <Network className="w-5 h-5" />,
      },
    ]
  }
]

export function ServicesAccordion() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="space-y-12">
      {services.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 border-b border-gray-400/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center text-white">
                {category.categoryIcon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Image Section */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-4">
                  <img
                    src={category.items[categoryIndex === activeCategory && activeService !== -1 ? activeService : 0]?.image || "/placeholder.svg"}
                    alt={category.items[categoryIndex === activeCategory && activeService !== -1 ? activeService : 0]?.title || ""}
                    className="w-full rounded-xl aspect-[4/3] object-cover shadow-lg"
                  />
                  <div className="mt-4 p-4 bg-gray-200 rounded-xl">
                    <p className="text-sm text-gray-700 font-medium text-center">
                      Profesyonel ekibimizle hayalinizdeki organizasyonu gerçeğe dönüştürüyoruz
                    </p>
                  </div>
                </div>
              </div>

              {/* Accordion Section */}
              <div className="space-y-3 order-1 lg:order-2">
                {category.items.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex} 
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                      categoryIndex === activeCategory && activeService === serviceIndex 
                        ? 'border-black shadow-lg' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setActiveCategory(categoryIndex)
                        setActiveService(activeService === serviceIndex && categoryIndex === activeCategory ? -1 : serviceIndex)
                      }}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                        categoryIndex === activeCategory && activeService === serviceIndex 
                          ? 'bg-gradient-to-r from-gray-100 to-gray-200' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          categoryIndex === activeCategory && activeService === serviceIndex 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-black'
                        }`}>
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900">{service.title}</h4>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          categoryIndex === activeCategory && activeService === serviceIndex ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}