'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'
import Image from 'next/image'
import {
  formatPuntoVentaCity,
  getPuntoVentaSrc,
  type PuntoVentaImage,
} from '@/data/puntos-venta'

const testimonials: {
  name: string
  months: number
  quote: string
  image: PuntoVentaImage
}[] = [
  {
    name: 'Luisa',
    months: 12,
    quote:
      'En 6 meses ya recuperé mi inversión. La plataforma es muy fácil de usar y el soporte siempre está disponible.',
    image: 'montería-córdoba.webp',
  },
  {
    name: 'Luz',
    months: 6,
    quote:
      'Lo mejor es la variedad de servicios. Mis clientes pueden pagar todo en un solo lugar. Muy recomendado.',
    image: 'montería-2-córdoba.webp',
  },
  {
    name: 'Jenny',
    months: 18,
    quote:
      'La capacitación fue excelente. Desde el primer día supe cómo operar y generar ingresos. Excelente oportunidad.',
    image: 'sahagún-2-córdoba.webp',
  },
  {
    name: 'Julieth',
    months: 30,
    quote:
      'Excelente oportunidad de negocio. La inversión se recupera rápido y los ingresos son constantes.',
    image: 'montería-córdoba-b-la-granja.webp',
  },
  {
    name: 'Eliana',
    months: 15,
    quote:
      'El acompañamiento es excepcional. Siempre están disponibles para resolver cualquier duda.',
    image: 'chinu-córdoba.webp',
  },
  {
    name: 'Libia',
    months: 12,
    quote:
      'Una gran oportunidad para crecer. La red TuColpagos me ha permitido ofrecer más servicios a mi comunidad.',
    image: 'montelibano-córdoba.jpg',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonios" ref={ref} className="section-padding relative">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Testimonios de Éxito
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Conoce las experiencias de nuestros franquiciados
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="md:hidden">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card overflow-hidden">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={getPuntoVentaSrc(testimonial.image)}
                  alt={`Corresponsal TuColpagos — ${formatPuntoVentaCity(testimonial.image)}`}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
              </div>
              <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-brand-darkGreen mb-1">{testimonial.name}</p>
              <p className="text-gray-600">{formatPuntoVentaCity(testimonial.image)}</p>
              <p className="text-brand-green font-bold mt-2">
                {testimonial.months} Meses con TuColpagos
              </p>
            </div>
          ))}
        </MobileCarousel>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={getPuntoVentaSrc(testimonial.image)}
                  alt={`Corresponsal TuColpagos — ${formatPuntoVentaCity(testimonial.image)}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 320px"
                />
              </div>
              <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-brand-darkGreen mb-1">{testimonial.name}</p>
              <p className="text-gray-600">{formatPuntoVentaCity(testimonial.image)}</p>
              <p className="text-brand-green font-bold mt-2">
                {testimonial.months} Meses con TuColpagos
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
