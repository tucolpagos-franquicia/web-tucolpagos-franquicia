'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import MobileCarousel from '@/components/MobileCarousel'
import NetworkPattern from '@/components/NetworkPattern'

const benefits = [
  {
    title: 'Mayor Cantidad de Clientes',
    description: 'Accede a una base de clientes establecida y en crecimiento constante. Más de 300 aliados comerciales confían en nuestra plataforma.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Amplio Portafolio',
    description: 'Ofrece más de 20,000 convenios en servicios públicos, recargas, apuestas deportivas, entretenimiento y billeteras digitales.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Respaldo y Acompañamiento',
    description: 'Recibe capacitación continua, soporte técnico 24/7 y acompañamiento constante para garantizar el éxito de tu negocio.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Inversión Rentable con Bajos Costos',
    description: 'Inversión accesible con retorno de inversión atractivo. Comisiones competitivas y bajos costos operativos.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="beneficios" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            ¿Por Qué Elegir TuColpagos?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Únete a la red de franquicias más confiable y rentable en servicios transaccionales de Colombia
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center h-full"
            >
              <div className="text-brand-darkGreen mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-darkGreen mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-secondary">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </MobileCarousel>
      </div>
    </section>
  )
}

