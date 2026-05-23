'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import DecorativeCurves from '@/components/DecorativeCurves'
import MobileCarousel from '@/components/MobileCarousel'
import CorresponsalesCarousel from '@/components/CorresponsalesCarousel'

const stats = [
  { number: '+400', label: 'Corresponsales en Colombia', bgColor: 'bg-brand-darkGreen', textColor: 'text-white' },
  { number: '+25', label: 'Bancos en Nuestro Portafolio', bgColor: 'bg-brand-orange', textColor: 'text-white' },
  { number: '8+', label: 'Años de Experiencia en Corresponsalía', bgColor: 'bg-brand-darkGreen', textColor: 'text-white' },
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
    <section id="oportunidad" ref={ref} className="section-padding relative">
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
            ¡Contamos con una plataforma{' '}
            <span className="font-bold lowercase">ágil y segura</span>!
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
              className={`${stat.bgColor} ${stat.textColor} p-6 rounded-xl text-center shadow-lg`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.textColor}`}>{stat.number}</div>
              <div className={`text-lg md:text-xl ${stat.textColor}`}>{stat.label}</div>
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
            Nuestros corresponsales TuColpagos te ofrecen:
          </h3>
        </motion.div>

        {/* Carrusel móvil: 3 elementos "Nuestros corresponsales te ofrecen" */}
        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="card text-center min-h-[200px] flex flex-col">
              <h4 className="text-lg font-bold mb-3 text-brand-darkGreen">{opportunity.title}</h4>
              <p className="text-gray-700 text-sm flex-grow">{opportunity.description}</p>
            </div>
          ))}
        </MobileCarousel>

        {/* Grid desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
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

        {/* Galería de corresponsales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 text-brand-darkGreen">
            Algunos de Nuestros Aliados
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Conoce puntos reales de nuestra red de corresponsales en todo el país
          </p>
          <CorresponsalesCarousel />
        </motion.div>
      </div>
    </section>
  )
}
