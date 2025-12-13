'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

const commissionTypes = [
  {
    category: 'Servicios Públicos',
    commission: 'Hasta 2.5%',
    description: 'Energía, agua, gas, telecomunicaciones',
  },
  {
    category: 'Recargas Móviles',
    commission: 'Hasta 3%',
    description: 'Todas las operadoras',
  },
  {
    category: 'Apuestas Deportivas',
    commission: 'Hasta 4%',
    description: 'Depósitos y retiros',
  },
  {
    category: 'Entretenimiento',
    commission: 'Hasta 3.5%',
    description: 'Streaming, videojuegos',
  },
  {
    category: 'Billeteras Digitales',
    commission: 'Hasta 2%',
    description: 'Recargas y pagos',
  },
]

export default function Commissions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="comisiones" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            Comisiones y Rentabilidad
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Estructura de comisiones competitiva diseñada para maximizar tus ingresos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tabla de Comisiones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto mb-12"
          >
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-darkGreen text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading font-semibold">Categoría</th>
                  <th className="px-6 py-4 text-left font-heading font-semibold">Comisión</th>
                  <th className="px-6 py-4 text-left font-heading font-semibold">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {commissionTypes.map((item, index) => (
                  <tr
                    key={item.category}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-brand-darkGreen">{item.category}</td>
                    <td className="px-6 py-4">
                      <span className="text-accent-yellow font-bold text-lg">{item.commission}</span>
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Proyección de Ingresos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-brand-green/10 to-brand-darkGreen/10 rounded-2xl p-8 md:p-12 border border-brand-green/20"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center text-brand-darkGreen">
              Proyección de Ingresos Mensuales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">$5M - $10M</div>
                <div className="text-sm text-gray-600">Inicio (Mes 1-3)</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">$10M - $20M</div>
                <div className="text-sm text-gray-600">Crecimiento (Mes 4-6)</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md border border-brand-green/10">
                <div className="text-3xl font-bold mb-2 text-brand-darkGreen">$20M+</div>
                <div className="text-sm text-gray-600">Establecido (Mes 7+)</div>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm">
              * Proyecciones basadas en el promedio de franquiciados activos. 
              Los resultados pueden variar según ubicación, esfuerzo comercial y mercado local.
            </p>
          </motion.div>

          {/* Factores de Éxito */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-gradient-to-br from-brand-green/10 to-brand-darkGreen/10 rounded-xl border border-brand-green/20">
              <div className="text-4xl font-bold text-brand-darkGreen mb-2">Baja</div>
              <div className="text-text-secondary">Inversión Inicial</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-brand-green/10 to-brand-darkGreen/10 rounded-xl border border-brand-green/20">
              <div className="text-4xl font-bold text-brand-darkGreen mb-2">Rápido</div>
              <div className="text-text-secondary">Retorno de Inversión</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-brand-green/10 to-brand-darkGreen/10 rounded-xl border border-brand-green/20">
              <div className="text-4xl font-bold text-brand-darkGreen mb-2">Alto</div>
              <div className="text-text-secondary">Potencial de Crecimiento</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

