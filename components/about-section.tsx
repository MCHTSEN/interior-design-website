"use client"

export function AboutSection() {
  const description = "Selin Özyurt tarafından 2023 senesinde kurulan Solara Event, özel anları benzersiz deneyimlere dönüştürme vizyonuyla hayata geçirildi.\n\nBilkent Üniversitesi Siyaset Bilimi ve Kamu Yönetimi mezuniyetinin ardından, kurumsal iş hayatında 5 yıl boyunca edindiği deneyimi yaratıcılığıyla harmanlayan Selin Özyurt, etkinlik sektöründe kişiye özel tasarımları merkeze alan bir anlayış geliştirdi.\n\nAntalya'nın büyüleyici atmosferinden ilham alan Solara Event, düğünlerden kurumsal organizasyonlara kadar her anı, tamamen size özgü detaylarla tasarlayarak unutulmaz bir deneyime dönüştürür."

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Mobile: Fotoğraf üstte */}
      <div className="md:hidden flex justify-center order-1">
        <div className="grid grid-cols-2 gap-4 max-w-sm">
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

      {/* Metin kısmı */}
      <div className="order-2 md:order-1">
        <div className="prose prose-gray max-w-none">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      
      {/* Desktop: Fotoğraf sağda */}
      <div className="hidden md:flex justify-center order-2">
        <div className="grid grid-cols-2 gap-4 max-w-sm">
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
  )
}