import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedSection } from "@/components/animated-section"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesAccordion } from "@/components/services-accordion"
import StructuredData from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Award, Calendar, CheckCircle, Clock, HeartHandshake, Instagram, Mail, MapPin, Phone, Sparkles, Star, Users } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99] backdrop-blur-sm border-b border-[#BCA88D]/30 transition-all duration-300">
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
          <a href="/hakkinda" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            Hakkında
          </a>
          <a href="#about" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            Biz Kimiz
          </a>
          <a href="#services" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            Hizmetler
          </a>
          <a href="#why-us" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            Neden Biz
          </a>
          <a href="#process" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            Nasıl Çalışıyoruz
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#BCA88D] transition-colors">
            İletişim
          </a>
        </div>
        <Button className="bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-[#8B7355] hover:to-[#6B5B47] text-white border-0">
          Teklif Al
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2EDD1] via-[#F9CB99] to-white"></div>
        <div className="relative z-10 h-full">
          <HeroCarousel />
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-[#BCA88D] to-[#8B7355] text-white px-4 py-2 rounded-full text-sm mb-6">
                Biz Kimiz?
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Antalya'nın En Güvenilir Etkinlik Organizasyon Firması
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Antalya'da düğün, kurumsal etkinlik ve özel gün organizasyonlarınızda; hayallerinizi gerçeğe dönüştürüp unutulmaz anlara imza atıyoruz.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#BCA88D]" />
                  <span className="text-sm text-gray-700">Profesyonel Ekip</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#BCA88D]" />
                  <span className="text-sm text-gray-700">%100 Memnuniyet</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/biz_kimiz_1.JPG" alt="Solara Event organizasyon detayları" className="rounded-2xl shadow-xl" />
                  <img src="/biz_kimiz_2.JPG" alt="Profesyonel etkinlik kurulumu" className="rounded-2xl shadow-xl" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="/biz_kimiz_3.JPG" alt="Lüks etkinlik dekorasyonu" className="rounded-2xl shadow-xl" />
                  <img src="/biz_kimiz_4.JPG" alt="Detay çalışması ve koordinasyon" className="rounded-2xl shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-[#BCA88D]">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-gray-700 font-medium">
                Başarılı Etkinlik
              </div>
              <div className="text-gray-500 text-sm mt-1">
                Kusursuz organizasyon
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-[#BCA88D]">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-gray-700 font-medium">
                Otel İş Ortağı
              </div>
              <div className="text-gray-500 text-sm mt-1">
                Güvenilir işbirlikleri
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-[#BCA88D]">
                <AnimatedCounter end={15} />
              </div>
              <div className="text-gray-700 font-medium">
                Yıllık Deneyim
              </div>
              <div className="text-gray-500 text-sm mt-1">
                Sektör tecrübesi
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-[#BCA88D]">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-gray-700 font-medium">
                Müşteri Memnuniyeti
              </div>
              <div className="text-gray-500 text-sm mt-1">
                Mutlu müşteriler
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#BCA88D] to-[#8B7355] text-white px-4 py-2 rounded-full text-sm mb-6">
              Hizmetlerimiz
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Antalya Etkinlik Organizasyon Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <a href="#about" className="text-[#BCA88D] hover:text-[#8B7355] underline">15 yıllık deneyimimizle</a> bireysel ve kurumsal tüm organizasyon ihtiyaçlarınız için profesyonel çözümler sunuyoruz. <a href="#contact" className="text-[#BCA88D] hover:text-[#8B7355] underline">Ücretsiz danışmanlık</a> için bizimle iletişime geçin.
            </p>
          </div>

          <ServicesAccordion />
        </div>
      </AnimatedSection>

      {/* Why Us Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-[#8B7355] to-[#6B5B47] text-white" id="why-us">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              Neden Biz?
            </div>
            <h2 className="text-4xl font-bold mb-4">Neden Antalya'nın En Güvenilir Etkinlik Organizasyon Firması?</h2>
            <p className="text-[#F9CB99] max-w-3xl mx-auto leading-relaxed">
              Solara Event olarak, <a href="#process" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">otel operasyonlarına %100 uyum sağlayan</a> bir organizasyon anlayışıyla çalışıyoruz. <a href="#about" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">500+ başarılı etkinlik</a> deneyimimizle yanınızdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Profesyonel Düğün ve Etkinlik Ekibi</h3>
              <p className="text-[#F2EDD1] leading-relaxed">
                Sessizce gelir, zarafetle kurulumunu yapar ve otelden ayrılır. <a href="#process" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">Çalışma sürecimizi</a> öğrenin.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Antalya Otellerinde Kusursuz Uyum</h3>
              <p className="text-[#F2EDD1] leading-relaxed">
                Kurulumdan çıkışa kadar tüm süreci, otelin akışını aksatmadan, hızlı ve düzenli tamamlarız. <a href="#about" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">50+ otel iş ortağımızla</a> çalışıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Çift Taraflı Memnuniyet</h3>
              <p className="text-[#F2EDD1] leading-relaxed">
                Misafir memnuniyeti kadar, iş ortağımız olan otellerin huzuru ve düzeni de önceliğimizdir.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-center text-lg leading-relaxed">
              <span className="text-[#F2EDD1] font-semibold">Profesyonelliğinizi Tamamlayan İş Ortağı:</span> Solara Event, otelinizin organizasyon süreçlerindeki profesyonel duruşunu güçlendiren bir çözüm ortağıdır. Misafirleriniz için sadece kusursuz bir etkinlik değil, aynı zamanda otelinizin vizyonuna yakışan bir deneyim sunarız.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 px-6 bg-gray-50" id="process">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-[#BCA88D] to-[#8B7355] text-white px-4 py-2 rounded-full text-sm mb-6">
              Süreç Yönetimi
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Antalya Etkinlik Organizasyon Sürecimiz</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Etkinlik günlerinde, otelinizin işleyişini aksatmadan, planlı ve saygılı bir biçimde çalışan firmamız ilk temastan teslim sürecine kadar tüm aşamalarda şeffaf ve çözüm odaklıdır. <a href="#why-us" className="text-[#BCA88D] hover:text-[#8B7355] underline">Neden bizi tercih etmelisiniz?</a> <a href="#contact" className="text-[#BCA88D] hover:text-[#8B7355] underline">Detaylı bilgi alın.</a>
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line for Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#BCA88D] to-[#8B7355] hidden lg:block rounded-full"></div>
            
            <div className="space-y-8 lg:space-y-16">
              {[
                {
                  step: "01",
                  title: "İlk Görüşme ve Danışmanlık",
                  description: "Çift/kurumla tüm detayları netleştiririz. Ücretsiz danışmanlık hizmeti.",
                  icon: <Phone className="w-6 h-6" />,
                  align: "right"
                },
                {
                  step: "02",
                  title: "Alan Keşfi",
                  description: "Otelin yapısına göre planlama yaparız.",
                  icon: <MapPin className="w-6 h-6" />,
                  align: "left"
                },
                {
                  step: "03",
                  title: "Kurulum",
                  description: "Belirlenen saatte hızlı ve sessiz kurulum yaparız.",
                  icon: <Clock className="w-6 h-6" />,
                  align: "right"
                },
                {
                  step: "04",
                  title: "Etkinlik Süreci",
                  description: "Sürekli gözlemdeyiz, müdahale etmeyiz ama destek veririz.",
                  icon: <Calendar className="w-6 h-6" />,
                  align: "left"
                },
                {
                  step: "05",
                  title: "Toparlama",
                  description: "Gecikmeden, temiz ve düzenli şekilde çıkış yaparız.",
                  icon: <CheckCircle className="w-6 h-6" />,
                  align: "right"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center text-white shadow-lg">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-[#F2EDD1] rounded-full flex items-center justify-center text-[#BCA88D] font-bold text-sm">
                            {item.step}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center`}>
                    {/* Left Content */}
                    <div className={`${item.align === 'left' ? 'lg:order-2' : ''}`}>
                      {item.align === 'right' ? (
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-[#F2EDD1] rounded-full flex items-center justify-center text-[#BCA88D] font-bold">
                              {item.step}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    {/* Center Icon */}
                    <div className={`${item.align === 'left' ? 'lg:order-1' : ''}`}>
                      {item.align === 'left' ? (
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-right">
                          <div className="flex items-center gap-4 mb-3 justify-end">
                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            <div className="w-12 h-12 bg-[#F2EDD1] rounded-full flex items-center justify-center text-[#BCA88D] font-bold">
                              {item.step}
                            </div>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    {/* Timeline Icon - Positioned Absolutely */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                      <div className="w-16 h-16 bg-white rounded-full p-1 shadow-xl">
                        <div className="w-full h-full bg-gradient-to-br from-[#BCA88D] to-[#8B7355] rounded-full flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#F2EDD1] to-[#F9CB99] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#BCA88D] to-[#8B7355] text-white px-4 py-2 rounded-full text-sm mb-6">
              Referanslar
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Antalya Otel ve Müşteri Referansları</h2>
            <p className="text-gray-600">Bizimle çalışan <a href="#why-us" className="text-[#BCA88D] hover:text-[#8B7355] underline">Antalya'nın prestijli otelleri</a> ve mutlu müşterilerimizin görüşleri</p>
          </div>

          <div className="flex gap-6 animate-scroll-testimonials">
            {[
              {
                name: "Ece D.",
                role: "Düğün Organizasyonu",
                comment: "Erdal İnönü Parkındaki düğünümüzün organizasyonu ile Solara event Selin Hanım ilgilendi, her detayı tam istediğimiz gibiydi 🥹❤️ çok ilgili ve zevkli birisi bence 😍",
                rating: 5
              },
              {
                name: "Hazal E.",
                role: "Düğün Organizasyonu",
                comment: "Düğün hazırlıkları sırasında en çok korktuğum şey stres ve aksaklık yaşamaktı. Selin Hanım sayesinde bu endişelerin hiçbiri gerçeğe dönüşmedi. Hayalini kurduğumuz tüm detayları gerçeğe dönüştürüp beklentimizin çok üzerine çıkarttı.",
                rating: 5
              },
              {
                name: "Simge Ç.",
                role: "Düğün Organizasyonu",
                comment: "Selin Hanım'a emekleri için çok teşekkür ederiz. Her şeyle tek tek ilgilendi, biz hiçbir şeye kafa yormadan sadece günün tadını çıkardık. Misafirlerimiz de çok beğendi.",
                rating: 5
              },
              {
                name: "Utku I.",
                role: "Düğün Organizasyonu",
                comment: "Selin hanıma teşekkür ederiz. Otelde gerçekleşen 200 kişilik düğün töreninden oldukça memnun kaldık. Herkese tavsiye ederim.",
                rating: 5
              },
              {
                name: "Zeynep B.",
                role: "Düğün Organizasyonu",
                comment: "Selin Hanım'ın ilgisi ve alakasından çok memnun kaldık. Tüm sorularımıza en hızlı en güzel şekilde dönüş yaptı. Güvenle organizasyonlarınızı teslim edebilirsiniz.",
                rating: 5
              },
              {
                name: "Sezin O.",
                role: "Nişan Organizasyonu",
                comment: "Arkadaşımızın nişanı için Solara Event ile çalıştık ve ortaya çıkan sonuçtan çok memnun kaldık. Mekân düzenlemesi, çiçek tasarımları ve masa detayları tam hayal ettiğimiz gibi oldu.",
                rating: 5
              },
              {
                name: "Hatice Ö.",
                role: "Özel Etkinlik",
                comment: "Tüm hersey için çok teşekkür ederim size ve ekibinize 🙏🏻 hersey o kadar güzeldi ki tam hayal ettiğimiz gibi 🤍 sizlere ne gönderdiysek birebir aynısı olmuştu.",
                rating: 5
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex-shrink-0 w-80">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F9CB99] text-[#F9CB99]" />
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

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Antalya'da Profesyonel Etkinlik Organizasyonu
            <br />
            <span className="bg-gradient-to-r from-[#BCA88D] to-[#8B7355] bg-clip-text text-transparent">
              Hayalinizdeki düğün ve etkinliği gerçekleştirin
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            <a href="#services" className="text-[#BCA88D] hover:text-[#8B7355] underline">Düğün organizasyonu</a>, <a href="#services" className="text-[#BCA88D] hover:text-[#8B7355] underline">kurumsal etkinlik</a> ve özel gün organizasyonlarında hayalinizdeki etkinliği birlikte gerçekleştirelim
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-pink-600 hover:to-rose-700 text-white">
              Hemen İletişime Geç
            </Button>
            <Button size="lg" variant="outline" className="border-[#BCA88D] text-[#BCA88D] hover:bg-[#F2EDD1]">
              Portfolyo
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
                İletişim
              </div>
              <h2 className="text-4xl font-bold mb-6">Antalya Etkinlik Organizasyonu İletişim</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <a href="#services" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">Düğün organizasyonu</a>, <a href="#services" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">kurumsal etkinlik</a> ve <a href="#about" className="text-[#F2EDD1] hover:text-[#F2EDD1] underline">profesyonel organizasyon hizmetlerimiz</a> hakkında detaylı bilgi almak ve işbirliği fırsatlarını değerlendirmek için bizimle iletişime geçebilirsiniz.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[#F9CB99] font-semibold mb-3">Düğün ve Etkinlik Direktörü</h3>
                  <div className="space-y-2">
                    <p className="text-white font-medium">Selin Ertan Özyurt</p>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span>+90 532 373 51 11</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#F9CB99] font-semibold mb-3">Kurumsal Etkinlik ve Ticari İlişkiler</h3>
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
                  <div className="flex items-center gap-3 text-gray-300">
                    <Instagram className="w-4 h-4" />
                    <span>@solaraevent</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Ücretsiz Etkinlik Organizasyon Teklifi</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Adınız" className="text-black" />
                  <Input placeholder="Soyadınız" className="text-black" />
                </div>
                <Input placeholder="Firma Adı (Kurumsal)" className="text-black" />
                <Input placeholder="E-posta adresiniz" type="email" className="text-black" />
                <Input placeholder="Telefon numaranız" type="tel" className="text-black" />
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-black">
                  <option value="">Etkinlik Türü Seçiniz</option>
                  <option value="wedding">Düğün</option>
                  <option value="engagement">Nişan / Söz</option>
                  <option value="corporate">Kurumsal Etkinlik</option>
                  <option value="gala">Gala / Ödül Töreni</option>
                  <option value="launch">Açılış / Lansman</option>
                  <option value="other">Diğer</option>
                </select>
                <Input placeholder="Tahmini Kişi Sayısı" type="number" className="text-black" />
                <Input placeholder="Etkinlik Tarihi" type="date" className="text-black" />
                <Textarea placeholder="Etkinlik detayları ve özel istekleriniz..." rows={4} className="text-black" />
                <Button className="w-full bg-gradient-to-r from-[#BCA88D] to-[#8B7355] hover:from-pink-600 hover:to-rose-700 text-white">
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 relative">
                  <Image 
                    src="/logo.png" 
                    alt="Solara Event Logo" 
                    fill
                    className="object-contain filter invert"
                  />
                </div>
                <span className="font-bold text-xl">Solara Event & Organization</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Profesyonel etkinlik organizasyonlarında güvenilir çözüm ortağınız.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/solaraevent" className="hover:text-[#F9CB99] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:info@solaraevent.com" className="hover:text-[#F9CB99] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#F9CB99]">Hizmetlerimiz</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-[#F9CB99] transition-colors">Antalya Düğün Organizasyonu</a></li>
                <li><a href="#services" className="hover:text-[#F9CB99] transition-colors">Kurumsal Etkinlik Organizasyonu</a></li>
                <li><a href="#services" className="hover:text-[#F9CB99] transition-colors">Gala & Ödül Töreni Organizasyonu</a></li>
                <li><a href="#services" className="hover:text-[#F9CB99] transition-colors">Nişan ve Söz Töreni</a></li>
                <li><a href="#services" className="hover:text-[#F9CB99] transition-colors">Özel Gün Kutlamaları</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#F9CB99]">Kurumsal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-[#F9CB99] transition-colors">Hakkımızda</a></li>
                <li><a href="#why-us" className="hover:text-[#F9CB99] transition-colors">Neden Biz?</a></li>
                <li><a href="#process" className="hover:text-[#F9CB99] transition-colors">Çalışma Sürecimiz</a></li>
                <li><a href="#contact" className="hover:text-[#F9CB99] transition-colors">İletişim</a></li>
                <li><a href="#contact" className="hover:text-[#F9CB99] transition-colors">Ücretsiz Teklif</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#F9CB99]">İletişim</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:info@solaraevent.com" className="hover:text-[#F9CB99] transition-colors">info@solaraevent.com</a></li>
                <li><a href="tel:+905323735111" className="hover:text-[#F9CB99] transition-colors">+90 532 373 51 11</a></li>
                <li><a href="tel:+905331684207" className="hover:text-[#F9CB99] transition-colors">+90 533 168 42 07</a></li>
                <li><a href="https://instagram.com/solaraevent" className="hover:text-[#F9CB99] transition-colors">@solaraevent</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Solara Event & Organization. Tüm hakları saklıdır. | <a href="#services" className="hover:text-[#F9CB99] transition-colors">Antalya Düğün Organizasyonu</a> | <a href="#services" className="hover:text-[#F9CB99] transition-colors">Kurumsal Etkinlik Organizasyonu</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}