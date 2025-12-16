'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import DecorativeCurves from '@/components/DecorativeCurves'
import Image from 'next/image'
import MobileCarousel from '@/components/MobileCarousel'

const puntosVenta = [
  'puntos-venta (1).jpg',
  'puntos-venta (2).jpg',
  'puntos-venta (3).jpg',
  'puntos-venta (4).jpg',
  'puntos-venta (5).jpg',
]

const stats = [
  { number: '+300', label: 'Oficinas en el Territorio Colombiano', gradient: 'from-brand-yellow to-brand-orange' },
  { number: '+25', label: 'Bancos en Nuestro Portafolio', gradient: 'from-brand-orange to-brand-green' },
  { number: '8+', label: 'Años de Experiencia en Corresponsalía', gradient: 'from-brand-green to-brand-darkGreen' },
]

const opportunities = [
  {
    title: 'Oportunidad de Expandir tu Negocio',
    description: 'Multiplica tus ingresos al integrar nuestra plataforma de pagos y recaudos a tu negocio existente.',
  },
  {
    title: 'Comercialización de Productos',
    description: 'Ofrece productos físicos y financieros, ampliando tu catálogo de servicios para tus clientes.',
  },
  {
    title: 'Plataforma Ágil y Segura',
    description: 'Tecnología de última generación con más de 8 años de experiencia en corresponsalía bancaria.',
  },
]

export default function TheOpportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <DecorativeCurves />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Nuestra Presencia
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            ¡Contamos con una plataforma ÁGIL Y SEGURA!
          </p>
        </motion.div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-xl text-white text-center shadow-lg`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg md:text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Oportunidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-darkGreen">
            Nuestras agencias TuColpagos te ofrecen:
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card text-center"
            >
              <h4 className="text-xl font-bold mb-3 text-brand-darkGreen">{opportunity.title}</h4>
              <p className="text-gray-700">{opportunity.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            El mercado de servicios transaccionales en Colombia está en constante crecimiento. Únete a la revolución de la inclusión financiera.
          </p>
        </motion.div>

        {/* Galería de Puntos de Venta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-brand-darkGreen">
            Algunos de Nuestros Aliados
          </h3>
          
          {/* Mobile Carousel */}
          <MobileCarousel itemsPerView={1.2} className="md:hidden">
            {puntosVenta.map((punto, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={`/puntos-venta/${punto}`}
                  alt={`Punto de venta TuColpagos ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </MobileCarousel>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {puntosVenta.map((punto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <Image
                  src={`/puntos-venta/${punto}`}
                  alt={`Punto de venta TuColpagos ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
