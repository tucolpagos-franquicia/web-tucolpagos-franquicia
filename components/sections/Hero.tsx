'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import HeroCollageBackground from '@/components/HeroCollageBackground'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="hero"
      ref={ref}
      className="section-padding relative flex min-h-[85vh] w-full min-w-0 items-center overflow-hidden pt-24 md:pt-32"
    >
      <HeroCollageBackground />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-heading mb-6 break-words px-2 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-brand-darkerGreen">Potencia tu Negocio o Emprendimiento con </span>
              <span className="font-semibold text-brand-darkGreen">TuColpagos</span>
            </h1>
            <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
              Únete a la red de franquicias líder en recaudos, pagos y servicios transaccionales en Colombia.
              Suscripción de 3 años con un solo pago inicial.
            </p>
            <p className="mx-auto max-w-3xl text-lg font-semibold text-brand-darkGreen sm:text-xl md:text-2xl">
              Más de 400 oficinas • Más de 25 bancos • Plataforma ágil y segura
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/573054477618?text=Hola!%20Estoy%20interesado%20en%20TuColpagos%20Franquicia.%20Quisiera%20obtener%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-8 py-4 text-lg font-semibold sm:w-auto"
            >
              Solicitar Información
            </a>
            <a
              href="#planes"
              className="btn-secondary w-full bg-brand-darkGreen px-8 py-4 text-lg font-semibold text-white hover:bg-brand-darkerGreen sm:w-auto"
            >
              Ver Planes
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
