import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Open_Sans } from 'next/font/google'
import { FloatingSocialButtons } from '@/components/FloatingSocialButtons'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Antalya Düğün Organizasyonu | Solara Event - Profesyonel Etkinlik Organizasyon Firması',
  description: 'Antalya\'da düğün organizasyonu, kurumsal etkinlik ve özel gün organizasyonları. 15 yıllık deneyim, 500+ başarılı etkinlik, 50+ otel iş ortağı. Ücretsiz danışmanlık.',
  keywords: 'antalya düğün organizasyonu, etkinlik organizasyon firması, kurumsal etkinlik antalya, düğün planlama, nişan organizasyonu, gala organizasyonu, otel etkinlik, solara event',
  authors: [{ name: 'Solara Event & Organization' }],
  creator: 'Solara Event & Organization',
  publisher: 'Solara Event & Organization',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://solaraevent.com',
    title: 'Antalya Düğün Organizasyonu | Solara Event - Profesyonel Etkinlik Organizasyon Firması',
    description: 'Antalya\'da düğün organizasyonu, kurumsal etkinlik ve özel gün organizasyonları. 15 yıllık deneyim, 500+ başarılı etkinlik, 50+ otel iş ortağı.',
    siteName: 'Solara Event & Organization',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Düğün Organizasyonu | Solara Event',
    description: 'Antalya\'da profesyonel düğün ve etkinlik organizasyonu. 15 yıllık deneyim, 500+ başarılı etkinlik.',
  },
  alternates: {
    canonical: 'https://solaraevent.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-open-sans: ${openSans.variable};
}
        `}</style>
      </head>
      <body className={openSans.className}>
        {children}
        <FloatingSocialButtons />
      </body>
    </html>
  )
}
