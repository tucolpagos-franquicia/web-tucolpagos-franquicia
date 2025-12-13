'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import MobileCarousel from '@/components/MobileCarousel'
import NetworkPattern from '@/components/NetworkPattern'

const features = [
  {
    title: 'Interfaz Intuitiva',
    description: 'Plataforma fácil de usar, diseñada para que cualquier persona pueda operarla sin complicaciones.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Seguridad Máxima',
    description: 'Encriptación de datos, certificaciones de seguridad y cumplimiento de normativas financieras.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Reportes 24/7',
    description: 'Accede a reportes detallados de ventas, comisiones y estadísticas en tiempo real desde cualquier dispositivo.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Integración Bancaria',
    description: 'Conectado con los principales bancos de Colombia para transacciones seguras y rápidas.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v4a3 3 0 003 3z" />
      </svg>
    ),
  },
]

export default function Platform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            Nuestra Plataforma
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Tecnología de última generación al servicio de tu negocio
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card bg-white flex items-start gap-6 h-full"
            >
              <div className="text-brand-darkGreen flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-darkGreen mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </MobileCarousel>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h3 className="font-heading text-2xl font-bold text-brand-darkGreen mb-8 text-center">
            Certificaciones y Seguridad
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-70">
            {['ISO 27001', 'PCI DSS', 'SSL/TLS', 'Superfinanciera'].map((cert, index) => (
              <div
                key={cert}
                className="bg-gray-100 rounded-lg p-4 w-full text-center"
              >
                <span className="text-sm font-medium text-gray-600">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

