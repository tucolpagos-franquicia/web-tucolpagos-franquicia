'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'
import Image from 'next/image'

const testimonials = [
  { 
    role: 'Franquiciado',
    months: 28,
    quote: 'En 6 meses ya recuperé mi inversión. La plataforma es muy fácil de usar y el soporte siempre está disponible.',
    storeImage: 'puntos-venta (1).jpg',
    personImage: 'persona-1.jpg'
  },
  { 
    role: 'Franquiciada',
    months: 45,
    quote: 'Lo mejor es la variedad de servicios. Mis clientes pueden pagar todo en un solo lugar. Muy recomendado.',
    storeImage: 'puntos-venta (2).jpg',
    personImage: 'persona-2.jpg'
  },
  { 
    role: 'Franquiciado',
    months: 33,
    quote: 'La capacitación fue excelente. Desde el primer día supe cómo operar y generar ingresos. Excelente oportunidad.',
    storeImage: 'puntos-venta (3).jpg',
    personImage: 'persona-3.jpg'
  },
  { 
    role: 'Franquiciada',
    months: 52,
    quote: 'Excelente oportunidad de negocio. La inversión se recupera rápido y los ingresos son constantes.',
    storeImage: 'puntos-venta (4).jpg',
    personImage: 'persona-4.jpg'
  },
  { 
    role: 'Franquiciado',
    months: 19,
    quote: 'El acompañamiento es excepcional. Siempre están disponibles para resolver cualquier duda.',
    storeImage: 'puntos-venta (5).jpg',
    personImage: 'persona-5.jpg'
  },
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
            <div key={index} className="card overflow-hidden">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/puntos-venta/${testimonial.storeImage}`}
                  alt={`Punto de venta TuColpagos`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-brand-darkGreen shadow-lg flex-shrink-0">
                  <Image
                    src={`/testimonios/${testimonial.personImage}`}
                    alt={testimonial.role}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-darkGreen">{testimonial.role}</p>
                  <p className="text-brand-green font-medium text-sm">{testimonial.months} meses con TuColpagos</p>
                </div>
              </div>
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
              className="card overflow-hidden"
            >
              <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/puntos-venta/${testimonial.storeImage}`}
                  alt={`Punto de venta TuColpagos`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-brand-darkGreen shadow-lg flex-shrink-0">
                  <Image
                    src={`/testimonios/${testimonial.personImage}`}
                    alt={testimonial.role}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-darkGreen">{testimonial.role}</p>
                  <p className="text-brand-green font-medium text-sm">{testimonial.months} meses con TuColpagos</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


