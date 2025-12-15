'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const portfolioItems = [
  { title: 'BRE-B', description: 'Recaudo de servicios básicos como energía, agua, gas y telecomunicaciones.', gradient: 'from-brand-yellow to-brand-orange' },
  { title: 'Servicios Públicos', description: 'Pago de impuestos, servicios municipales y entidades gubernamentales.', gradient: 'from-brand-orange to-brand-green' },
  { title: 'Recargas', description: 'Recarga de minutos, datos y paquetes para todas las operadoras móviles.', gradient: 'from-brand-green to-brand-darkGreen' },
  { title: 'Apuestas Deportivas', description: 'Depósitos y retiros para plataformas de apuestas deportivas autorizadas.', gradient: 'from-brand-yellow to-brand-orange' },
  { title: 'Entretenimiento', description: 'Pago de servicios de streaming, videojuegos y entretenimiento digital.', gradient: 'from-brand-orange to-brand-green' },
  { title: 'Billeteras', description: 'Recarga de billeteras digitales y servicios de pagos móviles.', gradient: 'from-brand-green to-brand-darkGreen' },
]

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="portafolio" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Nuestro Portafolio
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Más de 20,000 convenios disponibles para tus clientes
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="md:hidden">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl text-white`}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </MobileCarousel>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl text-white`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

