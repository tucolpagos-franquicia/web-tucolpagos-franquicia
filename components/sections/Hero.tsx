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
    <section
      ref={ref}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden"
    >
      {/* Network Pattern */}
      <NetworkPattern />
      
      {/* Decorative Curves */}
      <DecorativeCurves />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gray-900"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-brand-darkerGreen">Potencia tu Emprendimiento con</span>{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                className="inline-block text-brand-darkGreen font-semibold"
              >
                TuColpagos
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Únete a la red de franquicias líder en recaudos, pagos y servicios transaccionales en Colombia.
              Oportunidad de negocio rentable con respaldo y acompañamiento constante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="btn-secondary text-center"
              >
                Solicitar Información
              </a>
              <a
                href="#beneficios"
                className="bg-brand-darkGreen text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-brand-green text-center border-2 border-brand-darkGreen"
              >
                Conocer Más
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-darkGreen"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

