'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

export default function Commissions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const incomeProjections = [
    {
      amount: '$1M - $2M',
      period: 'Inicio (Mes 1-4)',
      gradient: 'from-brand-yellow to-brand-orange',
    },
    {
      amount: '$3M - $4M',
      period: 'Crecimiento (Mes 4-6)',
      gradient: 'from-brand-orange to-brand-green',
    },
    {
      amount: '$5M+',
      period: 'Establecido (Mes 7+)',
      gradient: 'from-brand-green to-brand-darkGreen',
    },
  ]

  const successFactors = [
    { label: 'Baja', value: 'Inversión Inicial' },
    { label: 'Rápido', value: 'Retorno de Inversión' },
    { label: 'Alto', value: 'Potencial de Crecimiento' },
  ]

  return (
    <section id="comisiones" ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Network Pattern */}
      <NetworkPattern />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Comisiones y Rentabilidad
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Oportunidad de negocio con estructura de comisiones competitiva y potencial de crecimiento constante
          </p>
        </motion.div>

        {/* Proyección de Ingresos Mensuales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-brand-darkGreen">
            Proyección de Ingresos Mensuales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incomeProjections.map((projection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`bg-gradient-to-br ${projection.gradient} p-6 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {projection.amount}
                  </div>
                  <div className="text-lg md:text-xl font-semibold">
                    {projection.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm md:text-base text-gray-600 text-center mt-6 max-w-3xl mx-auto">
            * Proyecciones basadas en el promedio de franquiciados activos. Los resultados pueden variar según ubicación, esfuerzo comercial y mercado local.
          </p>
        </motion.div>

        {/* Factores de Éxito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {successFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-brand-green to-brand-darkGreen p-6 rounded-xl text-white text-center shadow-lg"
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">{factor.label}</div>
              <div className="text-lg md:text-xl">{factor.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

