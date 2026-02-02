'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const features = [
  { title: 'Interfaz Intuitiva', description: 'Plataforma fácil de usar, diseñada para que cualquier persona pueda operarla sin complicaciones.' },
  { title: 'Seguridad Máxima', description: 'Encriptación de datos, certificaciones de seguridad y cumplimiento de normativas financieras.' },
  { title: 'Reportes 24/7', description: 'Accede a reportes detallados de ventas, comisiones y estadísticas en tiempo real desde cualquier dispositivo.' },
  { title: 'Integración Bancaria', description: 'Conectado con los principales bancos de Colombia para transacciones seguras y rápidas.' },
]

export default function Platform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="plataforma" ref={ref} className="section-padding relative">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Nuestra Plataforma
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Tecnología de última generación al servicio de tu negocio
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8">
          {features.map((feature, index) => (
            <div key={index} className="card min-h-[180px]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-darkGreen">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
            </div>
          ))}
        </MobileCarousel>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card min-h-[200px] flex flex-col"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-brand-darkGreen">{feature.title}</h3>
              <p className="text-gray-700 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



