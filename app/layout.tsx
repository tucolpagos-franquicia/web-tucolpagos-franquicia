import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TuColpagos Franquicia - Potencia tu Emprendimiento',
  description: 'Únete a la red de franquicias de TuColpagos. Oportunidad de negocio rentable en recaudos, pagos y servicios transaccionales. Inversión accesible con respaldo y acompañamiento.',
  keywords: 'franquicia, TuColpagos, recaudos, pagos, servicios transaccionales, emprendimiento, Colombia',
  authors: [{ name: 'TuColpagos Colombia SAS' }],
  openGraph: {
    title: 'TuColpagos Franquicia - Potencia tu Emprendimiento',
    description: 'Únete a la red de franquicias de TuColpagos. Oportunidad de negocio rentable.',
    type: 'website',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TuColpagos Colombia SAS',
              url: 'https://www.tucolpagosfranquicia.com',
              logo: 'https://www.tucolpagosfranquicia.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+57-3246830038',
                contactType: 'Customer Service',
                areaServed: 'CO',
                availableLanguage: 'Spanish',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Carrera 4 #38–61 Lc2',
                addressLocality: 'Montería',
                addressRegion: 'Córdoba',
                addressCountry: 'CO',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased" style={{ fontFamily: 'var(--font-poppins)' }}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

