"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Edit3, Save, X, Upload, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AboutData {
  description: string
  imageUrl: string | null
}

export default function HakkindaPage() {
  const [aboutData, setAboutData] = useState<AboutData>({ description: "", imageUrl: null })
  const [isEditing, setIsEditing] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [editData, setEditData] = useState<AboutData>({ description: "", imageUrl: null })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Admin durumunu kontrol et
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin")
    setIsAdmin(adminStatus === "true")
  }, [])

  // Veriyi yükle
  useEffect(() => {
    fetchAboutData()
  }, [])

  const fetchAboutData = async () => {
    try {
      const response = await fetch('/api/about')
      const data = await response.json()
      setAboutData(data)
      setEditData(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching about data:', error)
      setLoading(false)
    }
  }

  const handleEdit = () => {
    setEditData({ ...aboutData })
    setIsEditing(true)
  }

  const handleCancel = () => {
    setEditData({ ...aboutData })
    setIsEditing(false)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      })

      if (response.ok) {
        setAboutData({ ...editData })
        setIsEditing(false)
      } else {
        alert('Kaydetme sırasında hata oluştu!')
      }
    } catch (error) {
      console.error('Error saving about data:', error)
      alert('Kaydetme sırasında hata oluştu!')
    }
    setSaving(false)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert('Dosya boyutu 5MB\'dan küçük olmalıdır!')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setEditData(prev => ({ ...prev, imageUrl: result }))
    }
    reader.readAsDataURL(file)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 backdrop-blur-sm border-b border-gray-400/30">
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
          <Link href="/" className="text-gray-700 hover:text-black transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            Ana Sayfa
          </Link>
          {isAdmin && !isEditing && (
            <Button
              onClick={handleEdit}
              size="sm"
              className="bg-gradient-to-r from-gray-600 to-black hover:from-gray-700 hover:to-gray-900 text-white"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Düzenle
            </Button>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Hakkımızda</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black mx-auto"></div>
          </div>

          <Card className="border-gray-200 shadow-xl">
            <CardContent className="p-8">
              {isEditing ? (
                // Edit Mode
                <div className="space-y-6">
                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Profil Fotoğrafı
                    </label>
                    
                    {/* Büyük yükleme alanı */}
                    <div className="w-full max-w-md mx-auto">
                      <label 
                        htmlFor="photo-upload" 
                        className="block w-full h-64 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center h-full p-6">
                          {editData.imageUrl ? (
                            <img 
                              src={editData.imageUrl} 
                              alt="Yüklenen fotoğraf" 
                              className="max-w-full max-h-full object-contain rounded-lg"
                            />
                          ) : (
                            <>
                              <Upload className="w-12 h-12 text-gray-400 mb-4" />
                              <p className="text-gray-600 font-medium text-center">
                                Fotoğraf yüklemek için tıklayın
                              </p>
                              <p className="text-gray-500 text-sm mt-2 text-center">
                                veya fotoğrafı buraya sürükleyin
                              </p>
                              <p className="text-gray-400 text-xs mt-3">
                                JPG, PNG, GIF (max. 5MB)
                              </p>
                            </>
                          )}
                        </div>
                      </label>
                      
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      
                      {editData.imageUrl && (
                        <div className="mt-3 text-center">
                          <button
                            type="button"
                            onClick={() => setEditData(prev => ({ ...prev, imageUrl: null }))}
                            className="text-red-600 hover:text-red-700 text-sm underline"
                          >
                            Fotoğrafı Kaldır
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Açıklama
                    </label>
                    <Textarea
                      value={editData.description}
                      onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                      rows={8}
                      className="resize-none"
                      placeholder="Hakkımızda metninizi buraya yazın..."
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={handleSave}
                      disabled={saving}
                      className="bg-gradient-to-r from-gray-600 to-black hover:from-gray-700 hover:to-gray-900 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {saving ? 'Kaydediliyor...' : 'Kaydet'}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      disabled={saving}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      <X className="w-4 h-4 mr-2" />
                      İptal
                    </Button>
                  </div>
                </div>
              ) : (
                // Display Mode
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="prose prose-gray max-w-none">
                      {aboutData.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    {aboutData.imageUrl ? (
                      <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src={aboutData.imageUrl} 
                          alt="Hakkımızda" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-80 h-80 rounded-2xl bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">Fotoğraf yüklenmemiş</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}