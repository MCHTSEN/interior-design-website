import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedCounter } from "@/components/animated-counter"
import { ServicesAccordion } from "@/components/services-accordion"
import { Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-pink-500/20 backdrop-blur-sm border-b border-pink-200/30 transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <span className="font-semibold text-lg">Refit</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-black">
            Hakkımızda
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Hizmetler
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Projeler
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            İletişim
          </a>
        </div>
        <Button variant="outline" size="sm">
          Teklif Al
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="bg-pink-100 flex items-center justify-center p-12">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              O anı,
              <br />
              tam da hayal ettiğiniz
              <br />
              gibi yaşayın
            </h1>
            <p className="text-gray-600 mb-8">
              İç mekan tasarımında uzman ekibimizle hayalinizdeki yaşam alanını gerçeğe dönüştürün.
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/elegant-floral-dining.png" alt="Elegant dining room" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm mb-6">Biz Kimiz</div>
            <h2 className="text-3xl font-bold mb-4">
              Küçük
              <br />
              dokunuşlarla
              <br />
              büyük
              <br />
              mutluluklar
            </h2>
            <p className="text-gray-600 max-w-md">
              Hoş geldiniz! Bizler, nişan ve evlilik organizasyonları konusunda uzmanlaşmış, detaylara önem veren
              profesyonelleriz. Her çiftin hikâyesine özel dokunuşlar katarak, özel günlerinizi hayallerinizdeki gibi
              gerçeğe dönüştürmek için buradayız.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden mb-12 w-full">
          <div className="flex animate-scroll gap-8">
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/white-flower-wedding.png" alt="Wedding setup" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/modern-living-room.png" alt="Living room" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/luxury-soft-bedroom.png" alt="Bedroom" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/hands-arranging-flowers.png" alt="Flower arrangement" className="w-full h-full object-cover" />
            </div>
            {/* Duplicate images for seamless loop */}
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/white-flower-wedding.png" alt="Wedding setup" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/modern-living-room.png" alt="Living room" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/luxury-soft-bedroom.png" alt="Bedroom" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-[460px] h-96 overflow-hidden rounded-lg">
              <img src="/hands-arranging-flowers.png" alt="Flower arrangement" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="px-6 max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={15} />
              </div>
              <div className="text-gray-600 text-sm">
                Yılların Deneyimi
                <br />
                <span className="text-xs">Improving homes with expert craftsmanship for years</span>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={250} />
              </div>
              <div className="text-gray-600 text-sm">
                Tamamlanan
                <br />
                Organizasyonlar
                <br />
                <span className="text-xs">250+ kusursuz nişan ve düğün planlandı ve uygulandı</span>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={30} />
              </div>
              <div className="text-gray-600 text-sm">
                Profesyonel Ekip
                <br />
                <span className="text-xs">30+ deneyimli organizasyon koordinatörüyle hizmetinizdeyiz</span>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-gray-600 text-sm">
                Müşteri Memnuniyeti
                <br />
                <span className="text-xs">Tüm çiftlerimizden %100 memnuniyet aldık</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section -> Changed to Neler Yapıyoruz */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neler Yapıyoruz</h2>
            <p className="text-gray-600">Sunduğumuz hizmetler ve uzmanlık alanlarımız</p>
          </div>

          <ServicesAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get inspired by our work</h2>
          <p className="text-gray-600 mb-8">Projelerimizden ilham alın ve hayalinizdeki mekanı gerçeğe dönüştürün.</p>
          <Button size="lg">Projelerimizi İnceleyin</Button>
        </div>
      </section>

      {/* Modern Design Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/minimalist-wooden-kitchen.png" alt="Modern kitchen" className="w-full rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern tasarım anlayışı</h2>
              <p className="text-gray-600 mb-6">
                Çağdaş tasarım anlayışımızla fonksiyonellik ve estetiği bir araya getiriyoruz. Her detayda kaliteyi ve
                zarafeti hissedebileceğiniz mekanlar yaratıyoruz.
              </p>
              <div className="flex gap-4 mb-6">
                <Button variant="outline" size="sm">
                  Daha Fazla
                </Button>
                <Button variant="outline" size="sm">
                  Galeri
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Ahmet Yılmaz</div>
                  <div className="text-gray-600 text-xs">Baş Tasarımcı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Design Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Exterior garden peyzajı</h2>
              <p className="text-gray-300 mb-6">
                Dış mekan tasarımlarımızla doğayla uyum içinde yaşam alanları yaratıyoruz. Bahçe peyzajından balkon
                düzenlemelerine kadar her alanda uzmanız.
              </p>
              <div className="flex gap-4 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                >
                  Daha Fazla
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                >
                  Galeri
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Elif Kaya</div>
                  <div className="text-gray-400 text-xs">Peyzaj Mimarı</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/garden-landscape-design.png" alt="Garden design" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Renovation Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/luxury-bathroom-renovation.png" alt="Bathroom renovation" className="w-full rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Bathroom renovation</h2>
              <p className="text-gray-600 mb-6">
                Banyo yenileme projelerimizde modern teknoloji ve şık tasarımı bir araya getiriyoruz. Konfor ve estetiği
                buluşturan banyo mekanları yaratıyoruz.
              </p>
              <div className="flex gap-4 mb-6">
                <Button variant="outline" size="sm">
                  Daha Fazla
                </Button>
                <Button variant="outline" size="sm">
                  Galeri
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Mehmet Demir</div>
                  <div className="text-gray-600 text-xs">İç Mimar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl font-bold mb-4">Hear from our clients</h2>
          </div>

          {/* First row - scrolling right */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll-right gap-6">
              {[
                { name: "Ayşe Yılmaz", location: "İstanbul", review: "Harika bir deneyimdi. Ekip çok profesyonel ve sonuç beklentilerimi aştı. Evimiz artık çok daha güzel görünüyor.", bg: "bg-white" },
                { name: "Mehmet Demir", location: "Ankara", review: "Organizasyon mükemmeldi. Her detay düşünülmüş ve hayalimizden de güzel oldu. Teşekkürler!", bg: "bg-gray-100" },
                { name: "Elif Kaya", location: "İzmir", review: "Profesyonel yaklaşım ve kaliteli hizmet. Düğünümüz tam istediğimiz gibiydi.", bg: "bg-white" },
                { name: "Ali Özkan", location: "Bursa", review: "Detaylara gösterdikleri özen ve yaratıcılıkları gerçekten etkileyici. Herkese tavsiye ederim.", bg: "bg-gray-100" },
                { name: "Zeynep Arslan", location: "Antalya", review: "Nişan törenimiz harika geçti. Ekip çok ilgili ve deneyimliydi.", bg: "bg-white" },
                { name: "Burak Yıldız", location: "Adana", review: "Mükemmel organizasyon ve hizmet kalitesi. Çok memnun kaldık.", bg: "bg-gray-100" },
              ].concat([
                { name: "Ayşe Yılmaz", location: "İstanbul", review: "Harika bir deneyimdi. Ekip çok profesyonel ve sonuç beklentilerimi aştı. Evimiz artık çok daha güzel görünüyor.", bg: "bg-white" },
                { name: "Mehmet Demir", location: "Ankara", review: "Organizasyon mükemmeldi. Her detay düşünülmüş ve hayalimizden de güzel oldu. Teşekkürler!", bg: "bg-gray-100" },
                { name: "Elif Kaya", location: "İzmir", review: "Profesyonel yaklaşım ve kaliteli hizmet. Düğünümüz tam istediğimiz gibiydi.", bg: "bg-white" },
                { name: "Ali Özkan", location: "Bursa", review: "Detaylara gösterdikleri özen ve yaratıcılıkları gerçekten etkileyici. Herkese tavsiye ederim.", bg: "bg-gray-100" },
                { name: "Zeynep Arslan", location: "Antalya", review: "Nişan törenimiz harika geçti. Ekip çok ilgili ve deneyimliydi.", bg: "bg-white" },
                { name: "Burak Yıldız", location: "Adana", review: "Mükemmel organizasyon ve hizmet kalitesi. Çok memnun kaldık.", bg: "bg-gray-100" },
              ]).map((client, i) => (
                <Card key={i} className={`flex-shrink-0 w-80 h-48 p-6 ${client.bg} border-0 shadow-sm`}>
                  <CardContent className="p-0 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        "{client.review}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <div>
                        <div className="font-semibold text-sm">{client.name}</div>
                        <div className="text-gray-500 text-xs">{client.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Second row - scrolling left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-6">
              {[
                { name: "Fatma Şahin", location: "Konya", review: "Evlilik teklifim için hazırladıkları sürpriz organizasyon muhteşemdi. Her şey mükemmeldi!", bg: "bg-gray-100" },
                { name: "Emre Çelik", location: "Trabzon", review: "Düğün organizasyonumuz için aldığımız hizmet gerçekten kaliteliydi. Teşekkürler!", bg: "bg-white" },
                { name: "Selin Aydın", location: "Eskişehir", review: "Nişan törenimiz hayal ettiğimizden çok daha güzel oldu. Herkese tavsiye ederim.", bg: "bg-gray-100" },
                { name: "Oğuz Kara", location: "Gaziantep", review: "Profesyonel ekip ve mükemmel organizasyon. Çok memnun kaldık.", bg: "bg-white" },
                { name: "Deniz Öztürk", location: "Samsun", review: "Her detayı düşünülmüş, kaliteli bir hizmet aldık. Teşekkürler!", bg: "bg-gray-100" },
                { name: "Ceren Yılmaz", location: "Kayseri", review: "Organizasyon ekibi çok deneyimli ve yaratıcı. Sonuçtan çok memnunuz.", bg: "bg-white" },
              ].concat([
                { name: "Fatma Şahin", location: "Konya", review: "Evlilik teklifim için hazırladıkları sürpriz organizasyon muhteşemdi. Her şey mükemmeldi!", bg: "bg-gray-100" },
                { name: "Emre Çelik", location: "Trabzon", review: "Düğün organizasyonumuz için aldığımız hizmet gerçekten kaliteliydi. Teşekkürler!", bg: "bg-white" },
                { name: "Selin Aydın", location: "Eskişehir", review: "Nişan törenimiz hayal ettiğimizden çok daha güzel oldu. Herkese tavsiye ederim.", bg: "bg-gray-100" },
                { name: "Oğuz Kara", location: "Gaziantep", review: "Profesyonel ekip ve mükemmel organizasyon. Çok memnun kaldık.", bg: "bg-white" },
                { name: "Deniz Öztürk", location: "Samsun", review: "Her detayı düşünülmüş, kaliteli bir hizmet aldık. Teşekkürler!", bg: "bg-gray-100" },
                { name: "Ceren Yılmaz", location: "Kayseri", review: "Organizasyon ekibi çok deneyimli ve yaratıcı. Sonuçtan çok memnunuz.", bg: "bg-white" },
              ]).map((client, i) => (
                <Card key={i} className={`flex-shrink-0 w-80 h-48 p-6 ${client.bg} border-0 shadow-sm`}>
                  <CardContent className="p-0 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        "{client.review}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <div>
                        <div className="font-semibold text-sm">{client.name}</div>
                        <div className="text-gray-500 text-xs">{client.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sık sorulan sorular</h2>
            <p className="text-gray-600">Merak ettiğiniz konular hakkında bilgi alın</p>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Proje süresi ne kadar sürer?</h3>
                <p className="text-gray-600 text-sm">
                  Proje büyüklüğüne göre değişmekle birlikte ortalama 2-6 hafta arası sürmektedir.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Ücretsiz keşif yapıyor musunuz?</h3>
                <p className="text-gray-600 text-sm">Evet, ilk görüşme ve keşif tamamen ücretsizdir.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Hangi bölgelerde hizmet veriyorsunuz?</h3>
                <p className="text-gray-600 text-sm">İstanbul ve çevre illerde hizmet vermekteyiz.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-gray-300 mb-8">
                Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü birlikte bulalım.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+90 212 555 0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@refit.com.tr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="w-6 h-6" />
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Adınız" className="text-black" />
                  <Input placeholder="Soyadınız" className="text-black" />
                </div>
                <Input placeholder="E-posta adresiniz" className="text-black" />
                <Input placeholder="Telefon numaranız" className="text-black" />
                <Textarea placeholder="Mesajınız" rows={4} className="text-black" />
                <Button className="w-full bg-black text-white hover:bg-gray-800">Mesaj Gönder</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <span className="font-semibold text-lg">Refit</span>
              </div>
              <p className="text-gray-400 text-sm">
                İç mekan tasarımında uzman ekibimizle hayalinizdeki yaşam alanını gerçeğe dönüştürün.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hizmetler</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>İç Mekan Tasarımı</li>
                <li>Bahçe Peyzajı</li>
                <li>Banyo Yenileme</li>
                <li>Mutfak Tasarımı</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Hakkımızda</li>
                <li>Projeler</li>
                <li>Ekibimiz</li>
                <li>İletişim</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+90 212 555 0123</li>
                <li>info@refit.com.tr</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Refit. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
