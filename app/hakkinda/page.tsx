"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { Edit, Save, X, Upload, Sparkles, Loader2, Award, Users, Calendar, CheckCircle, Star, HeartHandshake, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AboutContent {
  description: string
  imageUrl: string | null
}

export default function AboutPage() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [content, setContent] = useState<AboutContent>({
    description: "",
    imageUrl: null
  })
  const [tempContent, setTempContent] = useState<AboutContent>(content)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetchContent()
    
    const adminStatus = localStorage.getItem("isAdmin")
    setIsAdmin(adminStatus === "true")
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/about')
      const data = await response.json()
      setContent(data)
      setTempContent(data)
    } catch (error) {
      console.error("Failed to fetch content:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Dosya boyutu 5MB'dan küçük olmalıdır!")
        return
      }
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setTempContent({ ...tempContent, imageUrl: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tempContent),
      })
      
      if (response.ok) {
        setContent(tempContent)
        setIsEditMode(false)
      } else {
        alert("Kaydetme işlemi başarısız oldu!")
      }
    } catch (error) {
      console.error("Failed to save content:", error)
      alert("Bir hata oluştu!")
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setTempContent(content)
    setIsEditMode(false)
  }

  const handleEdit = () => {
    setTempContent(content)
    setIsEditMode(true)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F2EDD1] via-[#F9CB99] to-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#BCA88D] animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99] backdrop-blur-sm border-b border-[#BCA88D]/30 transition-all duration-300">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 relative">
            <Image 
              src="/logo.png" 
              alt="Solara Event Logo" 
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            Ana Sayfa
          </Link>
          {isAdmin && !isEditMode && (
            <Button
              onClick={handleEdit}
              className="bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-[#8B7355] hover:to-[#6B5B47] text-white"
            >
              <Edit className="w-4 h-4 mr-2" />
              Düzenle
            </Button>
          )}
        </div>
      </nav>


      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {isEditMode ? (
            <AnimatedSection>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#F2EDD1]">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">İçeriği Düzenle</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fotoğraf Yükle (Max 5MB)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-[#8B7355] hover:to-[#6B5B47] text-white rounded-xl transition-all shadow-lg hover:shadow-xl"
                      >
                        <Upload className="w-5 h-5" />
                        Fotoğraf Seç
                      </label>
                      {tempContent.imageUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => setTempContent({ ...tempContent, imageUrl: null })}
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      )}
                    </div>
                    {tempContent.imageUrl && (
                      <div className="mt-6 relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={tempContent.imageUrl}
                          alt="Hakkımızda"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Açıklama
                    </label>
                    <Textarea
                      value={tempContent.description}
                      onChange={(e) => setTempContent({ ...tempContent, description: e.target.value })}
                      className="min-h-[250px] border-[#F2EDD1] focus:border-[#BCA88D] text-lg"
                      placeholder="Hakkımızda açıklaması..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleSave}
                      disabled={isSaving}
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                    >
                      {isSaving ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Save className="w-5 h-5 mr-2" />
                      )}
                      {isSaving ? "Kaydediliyor..." : "Kaydet"}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      size="lg"
                      disabled={isSaving}
                      className="border-gray-300 hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 mr-2" />
                      İptal
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ) : (
            <>
              <AnimatedSection>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-[#BCA88D] to-[#8B7355] text-white px-4 py-2 rounded-full text-sm mb-6">
                      Hakkımda
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                      Merhaba!
                    </h2>
                    <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {content.description || "İçerik henüz eklenmemiş."}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#F2EDD1] rounded-xl flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-[#BCA88D]" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Profesyonel Yaklaşım</div>
                          <div className="text-sm text-gray-600">Kişisel hizmet</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#F2EDD1] rounded-xl flex items-center justify-center">
                          <Star className="w-6 h-6 text-[#BCA88D]" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">%100 Memnuniyet</div>
                          <div className="text-sm text-gray-600">Garantili hizmet</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {content.imageUrl && (
                    <div className="relative">
                      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={content.imageUrl}
                          alt="Hakkımızda"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-20"></div>
                      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-30"></div>
                    </div>
                  )}
                </div>
              </AnimatedSection>

              {/* Stats Section */}
              <AnimatedSection>
                <div className="bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99] rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Deneyimim
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-[#BCA88D] mb-2">
                          <AnimatedCounter end={500} suffix="+" />
                        </div>
                        <div className="text-gray-700 font-medium">Düzenlediğim Etkinlik</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-[#BCA88D] mb-2">
                          <AnimatedCounter end={50} suffix="+" />
                        </div>
                        <div className="text-gray-700 font-medium">İş Ortağım</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-[#BCA88D] mb-2">
                          <AnimatedCounter end={15} />
                        </div>
                        <div className="text-gray-700 font-medium">Yıllık Deneyimim</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-[#BCA88D] mb-2">
                          <AnimatedCounter end={100} suffix="%" />
                        </div>
                        <div className="text-gray-700 font-medium">Memnuniyet</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Values Section */}
              <AnimatedSection className="mt-20">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  Çalışma Prensiplerim
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F2EDD1] hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-xl flex items-center justify-center mb-6">
                      <HeartHandshake className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Güven & Şeffaflık</h4>
                    <p className="text-gray-600">
                      Müşterilerimle kurduğum güven ilişkisi ve şeffaf iletişim anlayışım ile her adımda yanınızdayım.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F2EDD1] hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-xl flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Kalite & Mükemmellik</h4>
                    <p className="text-gray-600">
                      Her detayda mükemmelliği hedefleyen yaklaşımımla, beklentilerinizi aşan organizasyonlar yaratıyorum.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F2EDD1] hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-xl flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Yaratıcılık & İnovasyon</h4>
                    <p className="text-gray-600">
                      Trendleri takip eden ve yenilikçi fikirlerle özgün organizasyonlar tasarlıyorum.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!isEditMode && (
        <AnimatedSection className="py-20 bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Hayalinizdeki Organizasyonu Birlikte Yaşatalım
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Deneyimim ve tutkumla özel gününüzü unutulmaz kılmak için buradayım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-[#8B7355] hover:to-[#6B5B47] text-white">
                  Ücretsiz Teklif Al
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="border-[#BCA88D] text-[#BCA88D] hover:bg-[#F2EDD1]">
                  Hizmetlerimizi İncele
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}