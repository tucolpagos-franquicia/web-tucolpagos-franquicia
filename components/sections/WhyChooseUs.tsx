'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const benefits = [
  {
    title: 'Plataforma Tecnológica de Pagos',
    description: 'Plataforma tecnológica de pagos, recaudos y servicios. Más de 8 años de experiencia en corresponsalía bancaria. Vigilado por la Superintendencia Financiera de Colombia.',
    icon: 'payments',
    iconColor: '#058341',
  },
  {
    title: 'Estructura de Comisiones Atractiva',
    description: 'Estructura de comisiones atractiva que te permite generar ingresos desde el primer día. Sin pagos mensuales adicionales durante los 3 años de suscripción.',
    icon: 'savings',
    iconColor: '#058341',
  },
  {
    title: 'Más de 300 Oficinas',
    description: 'Únete a una red consolidada con más de 300 oficinas en el territorio colombiano. Más de 25 bancos en nuestro portafolio y miles de convenios disponibles.',
    icon: 'store',
    iconColor: '#058341',
  },
  {
    title: 'Suscripción de 3 Años',
    description: 'Un solo pago inicial para 3 años completos de suscripción. Acceso a todos los beneficios, soporte permanente y actualizaciones de la plataforma incluidas.',
    icon: 'event_available',
    iconColor: '#058341',
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="beneficios" ref={ref} className="section-padding relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            ¿Por Qué Elegir TuColpagos?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            ¡Potencia tu negocio con TuColpagos y obtén ingresos diarios!
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

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
