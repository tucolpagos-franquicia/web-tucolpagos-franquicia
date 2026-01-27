'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

const requirements = [
  {
    title: 'Cédula de Ciudadanía',
    description: 'Ambas caras de la cédula de ciudadanía',
    icon: '📄',
  },
  {
    title: 'RUT Actualizado',
    description: 'Registro Único Tributario vigente',
    icon: '📋',
  },
  {
    title: 'Certificado de Cámara y Comercio',
    description: 'Documento actualizado de la Cámara de Comercio',
    icon: '🏢',
  },
  {
    title: 'Recibo de Servicio Público',
    description: 'Recibo reciente de cualquier servicio público',
    icon: '💡',
  },
]

export default function Requirements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="requisitos" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Requisitos
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
            Requisitos para acceder a TuColpagos
          </p>
          <div className="bg-brand-green/10 border-2 border-brand-green rounded-lg px-6 py-4 inline-block">
            <p className="text-lg md:text-xl font-bold text-brand-darkGreen">
              ¡Sin verificación en centrales de riesgo!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">{req.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-brand-darkGreen">{req.title}</h3>
              <p className="text-gray-700 text-sm">{req.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            <strong>Con estos sencillos documentos, puedes ser parte de TuColpagos.</strong>
          </p>
          <p className="text-sm md:text-base text-brand-darkGreen font-semibold">
            **No consideramos reportes en centrales de riesgo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


