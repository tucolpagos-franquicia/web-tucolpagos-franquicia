'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const benefits = [
  {
    title: 'Mayor Cantidad de Clientes',
    description: 'Accede a una base de clientes establecida y en crecimiento constante. Más de 300 aliados comerciales confían en nuestra plataforma.',
  },
  {
    title: 'Amplio Portafolio',
    description: 'Ofrece más de 20,000 convenios en servicios públicos, recargas, apuestas deportivas, entretenimiento y billeteras digitales.',
  },
  {
    title: 'Respaldo y Acompañamiento',
    description: 'Recibe capacitación continua, soporte técnico 24/7 y acompañamiento constante para garantizar el éxito de tu negocio.',
  },
  {
    title: 'Inversión Rentable con Bajos Costos',
    description: 'Inversión accesible con retorno de inversión atractivo. Comisiones competitivas y bajos costos operativos.',
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
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            ¿Por Qué Elegir TuColpagos?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Únete a la red de franquicias más confiable y rentable en servicios transaccionales de Colombia
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="md:hidden">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
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
              className="card"
            >
              <h3 className="text-xl font-bold mb-3 text-brand-darkGreen">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

