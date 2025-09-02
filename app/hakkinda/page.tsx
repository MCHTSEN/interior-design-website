"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Edit, Save, X, Upload, Sparkles, Loader2 } from "lucide-react"
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-pink-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-50 to-rose-50 backdrop-blur-sm border-b border-pink-200/30">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Solara Event</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">
            Ana Sayfa
          </Link>
          {isAdmin && !isEditMode && (
            <Button
              onClick={handleEdit}
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white"
            >
              <Edit className="w-4 h-4 mr-2" />
              Düzenle
            </Button>
          )}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <AnimatedSection>
          <Card className="border-pink-200/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Hakkımızda
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {isEditMode ? (
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
                        className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-lg transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        Fotoğraf Seç
                      </label>
                      {tempContent.imageUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setTempContent({ ...tempContent, imageUrl: null })}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    {tempContent.imageUrl && (
                      <div className="mt-4 relative w-full h-64 rounded-lg overflow-hidden">
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
                      className="min-h-[200px] border-pink-200 focus:border-pink-400"
                      placeholder="Hakkımızda açıklaması..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                    >
                      {isSaving ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4 mr-2" />
                      )}
                      {isSaving ? "Kaydediliyor..." : "Kaydet"}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      disabled={isSaving}
                      className="border-gray-300 hover:bg-gray-100"
                    >
                      <X className="w-4 h-4 mr-2" />
                      İptal
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {content.imageUrl && (
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                      <Image
                        src={content.imageUrl}
                        alt="Hakkımızda"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {content.description || "İçerik henüz eklenmemiş."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}