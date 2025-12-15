'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

const faqs = [
  {
    question: '¿Cuál es la inversión inicial requerida?',
    answer: 'La inversión inicial es accesible y varía según la ubicación y el tipo de punto de venta. Contáctanos para conocer los detalles específicos y las opciones de financiamiento disponibles.',
  },
  {
    question: '¿Necesito experiencia previa en el sector financiero?',
    answer: 'No es necesario tener experiencia previa. Ofrecemos capacitación completa para que puedas operar exitosamente desde el primer día.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de activación?',
    answer: 'El proceso completo de activación puede tomar entre 2 a 4 semanas, dependiendo de la documentación y la ubicación.',
  },
  {
    question: '¿Qué soporte técnico recibo?',
    answer: 'Recibes soporte técnico 24/7, capacitación continua y acompañamiento constante de nuestro equipo de expertos.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Resolvemos tus dudas más comunes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-brand-darkGreen">{faq.question}</span>
                <span className="text-brand-darkGreen">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
