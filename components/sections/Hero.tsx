'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import DecorativeCurves from '@/components/DecorativeCurves'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="hero" ref={ref} className="section-padding bg-white relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Network Pattern */}
      <NetworkPattern />
      
      {/* Decorative Curves */}
      <DecorativeCurves />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-brand-darkerGreen">Potencia tu Negocio con </span>
              <span className="text-brand-darkGreen font-semibold">TuColpagos</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Únete a la red de franquicias líder en recaudos, pagos y servicios transaccionales en Colombia. Oportunidad de negocio rentable con respaldo y acompañamiento constante.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="btn-primary w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              Solicitar Información
            </a>
            <a
              href="#beneficios"
              className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-brand-darkGreen text-white hover:bg-brand-darkerGreen"
            >
              Conocer Más
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


