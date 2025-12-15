'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const testimonials = [
  { name: 'Carlos Rodríguez', city: 'Medellín, Antioquia', income: '$18M', quote: 'En 6 meses ya recuperé mi inversión. La plataforma es muy fácil de usar y el soporte siempre está disponible.' },
  { name: 'María González', city: 'Bogotá, Cundinamarca', income: '$22M', quote: 'Lo mejor es la variedad de servicios. Mis clientes pueden pagar todo en un solo lugar. Muy recomendado.' },
  { name: 'Juan Pérez', city: 'Cali, Valle del Cauca', income: '$15M', quote: 'La capacitación fue excelente. Desde el primer día supe cómo operar y generar ingresos. Excelente oportunidad.' },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonios" ref={ref} className="section-padding bg-white relative overflow-hidden">
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-brand-darkGreen mb-1">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.city}</p>
              <p className="text-brand-green font-bold mt-2">Ingresos mensuales: {testimonial.income}</p>
            </div>
          ))}
        </MobileCarousel>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-brand-darkGreen mb-1">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.city}</p>
              <p className="text-brand-green font-bold mt-2">Ingresos mensuales: {testimonial.income}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

