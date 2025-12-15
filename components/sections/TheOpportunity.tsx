'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import DecorativeCurves from '@/components/DecorativeCurves'

export default function TheOpportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <DecorativeCurves />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            La Oportunidad
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            El mercado de servicios transaccionales en Colombia está en constante crecimiento. Únete a la revolución de la inclusión financiera.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

