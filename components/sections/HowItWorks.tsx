'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

const steps = [
  { number: '01', title: 'Solicita Información', description: 'Completa el formulario o contáctanos directamente. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.' },
  { number: '02', title: 'Evaluación', description: 'Revisamos tu perfil y ubicación para asegurar que cumples con los requisitos y que hay oportunidad en tu zona.' },
  { number: '03', title: 'Capacitación', description: 'Recibe capacitación completa sobre la plataforma, procesos comerciales y mejores prácticas para el éxito.' },
  { number: '04', title: 'Credenciales y Activación', description: 'Obtén tus credenciales de acceso, configura tu punto de venta y comienza a operar con nuestro respaldo.' },
  { number: '05', title: 'Genera Ingresos', description: 'Comienza a atender clientes y generar comisiones desde el primer día. Monitorea todo desde tu dashboard.' },
]

export default function HowItWorks() {
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
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Proceso simple y rápido para comenzar tu franquicia en 5 pasos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-brand-darkGreen text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-darkGreen">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

