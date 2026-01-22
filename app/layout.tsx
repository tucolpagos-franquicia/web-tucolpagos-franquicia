import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

// Updated: Metadata with "Potencia tu Negocio"
export const metadata: Metadata = {
  title: 'TuColpagos Franquicia - Suscripción 3 Años | Potencia tu Negocio',
  description: 'Únete a TuColpagos con una suscripción de 3 años. Más de 300 oficinas, más de 25 bancos y plataforma ágil y segura. Planes desde $3M. Sin verificación en centrales de riesgo.',
  keywords: 'franquicia, TuColpagos, recaudos, pagos, servicios transaccionales, Colombia, negocio rentable, franquicia digital',
  authors: [{ name: 'TuColpagos Colombia SAS' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'TuColpagos Franquicia - Potencia tu Negocio',
    description: 'Únete a la red de franquicias líder en recaudos, pagos y servicios transaccionales en Colombia.',
    url: 'https://www.tucolpagosfranquicia.com',
    siteName: 'TuColpagos Franquicia',
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-body antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}

