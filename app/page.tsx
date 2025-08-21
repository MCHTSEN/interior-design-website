import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedCounter } from "@/components/animated-counter"
import { ServicesAccordion } from "@/components/services-accordion"
import { Star, Phone, Mail, MapPin, Instagram, Users, Award, Building, Calendar, CheckCircle, Sparkles, Clock, HeartHandshake } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-50 to-rose-50 backdrop-blur-sm border-b border-pink-200/30 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Solara Event</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">
            Biz Kimiz
          </a>
          <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">
            Hizmetler
          </a>
          <a href="#why-us" className="text-gray-700 hover:text-pink-600 transition-colors">
            Neden Biz
          </a>
          <a href="#process" className="text-gray-700 hover:text-pink-600 transition-colors">
            Nasıl Çalışıyoruz
          </a>
          <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">
            İletişim
          </a>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white border-0">
          Teklif Al
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-gray-700">Kurumsal & Bireysel Organizasyonlar</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  O an'ı
                </span>
                <br />
                <span className="text-gray-900">tam da hayal ettiğiniz</span>
                <br />
                <span className="text-gray-900">gibi yaşayın</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Profesyonel etkinlik organizasyonlarında uzman ekibimizle, hayalinizdeki özel günleri gerçeğe dönüştürüyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
                  Hemen Başlayalım
                </Button>
                <Button size="lg" variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
                  Projelerimiz
                </Button>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Başarılı Etkinlik</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Otel İş Ortağı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:order-2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 rounded-3xl">
                  <img 
                    src="/hero.JPG" 
                    alt="Solara Event Organization" 
                    className="w-4/5 mx-auto h-[540px] lg:h-[630px] object-cover rounded-3xl"
                  />
                  
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
                Biz Kimiz?
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Solara Event & Organization
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Solara Event, hem bireysel hem kurumsal organizasyonlarda profesyonel etkinlikler tasarlayan bir organizasyon firmasıdır.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Amacımız sadece "güzel bir gün" değil, <strong>unutulmaz deneyimler</strong> sunmak. Bu yolda, iş ortaklığı yaptığımız otellerin itibarı ve müşteri memnuniyeti bizim için daima ön plandadır.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-700">Profesyonel Ekip</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
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
      <AnimatedSection className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-pink-600">
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
              <div className="text-4xl font-bold mb-2 text-pink-600">
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
              <div className="text-4xl font-bold mb-2 text-pink-600">
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
              <div className="text-4xl font-bold mb-2 text-pink-600">
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
            <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
              Hizmetlerimiz
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Hizmet Alanlarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bireysel ve kurumsal tüm organizasyon ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <ServicesAccordion />
        </div>
      </AnimatedSection>

      {/* Why Us Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-pink-900 to-rose-900 text-white" id="why-us">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              Neden Biz?
            </div>
            <h2 className="text-4xl font-bold mb-4">Neden Doğru İş Ortağıyız?</h2>
            <p className="text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Solara Event olarak, otel operasyonlarına %100 uyum sağlayan bir organizasyon anlayışıyla çalışıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Profesyonel Ekip</h3>
              <p className="text-pink-200 leading-relaxed">
                Sessizce gelir, zarafetle kurulumunu yapar ve otelden ayrılır. İşimizi biliriz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Otel Uyumu</h3>
              <p className="text-pink-200 leading-relaxed">
                Kurulumdan çıkışa kadar tüm süreci, otelin akışını aksatmadan, hızlı ve düzenli tamamlarız.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Çift Taraflı Memnuniyet</h3>
              <p className="text-pink-200 leading-relaxed">
                Misafir memnuniyeti kadar, iş ortağımız olan otellerin huzuru ve düzeni de önceliğimizdir.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-center text-lg leading-relaxed">
              <span className="text-pink-300 font-semibold">Profesyonelliğinizi Tamamlayan İş Ortağı:</span> Solara Event, otelinizin organizasyon süreçlerindeki profesyonel duruşunu güçlendiren bir çözüm ortağıdır. Misafirleriniz için sadece kusursuz bir etkinlik değil, aynı zamanda otelinizin vizyonuna yakışan bir deneyim sunarız.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 px-6 bg-gray-50" id="process">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
              Süreç Yönetimi
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nasıl Çalışıyoruz?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Etkinlik günlerinde, otelinizin işleyişini aksatmadan, planlı ve saygılı bir biçimde çalışan firmamız ilk temastan teslim sürecine kadar tüm aşamalarda şeffaf ve çözüm odaklıdır.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line for Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-rose-600 hidden lg:block rounded-full"></div>
            
            <div className="space-y-8 lg:space-y-16">
              {[
                {
                  step: "01",
                  title: "İlk Görüşme",
                  description: "Çift/kurumla tüm detayları netleştiririz.",
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
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white shadow-lg">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
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
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
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
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
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
                        <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white">
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
      <AnimatedSection className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
              Referanslar
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Müşteri Yorumları</h2>
            <p className="text-gray-600">Bizimle çalışan otel ve müşterilerimizin görüşleri</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hilton Istanbul Bomonti",
                role: "Etkinlik Müdürü",
                comment: "Solara Event ile çalışmak bir ayrıcalık. Profesyonel yaklaşımları ve detaylara gösterdikleri özen, otelimizin standartlarıyla mükemmel uyum sağlıyor.",
                rating: 5
              },
              {
                name: "Four Seasons Bosphorus",
                role: "Genel Müdür Yardımcısı",
                comment: "Organizasyon süreçlerinde gösterdikleri titizlik ve otel operasyonlarına saygılı yaklaşımları ile güvenilir bir iş ortağı.",
                rating: 5
              },
              {
                name: "Swissotel The Bosphorus",
                role: "Banket Müdürü",
                comment: "Kurulum ve söküm süreçlerindeki hızları ve düzenleri takdire şayan. Misafir memnuniyeti konusundaki hassasiyetleri bizim için çok değerli.",
                rating: 5
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-pink-400 text-pink-400" />
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
            Bizimle yürüttüğünüz her etkinlik,
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              markalaşmış bir hizmet izlenimi yaratır
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hayalinizdeki organizasyonu birlikte gerçekleştirelim
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
              Hemen İletişime Geç
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
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
              <h2 className="text-4xl font-bold mb-6">Detaylı Bilgi ve İşbirliği İçin</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Profesyonel organizasyon hizmetlerimiz hakkında detaylı bilgi almak ve işbirliği fırsatlarını değerlendirmek için bizimle iletişime geçebilirsiniz.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-pink-400 font-semibold mb-3">Etkinlik Direktörü</h3>
                  <div className="space-y-2">
                    <p className="text-white font-medium">Selin Ertan Özyurt</p>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span>+90 532 373 51 11</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-pink-400 font-semibold mb-3">Ticari İlişkiler</h3>
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Teklif Formu</h3>
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
                <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
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
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Solara Event & Organization</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Profesyonel etkinlik organizasyonlarında güvenilir çözüm ortağınız.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/solaraevent" className="hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:info@solaraevent.com" className="hover:text-pink-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-pink-400">Hizmetler</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Düğün Organizasyonu</li>
                <li>Kurumsal Etkinlikler</li>
                <li>Gala & Ödül Törenleri</li>
                <li>Özel Gün Kutlamaları</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-pink-400">İletişim</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@solaraevent.com</li>
                <li>+90 532 373 51 11</li>
                <li>+90 533 168 42 07</li>
                <li>@solaraevent</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Solara Event & Organization. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}