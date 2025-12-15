import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'TuColpagos Franquicia - Potencia tu Negocio',
  description: 'Únete a la red de franquicias líder en recaudos, pagos y servicios transaccionales en Colombia. Oportunidad de negocio rentable con respaldo y acompañamiento constante.',
  keywords: 'franquicia, TuColpagos, recaudos, pagos, servicios transaccionales, Colombia, negocio rentable, franquicia digital',
  authors: [{ name: 'TuColpagos Colombia SAS' }],
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

export const viewport = {
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

