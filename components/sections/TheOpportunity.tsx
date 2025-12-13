'use client'

import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import DecorativeCurves from '@/components/DecorativeCurves'

const stats = [
  { value: 300, suffix: '+', label: 'Aliados Comerciales', color: 'text-brand-darkGreen' },
  { value: 20000, suffix: '+', label: 'Convenios Disponibles', color: 'text-brand-darkGreen' },
  { value: 100, suffix: '%', label: 'Plataforma Segura', color: 'text-brand-darkGreen' },
  { value: 24, suffix: '/7', label: 'Soporte Técnico', color: 'text-brand-darkGreen' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 },
      })
    }
  }, [inView, controls])

  return (
    <motion.div ref={ref} animate={controls}>
      <CountUp value={value} suffix={suffix} />
    </motion.div>
  )
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function TheOpportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Network Pattern */}
      <NetworkPattern />
      
      {/* Decorative Curves */}
      <DecorativeCurves />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            La Oportunidad
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            El mercado de servicios transaccionales en Colombia está en constante crecimiento.
            Únete a la revolución de la inclusión financiera.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-brand-green/10 to-brand-darkGreen/10 rounded-2xl p-8 md:p-12 border border-brand-green/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-brand-darkGreen">
                Inclusión Financiera en Crecimiento
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Colombia avanza hacia la digitalización de servicios financieros. 
                Cada vez más personas necesitan acceso fácil y rápido a servicios de recaudo y pago.
              </p>
              <p className="text-lg text-gray-700">
                Con TuColpagos, formas parte de esta transformación, ofreciendo soluciones 
                que mejoran la calidad de vida de miles de colombianos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">95%</div>
                <div className="text-sm text-gray-600">Cobertura Nacional</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">100%</div>
                <div className="text-sm text-gray-600">Seguridad</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">5+</div>
                <div className="text-sm text-gray-600">Años Experiencia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

