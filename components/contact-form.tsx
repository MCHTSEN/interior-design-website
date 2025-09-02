"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  eventType: string
  guestCount: string
  eventDate: string
  details: string
  company?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    details: '',
    company: ''
  })

  const eventTypes = {
    wedding: 'Düğün',
    engagement: 'Nişan / Söz',
    corporate: 'Kurumsal Etkinlik',
    gala: 'Gala / Ödül Töreni',
    launch: 'Açılış / Lansman',
    birthday: 'Doğum Günü',
    babyshower: 'Baby Shower',
    other: 'Diğer'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateWhatsAppMessage = () => {
    const eventTypeName = eventTypes[formData.eventType as keyof typeof eventTypes] || formData.eventType
    
    let message = `Merhaba! Solara Event web sitesinden teklif talebi gonderiyorum.\n\n`
    message += `KISI BILGILERI:\n`
    message += `- Ad Soyad: ${formData.firstName} ${formData.lastName}\n`
    message += `- Telefon: ${formData.phone}\n`
    message += `- E-posta: ${formData.email}\n`
    
    if (formData.company) {
      message += `- Firma: ${formData.company}\n`
    }
    
    message += `\nETKINLIK BILGILERI:\n`
    message += `- Etkinlik Turu: ${eventTypeName}\n`
    
    if (formData.eventDate) {
      message += `- Tarih: ${formData.eventDate}\n`
    }
    
    if (formData.guestCount) {
      message += `- Kisi Sayisi: ${formData.guestCount}\n`
    }
    
    if (formData.details) {
      message += `\nDETAYLAR:\n${formData.details}\n`
    }
    
    message += `\nSize uygun bir zamanda aramanizi bekliyorum. Tesekkurler!`
    
    return encodeURIComponent(message)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form doğrulama
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.eventType) {
      alert('Lütfen zorunlu alanları doldurun!')
      return
    }
    
    const whatsappMessage = generateWhatsAppMessage()
    const phoneNumber = '+905323735111' // Selin Hanım'ın numarası
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
    
    // WhatsApp'ı yeni sekmede aç
    window.open(whatsappUrl, '_blank')
    
    // Formu temizle (isteğe bağlı)
    // setFormData({
    //   firstName: '', lastName: '', email: '', phone: '', 
    //   eventType: '', guestCount: '', eventDate: '', details: '', company: ''
    // })
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Ücretsiz Teklif Talebi</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input 
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Adınız *" 
            className="text-black" 
            required
          />
          <Input 
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Soyadınız *" 
            className="text-black" 
            required
          />
        </div>
        
        <Input 
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Firma Adı (İsteğe bağlı)" 
          className="text-black" 
        />
        
        <Input 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="E-posta adresiniz" 
          type="email" 
          className="text-black" 
        />
        
        <Input 
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Telefon numaranız *" 
          type="tel" 
          className="text-black" 
          required
        />
        
        <select 
          name="eventType"
          value={formData.eventType}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          required
        >
          <option value="">Etkinlik Türü Seçiniz *</option>
          <option value="wedding">Düğün</option>
          <option value="engagement">Nişan / Söz</option>
          <option value="corporate">Kurumsal Etkinlik</option>
          <option value="gala">Gala / Ödül Töreni</option>
          <option value="launch">Açılış / Lansman</option>
          <option value="birthday">Doğum Günü</option>
          <option value="babyshower">Baby Shower</option>
          <option value="other">Diğer</option>
        </select>
        
        <Input 
          name="eventDate"
          value={formData.eventDate}
          onChange={handleInputChange}
          placeholder="Etkinlik Tarihi" 
          type="date" 
          className="text-black" 
        />
        
        <Input 
          name="guestCount"
          value={formData.guestCount}
          onChange={handleInputChange}
          placeholder="Tahmini Kişi Sayısı" 
          type="number" 
          className="text-black" 
        />
        
        <Textarea 
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          placeholder="Etkinlik detayları ve özel istekleriniz..." 
          rows={4} 
          className="text-black" 
        />
        
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-gray-600 to-black hover:from-gray-700 hover:to-gray-900 text-white"
        >
          WhatsApp ile Teklif Talebi Gönder 📱
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          * işaretli alanlar zorunludur. Teklif talebiniz WhatsApp üzerinden iletilecektir.
        </p>
      </form>
    </div>
  )
}