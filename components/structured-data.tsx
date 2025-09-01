export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Solara Event & Organization",
    "description": "Antalya'da düğün organizasyonu, kurumsal etkinlik ve özel gün organizasyonları konusunda uzman profesyonel organizasyon firması",
    "url": "https://solaraevent.com",
    "logo": "https://solaraevent.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-532-373-51-11",
        "contactType": "Etkinlik Direktörü",
        "areaServed": "TR",
        "availableLanguage": "Turkish"
      },
      {
        "@type": "ContactPoint", 
        "telephone": "+90-533-168-42-07",
        "contactType": "Ticari İlişkiler",
        "areaServed": "TR",
        "availableLanguage": "Turkish"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antalya",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://instagram.com/solaraevent"
    ],
    "foundingDate": "2009",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "Place",
      "name": "Antalya"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solara Event & Organization",
    "description": "Antalya'da düğün organizasyonu, kurumsal etkinlik ve özel gün organizasyonları",
    "url": "https://solaraevent.com",
    "telephone": "+90-532-373-51-11",
    "email": "info@solaraevent.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antalya",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.8969",
      "longitude": "30.7133"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Düğün ve Etkinlik Organizasyon Hizmetleri",
    "description": "Profesyonel düğün organizasyonu, kurumsal etkinlik planlama ve özel gün organizasyonları",
    "provider": {
      "@type": "Organization",
      "name": "Solara Event & Organization"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Antalya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Etkinlik Organizasyon Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Düğün Organizasyonu",
            "description": "Profesyonel düğün planlama ve organizasyon hizmetleri"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Kurumsal Etkinlik Organizasyonu",
            "description": "Şirket etkinlikleri, lansmanlar ve kurumsal organizasyonlar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Nişan ve Söz Töreni Organizasyonu",
            "description": "Nişan ve söz töreni planlama ve organizasyon hizmetleri"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}