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
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      borderColor: 'border-amber-300',
      textColor: 'text-amber-900',
    },
    {
      amount: '$3M - $4M',
      period: 'Crecimiento (Mes 4-6)',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-300',
      textColor: 'text-emerald-900',
    },
    {
      amount: '$5M+',
      period: 'Establecido (Mes 7+)',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-900',
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
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-2">
            Oportunidad de negocio con estructura de comisiones competitiva y potencial de crecimiento constante
          </p>
          <p className="text-lg md:text-xl text-brand-darkGreen font-semibold max-w-3xl mx-auto">
            Todos los beneficios incluidos en tu suscripción de 3 años con un solo pago inicial
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
                className={`${projection.bgColor} ${projection.borderColor} border-2 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${projection.textColor}`}>
                    {projection.amount}
                  </div>
                  <div className={`text-lg md:text-xl font-semibold ${projection.textColor}`}>
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
              className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl text-center shadow-lg"
            >
              <div className="text-2xl md:text-3xl font-bold mb-2 text-emerald-900">{factor.label}</div>
              <div className="text-lg md:text-xl text-emerald-800">{factor.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Información sobre Suscripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-brand-green/10 to-brand-darkGreen/10 border-2 border-brand-green rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-brand-darkGreen">
              Suscripción de 3 Años
            </h3>
            <p className="text-gray-700 text-base md:text-lg">
              Con un solo pago inicial tendrás acceso a todos los beneficios de ser aliado TuColpagos durante 3 años completos. Sin pagos mensuales adicionales, sin renovaciones complicadas. Todo incluido en tu inversión inicial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
