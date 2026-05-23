'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const benefits = [
  { title: 'Negocio Probado', icon: 'verified_user', description: 'Modelo de negocio validado con años de experiencia en el mercado colombiano.' },
  { title: 'Plataforma Segura', icon: 'shield', description: 'Tecnología de última generación con certificaciones de seguridad y encriptación.' },
  { title: 'Capacitación Continua', icon: 'school', description: 'Programa de capacitación inicial y actualizaciones constantes para mantenerte al día.' },
  { title: 'Comisiones Competitivas', icon: 'payments', description: 'Estructura de comisiones atractiva que te permite generar ingresos desde el primer día.' },
  { title: 'Dashboard en Tiempo Real', icon: 'dashboard', description: 'Monitorea tus ventas, comisiones y estadísticas en tiempo real desde cualquier dispositivo.' },
  {
    title: 'Soporte Técnico',
    icon: 'support_agent',
    description:
      'Equipo de soporte técnico disponible de lunes a sábado para resolver cualquier inconveniente.',
  },
]

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="ventajas" ref={ref} className="section-padding relative">
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

        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card min-h-[180px]">
              <span className="material-symbols-outlined block mb-3 text-brand-darkGreen" style={{ fontSize: '48px', lineHeight: '1' }}>{benefit.icon}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-darkGreen">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{benefit.description}</p>
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
              className="card min-h-[200px] flex flex-col"
            >
              <span className="material-symbols-outlined block mb-4 text-brand-darkGreen" style={{ fontSize: '56px', lineHeight: '1' }}>{benefit.icon}</span>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-brand-darkGreen">{benefit.title}</h3>
              <p className="text-gray-700 flex-grow">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



