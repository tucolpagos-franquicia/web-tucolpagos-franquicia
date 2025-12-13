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
    answer: 'No es necesario. Proporcionamos capacitación completa que te prepara para operar exitosamente desde el primer día. Nuestro equipo te acompañará durante todo el proceso.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de activación?',
    answer: 'El proceso completo, desde la solicitud hasta la activación, puede tomar entre 2 a 4 semanas, dependiendo de la documentación y la ubicación del punto de venta.',
  },
  {
    question: '¿Qué soporte técnico recibo?',
    answer: 'Ofrecemos soporte técnico 24/7 a través de múltiples canales: teléfono, WhatsApp, email y chat en línea. También contamos con un centro de ayuda con recursos y tutoriales.',
  },
  {
    question: '¿Cómo se calculan las comisiones?',
    answer: 'Las comisiones varían según el tipo de servicio y se calculan como un porcentaje del valor de cada transacción. La estructura es transparente y puedes consultar tus ganancias en tiempo real desde el dashboard.',
  },
  {
    question: '¿Puedo operar desde mi casa o necesito un local comercial?',
    answer: 'Depende de tu ubicación y modelo de negocio. Algunos franquiciados operan desde casa, mientras que otros prefieren un local comercial. Te ayudamos a evaluar la mejor opción para tu caso.',
  },
  {
    question: '¿Qué requisitos debo cumplir?',
    answer: 'Los requisitos principales incluyen: ser mayor de edad, tener cédula de ciudadanía vigente, contar con un espacio adecuado para operar, y demostrar compromiso con el negocio. Te proporcionamos la lista completa durante el proceso de evaluación.',
  },
  {
    question: '¿Hay exclusividad territorial?',
    answer: 'Sí, ofrecemos exclusividad territorial en ciertas zonas para proteger la inversión de nuestros franquiciados. Los detalles se discuten durante el proceso de evaluación según la ubicación.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resolvemos tus dudas más comunes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading font-semibold text-lg text-brand-darkGreen pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-brand-darkGreen transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">
            ¿Tienes más preguntas?
          </p>
          <a
            href="https://wa.me/573246830038"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Contáctanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

