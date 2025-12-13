'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import MobileCarousel from '@/components/MobileCarousel'
import NetworkPattern from '@/components/NetworkPattern'

const portfolioItems = [
  {
    title: 'BRE-B',
    description: 'Recaudo de servicios básicos como energía, agua, gas y telecomunicaciones.',
    icon: '⚡',
    bgColor: 'bg-gradient-to-br from-brand-yellow via-brand-orange to-brand-yellow',
  },
  {
    title: 'Servicios Públicos',
    description: 'Pago de impuestos, servicios municipales y entidades gubernamentales.',
    icon: '🏛️',
    bgColor: 'bg-gradient-to-br from-brand-darkGreen to-[#046a34]',
  },
  {
    title: 'Recargas',
    description: 'Recarga de minutos, datos y paquetes para todas las operadoras móviles.',
    icon: '📱',
    bgColor: 'bg-gradient-to-br from-brand-green to-brand-darkGreen',
  },
  {
    title: 'Apuestas Deportivas',
    description: 'Depósitos y retiros para plataformas de apuestas deportivas autorizadas.',
    icon: '⚽',
    bgColor: 'bg-gradient-to-br from-brand-orange to-[#e66502]',
  },
  {
    title: 'Entretenimiento',
    description: 'Pago de servicios de streaming, videojuegos y entretenimiento digital.',
    icon: '🎮',
    bgColor: 'bg-gradient-to-br from-brand-green via-brand-yellow to-brand-green',
  },
  {
    title: 'Billeteras',
    description: 'Recarga de billeteras digitales y servicios de pagos móviles.',
    icon: '💳',
    bgColor: 'bg-gradient-to-br from-brand-darkGreen via-brand-green to-brand-darkGreen',
  },
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
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Más de 20,000 convenios disponibles para tus clientes
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.1} className="mb-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${item.bgColor} p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] h-full min-h-[280px]`}
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4 drop-shadow-lg">{item.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-3 drop-shadow-md">{item.title}</h3>
                <p className="text-white/95 leading-relaxed">{item.description}</p>
              </div>
              {/* Efecto de brillo sutil al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </MobileCarousel>

        {/* Logos de bancos aliados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-heading text-2xl font-bold text-center text-brand-darkGreen mb-8">
            Aliados Estratégicos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-60">
            {['Davivienda', 'Bancolombia', 'BanColombia', 'Agrario', 'Caja Social', 'Otros'].map((bank, index) => (
              <div
                key={bank}
                className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center text-center"
              >
                <span className="text-sm font-medium text-gray-600">{bank}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

