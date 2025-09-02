"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const imageGroups = [
  {
    group: "hero-1",
    images: [
      "/hero-images/hero-1/334A4353_compressed.jpg",
      "/hero-images/hero-1/334A4401_compressed.jpg",
      "/hero-images/hero-1/334A4414_compressed.jpg"
    ]
  },
  {
    group: "hero-2", 
    images: [
      "/hero-images/hero-2/IMG_1982_compressed.jpg",
      "/hero-images/hero-2/IMG_1996_compressed.jpg",
      "/hero-images/hero-2/IMG_2004_compressed.jpg"
    ]
  },
  {
    group: "hero-3",
    images: [
      "/hero-images/hero-3/IMG_0926_compressed.jpg",
      "/hero-images/hero-3/IMG_0949_compressed.jpg",
      "/hero-images/hero-3/IMG_0963_compressed.jpg"
    ]
  },
  {
    group: "hero-4",
    images: [
      "/hero-images/hero-4/IMG_8721_compressed.jpg",
      "/hero-images/hero-4/IMG_8730_compressed.jpg",
      "/hero-images/hero-4/IMG_8801_compressed.jpg"
    ]
  }
]

// Mobil için tüm resimleri tek tek listele
const allImages = imageGroups.flatMap(group => 
  group.images.map(image => ({
    src: image,
    group: group.group
  }))
)

export function HeroCarousel() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [resetTimer, setResetTimer] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        // Mobilde tek tek resim değiştir
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
      } else {
        // Desktop'ta grup değiştir
        setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % imageGroups.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [resetTimer, isMobile])

  const goToPrevious = () => {
    if (isMobile) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
      )
    } else {
      setCurrentGroupIndex((prevIndex) => 
        prevIndex === 0 ? imageGroups.length - 1 : prevIndex - 1
      )
    }
    setResetTimer(prev => prev + 1)
  }

  const goToNext = () => {
    if (isMobile) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
    } else {
      setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % imageGroups.length)
    }
    setResetTimer(prev => prev + 1)
  }

  const handleIndicatorClick = (index: number) => {
    if (isMobile) {
      setCurrentImageIndex(index)
    } else {
      setCurrentGroupIndex(index)
    }
    setResetTimer(prev => prev + 1)
  }

  return (
    <div className="relative w-full h-full bg-black">
      {/* Desktop: 3'lü grup gösterimi */}
      <div className="hidden md:block h-full">
        {imageGroups.map((group, groupIndex) => (
          <div
            key={group.group}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              groupIndex === currentGroupIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-3 h-full w-full">
              {group.images.map((src, imgIndex) => (
                <div key={imgIndex} className="relative h-full w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Solara Event - ${group.group} - ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobil: Tek resim gösterimi */}
      <div className="md:hidden h-full">
        {allImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Solara Event - ${image.group} - ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-sm text-black p-3 rounded-full transition-all z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-sm text-black p-3 rounded-full transition-all z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {/* Desktop: Grup sayısı kadar indicator */}
        <div className="hidden md:flex gap-2">
          {imageGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentGroupIndex 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Mobil: Tüm resimler için indicator */}
        <div className="md:hidden flex gap-2">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}