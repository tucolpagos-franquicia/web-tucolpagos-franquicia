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

  // Updated: Hero section with "Potencia tu Negocio"

  return (
    <section id="hero" ref={ref} className="section-padding relative overflow-hidden min-h-[85vh] flex items-center pt-24 md:pt-32">
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
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-2">
              <span className="text-brand-darkerGreen">Potencia tu Negocio o Emprendimiento con </span>
              <span className="text-brand-darkGreen font-semibold">TuColpagos</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              Únete a la red de franquicias líder en recaudos, pagos y servicios transaccionales en Colombia. Suscripción de 3 años con un solo pago inicial.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-brand-darkGreen font-semibold max-w-3xl mx-auto">
              Más de 300 oficinas • Más de 25 bancos • Plataforma ágil y segura
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/573054477618?text=Hola!%20Estoy%20interesado%20en%20TuColpagos%20Franquicia.%20Quisiera%20obtener%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              Solicitar Información
            </a>
            <a
              href="#planes"
              className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-brand-darkGreen text-white hover:bg-brand-darkerGreen"
            >
              Ver Planes
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


