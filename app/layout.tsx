import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Solara Event & Organization | Profesyonel Etkinlik ve Organizasyon Hizmetleri',
  description: 'Solara Event - Kurumsal ve bireysel etkinlikleriniz için profesyonel organizasyon hizmetleri. Düğün, nişan, kurumsal etkinlikler ve daha fazlası.',
  keywords: 'organizasyon, etkinlik, düğün, nişan, kurumsal etkinlik, gala, lansman, solara event',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
