'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

const faqs = [
  {
    question: '¿Qué incluye la suscripción de 3 años?',
    answer: 'La suscripción de 3 años incluye acceso completo a la plataforma digital, soporte y acompañamiento permanente, marketing y branding, y todos los beneficios de ser aliado TuColpagos durante todo el período. Con un solo pago inicial tendrás acceso a todos los servicios.',
  },
  {
    question: '¿Cuál es la inversión inicial requerida?',
    answer: 'Ofrecemos 3 planes: Plan Estándar ($3.000.000), Plan Emprendedor ($6.000.000) y Plan Empresarial ($9.000.000). Todos incluyen suscripción de 3 años con un solo pago inicial. El plan varía según el equipamiento y servicios adicionales que necesites.',
  },
  {
    question: '¿Necesito experiencia previa en el sector financiero?',
    answer: 'No es necesario tener experiencia previa. Ofrecemos capacitación completa para que puedas operar exitosamente desde el primer día. Además, nuestro equipo de soporte está disponible 24/7 para ayudarte.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de activación?',
    answer: 'El proceso completo de activación puede tomar entre 2 a 4 semanas, dependiendo de la documentación y la ubicación. Una vez completados los requisitos, te capacitamos y activamos tu punto de venta.',
  },
  {
    question: '¿Qué soporte técnico recibo?',
    answer: 'Recibes soporte técnico 24/7, capacitación continua y acompañamiento constante de nuestro equipo de expertos. Además, tienes acceso a nuestra plataforma digital con dashboard en tiempo real.',
  },
  {
    question: '¿Puedo tener un negocio existente y agregar TuColpagos?',
    answer: 'Sí, el Plan Estándar está diseñado especialmente para negocios existentes. Puedes integrar nuestra plataforma de pagos y recaudos a tu negocio actual, multiplicando tus ingresos sin necesidad de un punto de venta exclusivo.',
  },
  {
    question: '¿Qué bancos están disponibles en la plataforma?',
    answer: 'Contamos con más de 25 bancos en nuestro portafolio, incluyendo Scotiabank, Colpatria, Banco Caja Social, Davivienda, Banco Agrario, Banco Popular, Banco de Bogotá, Banco AV Villas, Banco de Occidente y muchos más.',
  },
  {
    question: '¿Hay verificación en centrales de riesgo?',
    answer: 'No, no consideramos reportes en centrales de riesgo. Solo necesitas cumplir con los requisitos básicos: cédula de ciudadanía, RUT actualizado, certificado de Cámara de Comercio y recibo de servicio público reciente.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" ref={ref} className="section-padding relative overflow-hidden">
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
            Resolvemos tus dudas más comunes sobre la suscripción y el modelo de negocio
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
                <span className="text-brand-darkGreen text-2xl">{openIndex === index ? '−' : '+'}</span>
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
