"use client"

import { useState, useEffect } from "react"
import { AnimatedCounter } from "@/components/animated-counter"

interface AboutData {
  description: string
  imageUrl: string | null
}

export function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData>({ 
    description: "Selin Özyurt tarafından 2023 senesinde kurulan Solara Event, özel anları benzersiz deneyimlere dönüştürme vizyonuyla hayata geçirildi.\n\nBilkent Üniversitesi Siyaset Bilimi ve Kamu Yönetimi mezuniyetinin ardından, kurumsal iş hayatında 5 yıl boyunca edindiği deneyimi yaratıcılığıyla harmanlayan Selin Özyurt, etkinlik sektöründe kişiye özel tasarımları merkeze alan bir anlayış geliştirdi.\n\nAntalya'nın büyüleyici atmosferinden ilham alan Solara Event, düğünlerden kurumsal organizasyonlara kadar her anı, tamamen size özgü detaylarla tasarlayarak unutulmaz bir deneyime dönüştürür.",
    imageUrl: null 
  })

  // API'den veriyi yükle
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('/api/about')
        const data = await response.json()
        setAboutData(data)
      } catch (error) {
        console.error('Error fetching about data:', error)
      }
    }
    
    fetchAboutData()
  }, [])

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Mobile: Fotoğraf üstte */}
      <div className="md:hidden flex justify-center order-1">
        {aboutData.imageUrl ? (
          <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={aboutData.imageUrl} 
              alt="Solara Event" 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          // Varsayılan fotoğraf grid'i (eğer admin fotoğraf yüklemezse)
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="space-y-4">
              <img src="/biz_kimiz_1.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
              <img src="/biz_kimiz_2.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="/biz_kimiz_3.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
              <img src="/biz_kimiz_4.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        )}
      </div>

      {/* Metin kısmı */}
      <div className="order-2 md:order-1">
        <div className="prose prose-gray max-w-none">
          {aboutData.description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Başarılı Etkinlik</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Otel İş Ortağı</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-sm text-gray-600">Memnuniyet</div>
          </div>
        </div>
      </div>
      
      {/* Desktop: Fotoğraf sağda */}
      <div className="hidden md:flex justify-center order-2">
        {aboutData.imageUrl ? (
          <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={aboutData.imageUrl} 
              alt="Solara Event" 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          // Varsayılan fotoğraf grid'i (eğer admin fotoğraf yüklemezse)
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="space-y-4">
              <img src="/biz_kimiz_1.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
              <img src="/biz_kimiz_2.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="/biz_kimiz_3.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
              <img src="/biz_kimiz_4.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}