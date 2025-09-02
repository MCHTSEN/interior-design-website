import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedSection } from "@/components/animated-section"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesAccordion } from "@/components/services-accordion"
import StructuredData from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Award, Instagram, Mail, MapPin, Phone, Star, Users } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 backdrop-blur-sm border-b border-gray-400/30 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 relative">
            <Image 
              src="/logo.png" 
              alt="Solara Event Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-black transition-colors">
            Hizmet Alanlarımız
          </a>
          <a href="#projects" className="text-gray-700 hover:text-black transition-colors">
            Projeler
          </a>
          <a href="#references" className="text-gray-700 hover:text-black transition-colors">
            Referanslar
          </a>
          <a href="#about" className="text-gray-700 hover:text-black transition-colors">
            Hakkımızda
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
            İletişim
          </a>
        </div>
        <Button className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-600 text-white border-0">
          Teklif Al
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <HeroCarousel />
      </section>

      {/* 1. Hizmet Alanlarımız Section */}
      <AnimatedSection className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm mb-6">
              Hizmet Alanlarımız
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Profesyonel Etkinlik Organizasyon Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hayalinizdeki etkinliği gerçeğe dönüştürmek için kapsamlı hizmetlerimizle yanınızdayız.
            </p>
          </div>

          <ServicesAccordion />
        </div>
      </AnimatedSection>

      {/* 2. Projeler Section - Gallery */}
      <AnimatedSection className="py-20 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm mb-6">
              Projeler
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Gerçekleştirdiğimiz Projeler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Her biri özenle tasarlanmış ve kusursuzca hayata geçirilmiş projelerimizden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mevcut fotoğrafları ve yeni eklenecek fotoğrafları burada göstereceğiz */}
            {[
              "/hero-1.JPEG", "/hero-2.JPEG", "/hero-3.JPEG", "/hero-4.JPEG",
              "/biz_kimiz_1.JPG", "/biz_kimiz_2.JPG", "/biz_kimiz_3.JPG", "/biz_kimiz_4.JPG",
              "/yerli-yabanci-dugun.JPG", "/bayi-toplantilari.JPG", "/egitim-motivasyon-kamp.JPG",
              // Daha fazla fotoğraf eklenecek
            ].map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <img
                    src={src}
                    alt={`Proje ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Referanslar Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gray-100 to-gray-200" id="references">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm mb-6">
              Referanslar
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">İş Ortaklarımız ve Müşteri Görüşleri</h2>
            <p className="text-gray-600">Güvenle çalıştığımız oteller ve mutlu müşterilerimizin değerlendirmeleri</p>
          </div>

          {/* Otel Logoları - Placeholder */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">İş Ortağı Oteller</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {/* Otel logoları buraya eklenecek */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-20 flex items-center justify-center text-gray-400">
                    <Award className="w-12 h-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Müşteri Yorumları */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ece D.",
                role: "Düğün Organizasyonu",
                comment: "Erdal İnönü Parkındaki düğünümüzün organizasyonu ile Solara event Selin Hanım ilgilendi, her detayı tam istediğimiz gibiydi 🥹❤️",
                rating: 5
              },
              {
                name: "Hazal E.",
                role: "Düğün Organizasyonu",
                comment: "Düğün hazırlıkları sırasında en çok korktuğum şey stres ve aksaklık yaşamaktı. Selin Hanım sayesinde bu endişelerin hiçbiri gerçeğe dönüşmedi.",
                rating: 5
              },
              {
                name: "Simge Ç.",
                role: "Düğün Organizasyonu",
                comment: "Selin Hanım'a emekleri için çok teşekkür ederiz. Her şeyle tek tek ilgilendi, biz hiçbir şeye kafa yormadan sadece günün tadını çıkardık.",
                rating: 5
              },
              {
                name: "Utku I.",
                role: "Düğün Organizasyonu",
                comment: "Selin hanıma teşekkür ederiz. Otelde gerçekleşen 200 kişilik düğün töreninden oldukça memnun kaldık.",
                rating: 5
              },
              {
                name: "Zeynep B.",
                role: "Düğün Organizasyonu",
                comment: "Selin Hanım'ın ilgisi ve alakasından çok memnun kaldık. Tüm sorularımıza en hızlı en güzel şekilde dönüş yaptı.",
                rating: 5
              },
              {
                name: "Sezin O.",
                role: "Nişan Organizasyonu",
                comment: "Arkadaşımızın nişanı için Solara Event ile çalıştık ve ortaya çıkan sonuçtan çok memnun kaldık.",
                rating: 5
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{item.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Hakkımızda Section */}
      <AnimatedSection className="py-20" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm mb-6">
              Hakkımızda
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Solara Event</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Selin Özyurt tarafından kurulan Solara Event, özel anları benzersiz deneyimlere dönüştürme vizyonuyla hayata geçirildi.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bilkent Üniversitesi Siyaset Bilimi ve Kamu Yönetimi mezuniyetinin ardından, kurumsal iş hayatında 5 yıl boyunca edindiği deneyimi yaratıcılığıyla harmanlayan Selin Özyurt, etkinlik sektöründe kişiye özel tasarımları merkeze alan bir anlayış geliştirdi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Antalya'nın büyüleyici atmosferinden ilham alan Solara Event, düğünlerden kurumsal organizasyonlara kadar her anı, tamamen size özgü detaylarla tasarlayarak unutulmaz bir deneyime dönüştürür.
              </p>

              {/* İstatistikler */}
              <div className="grid grid-cols-3 gap-4">
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
            
            {/* Fotoğraf Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/biz_kimiz_1.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
                  <img src="/biz_kimiz_2.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="/biz_kimiz_3.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
                  <img src="/biz_kimiz_4.JPG" alt="Solara Event" className="rounded-2xl shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. İletişim Section */}
      <AnimatedSection className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              İletişim
            </div>
            <h2 className="text-4xl font-bold mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hayalinizdeki etkinliği birlikte planlayalım. Size özel teklifimizi almak için formu doldurun veya bizi arayın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-300 font-semibold mb-3">Düğün ve Etkinlik Direktörü</h4>
                  <div className="space-y-2">
                    <p className="text-white font-medium">Selin Ertan Özyurt</p>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span>+90 532 373 51 11</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-300 font-semibold mb-3">Kurumsal Etkinlik ve Ticari İlişkiler</h4>
                  <div className="space-y-2">
                    <p className="text-white font-medium">Berkan Özyurt</p>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span>+90 533 168 42 07</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3 text-gray-300 mb-3">
                    <Mail className="w-4 h-4" />
                    <span>info@solaraevent.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>Antalya, Türkiye</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Instagram className="w-4 h-4" />
                    <span>@solaraevent</span>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya Butonları */}
              <div className="mt-8 flex gap-4">
                <a href="https://instagram.com/solaraevent" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:info@solaraevent.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Teklif Formu</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Adınız" className="text-black" />
                  <Input placeholder="Soyadınız" className="text-black" />
                </div>
                <Input placeholder="E-posta adresiniz" type="email" className="text-black" />
                <Input placeholder="Telefon numaranız" type="tel" className="text-black" />
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-black">
                  <option value="">Etkinlik Türü Seçiniz</option>
                  <option value="wedding">Düğün</option>
                  <option value="engagement">Nişan / Söz</option>
                  <option value="corporate">Kurumsal Etkinlik</option>
                  <option value="gala">Gala / Ödül Töreni</option>
                  <option value="launch">Açılış / Lansman</option>
                  <option value="birthday">Doğum Günü</option>
                  <option value="babyshower">Baby Shower</option>
                  <option value="other">Diğer</option>
                </select>
                <Input placeholder="Etkinlik Tarihi" type="date" className="text-black" />
                <Input placeholder="Tahmini Kişi Sayısı" type="number" className="text-black" />
                <Textarea placeholder="Etkinlik detayları ve özel istekleriniz..." rows={4} className="text-black" />
                <Button className="w-full bg-gradient-to-r from-gray-600 to-black hover:from-gray-700 hover:to-gray-900 text-white">
                  Teklif Talebi Gönder
                </Button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 relative">
                  <Image 
                    src="/logo.png" 
                    alt="Solara Event Logo" 
                    fill
                    className="object-contain filter invert"
                  />
                </div>
                <span className="font-bold text-xl">Solara Event</span>
              </div>
              <p className="text-gray-400 text-sm">
                Özel anları benzersiz deneyimlere dönüştürüyoruz.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Hızlı Linkler</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-gray-300 transition-colors">Hizmet Alanlarımız</a></li>
                <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projeler</a></li>
                <li><a href="#references" className="hover:text-gray-300 transition-colors">Referanslar</a></li>
                <li><a href="#about" className="hover:text-gray-300 transition-colors">Hakkımızda</a></li>
                <li><a href="#contact" className="hover:text-gray-300 transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-300">İletişim</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:info@solaraevent.com" className="hover:text-gray-300 transition-colors">info@solaraevent.com</a></li>
                <li><a href="tel:+905323735111" className="hover:text-gray-300 transition-colors">+90 532 373 51 11</a></li>
                <li><a href="https://instagram.com/solaraevent" className="hover:text-gray-300 transition-colors">@solaraevent</a></li>
                <li>Antalya, Türkiye</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Solara Event. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}