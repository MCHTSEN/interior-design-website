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
  description: string
  image: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    category: "Özel Gün & Etkinlik Organizasyonları",
    categoryIcon: <HeartHandshake className="w-6 h-6" />,
    items: [
      {
        title: "Yerli & Yabancı Düğünler",
        description: "Hayalinizdeki düğünü gerçeğe dönüştürüyoruz. Konsept tasarımından dekor uygulamasına, catering hizmetlerinden eğlence programına kadar her detayı özenle planlıyor, kültürel farklılıkları göz önünde bulundurarak unutulmaz bir deneyim yaratıyoruz.",
        image: "/yerli-yabanci-dugun.JPG",
        icon: <Heart className="w-5 h-5" />,
      },
      {
        title: "Nişan & Söz Törenleri",
        description: "Birlikteliğinizin ilk adımlarını özel kılıyoruz. Modern veya geleneksel konseptlerle, size özel tasarladığımız nişan ve söz törenlerinde, sevdiklerinizle paylaşacağınız mutlu anları kusursuz bir organizasyonla taçlandırıyoruz.",
        image: "/nisan-soz-torenleri.jpg",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Baby Shower / Doğum Günü Partileri",
        description: "Özel günlerinizi eğlenceli ve yaratıcı temalarla kutluyoruz. Bebek partilerinden yetişkin doğum günlerine, tematik dekorasyonlardan özel aktivitelere kadar her yaş grubuna uygun benzersiz organizasyonlar düzenliyoruz.",
        image: "/baby-shower.jpg",
        icon: <Baby className="w-5 h-5" />,
      },
      {
        title: "Temalı Kutlamalar",
        description: "Hayal gücünüzün sınırlarını zorlayan özel konseptler yaratıyoruz. Vintage, bohemian, gatsby veya tamamen size özel temalarla, misafirlerinizi büyüleyecek unutulmaz deneyimler tasarlıyoruz.",
        image: "/temali-kutlamalar.jpg",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        title: "Evlilik Teklifi Organizasyonu",
        description: "Hayatınızın en özel anını mükemmel kılıyoruz. Romantik ve yaratıcı evlilik teklifi konseptleriyle, partnerinize unutamayacağı sürprizler hazırlıyor, bu eşsiz anı ölümsüzleştiriyoruz.",
        image: "/evlilik-teklifi.jpg",
        icon: <PartyPopper className="w-5 h-5" />,
      },
    ]
  },
  {
    category: "Kurumsal Organizasyonlar",
    categoryIcon: <Building className="w-6 h-6" />,
    items: [
      {
        title: "Gala Geceleri & Ödül Törenleri",
        description: "Kurumsal başarılarınızı görkemli organizasyonlarla kutluyoruz. Sahne tasarımından ışık ve ses sistemlerine, protokol yönetiminden catering hizmetlerine kadar tüm detayları profesyonelce yönetiyor, markanızın prestijini yansıtıyoruz.",
        image: "/gala-geceleri.jpg",
        icon: <Award className="w-5 h-5" />,
      },
      {
        title: "Açılış & Lansman Etkinlikleri",
        description: "Yeni başlangıçlarınızı etkileyici organizasyonlarla duyuruyoruz. Ürün lansmanlarından mağaza açılışlarına, konsept tasarımından davetli yönetimine kadar markanızı öne çıkaracak yaratıcı etkinlikler düzenliyoruz.",
        image: "/acilis-lansman.jpg",
        icon: <Building className="w-5 h-5" />,
      },
      {
        title: "Basın Toplantıları & PR Etkinlikleri",
        description: "Mesajınızı doğru kitleye ulaştırıyoruz. Basın mensuplarının katılımını sağlayacak profesyonel organizasyonlarla, marka görünürlüğünüzü artırıyor ve medya ilişkilerinizi güçlendiriyoruz.",
        image: "/biz_kimiz_1.JPG",
        icon: <Mic className="w-5 h-5" />,
      },
      {
        title: "Eğitim & Motivasyon Kampları",
        description: "Ekibinizin gelişimini destekleyen verimli organizasyonlar düzenliyoruz. Otel seçiminden workshop düzenlemelerine, team building aktivitelerinden konuk konuşmacı organizasyonlarına kadar her detayı planlıyoruz.",
        image: "/egitim-motivasyon-kamp.JPG",
        icon: <GraduationCap className="w-5 h-5" />,
      },
      {
        title: "Bayi Toplantıları",
        description: "İş ortaklarınızla bağlarınızı güçlendiriyoruz. Bayi toplantılarınızı verimli ve motive edici organizasyonlarla destekliyor, network fırsatları yaratarak iş birliklerinizi pekiştiriyoruz.",
        image: "/bayi-toplantilari.JPG",
        icon: <Handshake className="w-5 h-5" />,
      },
      {
        title: "Networking Davetleri",
        description: "İş dünyasını bir araya getiren prestijli etkinlikler organize ediyoruz. Kokteyl partilerinden iş yemeklerine, sektörel buluşmalardan VIP davetlere kadar profesyonel network ortamları yaratıyoruz.",
        image: "/biz_kimiz_2.JPG",
        icon: <Network className="w-5 h-5" />,
      },
      {
        title: "Uluslararası Organizasyonlar",
        description: "Sınırları aşan etkinlikler düzenliyoruz. Farklı kültürleri ve iş yapış şekillerini bilen deneyimli ekibimizle, uluslararası standartlarda organizasyonlar gerçekleştiriyor, global markanızı destekliyoruz.",
        image: "/ulurslararasi-organizasyonlar.jpg",
        icon: <Globe className="w-5 h-5" />,
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
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 border-b border-pink-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white">
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
                    src={category.items[categoryIndex === activeCategory ? activeService : 0].image || "/placeholder.svg"}
                    alt={category.items[categoryIndex === activeCategory ? activeService : 0].title}
                    className="w-full rounded-xl aspect-[4/3] object-cover shadow-lg"
                  />
                  <div className="mt-4 p-4 bg-pink-50 rounded-xl">
                    <p className="text-sm text-pink-800 font-medium text-center">
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
                        ? 'border-pink-400 shadow-lg' 
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setActiveCategory(categoryIndex)
                        setActiveService(activeService === serviceIndex && categoryIndex === activeCategory ? -1 : serviceIndex)
                      }}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                        categoryIndex === activeCategory && activeService === serviceIndex 
                          ? 'bg-gradient-to-r from-pink-50 to-rose-50' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          categoryIndex === activeCategory && activeService === serviceIndex 
                            ? 'bg-pink-500 text-white' 
                            : 'bg-pink-100 text-pink-600'
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
                    {categoryIndex === activeCategory && activeService === serviceIndex && (
                      <div className="px-4 pb-4 pt-2">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    )}
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