'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import MobileCarousel from '@/components/MobileCarousel'
import NetworkPattern from '@/components/NetworkPattern'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    city: 'Medellín, Antioquia',
    image: '/testimonials/carlos.jpg', // Placeholder - reemplazar con foto real
    quote: 'En 6 meses ya recuperé mi inversión. La plataforma es muy fácil de usar y el soporte siempre está disponible.',
    results: 'Ingresos mensuales: $18M',
    rating: 5,
  },
  {
    name: 'María González',
    city: 'Bogotá, Cundinamarca',
    image: '/testimonials/maria.jpg', // Placeholder - reemplazar con foto real
    quote: 'Lo mejor es la variedad de servicios. Mis clientes pueden pagar todo en un solo lugar. Muy recomendado.',
    results: 'Ingresos mensuales: $22M',
    rating: 5,
  },
  {
    name: 'Juan Pérez',
    city: 'Cali, Valle del Cauca',
    image: '/testimonials/juan.jpg', // Placeholder - reemplazar con foto real
    quote: 'La capacitación fue excelente. Desde el primer día supe cómo operar y generar ingresos. Excelente oportunidad.',
    results: 'Ingresos mensuales: $15M',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    city: 'Barranquilla, Atlántico',
    image: '/testimonials/ana.jpg', // Placeholder - reemplazar con foto real
    quote: 'El dashboard en tiempo real me permite ver mis ganancias al instante. Muy profesional y confiable.',
    results: 'Ingresos mensuales: $20M',
    rating: 5,
  },
  {
    name: 'Luis Hernández',
    city: 'Pereira, Risaralda',
    image: '/testimonials/luis.jpg', // Placeholder - reemplazar con foto real
    quote: 'Inversión baja, retorno rápido. En 4 meses ya estaba generando ingresos estables. Muy contento con la decisión.',
    results: 'Ingresos mensuales: $16M',
    rating: 5,
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
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            Testimonios de Éxito
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Conoce las experiencias de nuestros franquiciados
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.1}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card bg-white h-full"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Results */}
              <div className="bg-brand-darkGreen/10 rounded-lg p-4 mb-4">
                <p className="text-brand-darkGreen font-semibold">{testimonial.results}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-darkGreen to-brand-green rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-brand-darkGreen">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </MobileCarousel>
      </div>
    </section>
  )
}

