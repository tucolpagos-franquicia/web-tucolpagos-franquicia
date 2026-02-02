'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

const blocks = [
  {
    title: 'Modelo sin plástico',
    icon: 'credit_card_off',
    description: 'Corresponsales 100% digitales que operan desde el celular, sin tarjetas físicas ni datáfonos tradicionales, disminuyendo residuos y consumo de recursos.',
  },
  {
    title: 'Menos desplazamientos',
    icon: 'directions_walk',
    description: 'Acercamos servicios financieros a barrios y municipios, reduciendo los desplazamientos de las personas y su impacto diario en emisiones.',
  },
  {
    title: 'Árboles por cada franquicia',
    icon: 'forest',
    description: 'Por cada nuevo corresponsal sembramos 10 árboles, para que cada franquicia también sea un punto que cuida el planeta.',
  },
]

export default function Sustainability() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sostenibilidad" ref={ref} className="section-padding relative">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: '#fdbc02', color: '#034a2a' }}
          >
            Compromiso ambiental
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Sostenibilidad en cada transacción
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            En TuColpagos creemos que mover el dinero también puede mover al mundo hacia un futuro más verde. Por eso nuestro modelo de corresponsales digitales reduce la huella de carbono mientras impulsa la inclusión financiera en Colombia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <span
                className="material-symbols-outlined mb-4 text-brand-darkGreen"
                style={{ fontSize: '56px', lineHeight: '1' }}
                aria-hidden
              >
                {block.icon}
              </span>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-brand-darkGreen">
                {block.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
