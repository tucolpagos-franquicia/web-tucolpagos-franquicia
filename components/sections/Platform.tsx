'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const features = [
  { 
    title: 'Interfaz Intuitiva', 
    description: 'Plataforma fácil de usar, diseñada para que cualquier persona pueda operarla sin complicaciones.',
    icon: 'dashboard',
    iconColor: '#058341',
  },
  { 
    title: 'Seguridad Máxima', 
    description: 'Encriptación de datos, certificaciones de seguridad y cumplimiento de normativas financieras.',
    icon: 'shield',
    iconColor: '#058341',
  },
  { 
    title: 'Reportes 24/7', 
    description: 'Accede a reportes detallados de ventas, comisiones y estadísticas en tiempo real desde cualquier dispositivo.',
    icon: 'assessment',
    iconColor: '#058341',
  },
  { 
    title: 'Integración Bancaria', 
    description: 'Conectado con los principales bancos de Colombia para transacciones seguras y rápidas.',
    icon: 'account_balance',
    iconColor: '#058341',
  },
]

export default function Platform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
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

        <MobileCarousel itemsPerView={1.2} className="md:hidden">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <span 
                className="material-symbols-outlined mx-auto block mb-4"
                style={{ 
                  fontSize: '56px', 
                  color: feature.iconColor,
                  lineHeight: '1'
                }}
              >
                {feature.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 text-brand-darkGreen">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
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
              className="card text-center"
            >
              <span 
                className="material-symbols-outlined mx-auto block mb-4"
                style={{ 
                  fontSize: '60px', 
                  color: feature.iconColor,
                  lineHeight: '1'
                }}
              >
                {feature.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 text-brand-darkGreen">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



