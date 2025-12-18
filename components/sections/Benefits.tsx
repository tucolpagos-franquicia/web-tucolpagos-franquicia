'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const benefits = [
  { 
    title: 'Negocio Probado', 
    description: 'Modelo de negocio validado con años de experiencia en el mercado colombiano.',
    icon: 'verified',
    iconColor: '#058341',
  },
  { 
    title: 'Plataforma Segura', 
    description: 'Tecnología de última generación con certificaciones de seguridad y encriptación.',
    icon: 'security',
    iconColor: '#058341',
  },
  { 
    title: 'Capacitación Continua', 
    description: 'Programa de capacitación inicial y actualizaciones constantes para mantenerte al día.',
    icon: 'school',
    iconColor: '#058341',
  },
  { 
    title: 'Comisiones Competitivas', 
    description: 'Estructura de comisiones atractiva que te permite generar ingresos desde el primer día.',
    icon: 'trending_up',
    iconColor: '#058341',
  },
  { 
    title: 'Dashboard en Tiempo Real', 
    description: 'Monitorea tus ventas, comisiones y estadísticas en tiempo real desde cualquier dispositivo.',
    icon: 'analytics',
    iconColor: '#058341',
  },
  { 
    title: 'Soporte 24/7', 
    description: 'Equipo de soporte técnico disponible las 24 horas para resolver cualquier inconveniente.',
    icon: 'support_agent',
    iconColor: '#058341',
  },
]

export default function Benefits() {
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
            Beneficios para el Franquiciado
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Todo lo que necesitas para hacer crecer tu negocio con confianza
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="md:hidden">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center">
              <span 
                className="material-symbols-outlined mx-auto block mb-4"
                style={{ 
                  fontSize: '56px', 
                  color: benefit.iconColor,
                  lineHeight: '1'
                }}
              >
                {benefit.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 text-brand-darkGreen">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </MobileCarousel>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
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
                  color: benefit.iconColor,
                  lineHeight: '1'
                }}
              >
                {benefit.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 text-brand-darkGreen">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



