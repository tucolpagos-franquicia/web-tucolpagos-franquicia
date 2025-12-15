'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const plans = [
  {
    name: 'PLAN ESTÁNDAR',
    price: '$3.000.000',
    investment: 'Inversión inicial en COP',
    duration: 'Suscripción 3 años',
    features: [
      'Plataforma Digital',
      'Acceso a nuestra plataforma',
      'Soporte y acompañamiento permanente',
      'Marketing & Branding',
      'Pendón publicitario',
      'Camiseta corporativa',
    ],
    exclusive: 'EXCLUSIVO: CUENTES CON NEGOCIO',
    gradient: 'from-brand-yellow to-brand-orange',
    popular: false,
  },
  {
    name: 'PLAN EMPRENDEDOR',
    price: '$6.000.000',
    investment: 'Inversión completa en COP',
    duration: 'Suscripción 3 años',
    features: [
      'Plataforma Digital',
      'Acceso a nuestra plataforma',
      'Soporte y acompañamiento permanente',
      'Equipamiento Tecnológico',
      'Cámara de vigilancia con IA',
      'Pistola láser',
      'Impresora térmica',
      'Batería UPS',
      'Marketing & Branding',
      'Aviso sencillo acrílico',
      'Pendón publicitario',
      'Camiseta corporativa',
    ],
    exclusive: null,
    gradient: 'from-brand-orange to-brand-green',
    popular: true,
  },
  {
    name: 'PLAN EMPRESARIAL',
    price: '$9.000.000',
    investment: 'Máximo equipamiento COP',
    duration: 'Suscripción 3 años',
    features: [
      'Plataforma Digital',
      'Acceso a nuestra plataforma',
      'Soporte y acompañamiento permanente',
      'Equipamiento Tecnológico Premium',
      'Cámara de vigilancia con IA',
      'Computador todo en uno',
      'Pistola láser',
      'Impresora térmica',
      'Batería UPS',
      'Infraestructura & Diseño',
      'Cabina sencilla de 2x1.5 metros',
      'Vinilo de piso',
      'Microperforado',
      'Marketing & Branding',
      'Aviso luminoso',
      'Pendón publicitario',
      'Camisetas corporativas (2 und)',
    ],
    exclusive: null,
    gradient: 'from-brand-green to-brand-darkGreen',
    popular: false,
  },
]

export default function SubscriptionPlans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="planes" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Unidades de Negocio
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-2">
            Elige el plan perfecto para tu punto de recaudo
          </p>
          <p className="text-lg md:text-xl text-brand-darkGreen font-semibold">
            Suscripción de 3 años con un solo pago inicial
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${plan.gradient} p-6 rounded-xl text-white shadow-lg ${
                plan.popular ? 'ring-4 ring-brand-yellow ring-offset-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-brand-yellow text-brand-darkGreen text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MÁS POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-2">{plan.price}</div>
              <div className="text-sm mb-4 opacity-90">{plan.investment}</div>
              <div className="text-sm font-semibold mb-4 border-t border-white/30 pt-4">
                {plan.duration}
              </div>
              <ul className="space-y-2 text-sm mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.exclusive && (
                <div className="bg-white/20 text-xs font-bold px-3 py-2 rounded mt-4">
                  {plan.exclusive}
                </div>
              )}
            </div>
          ))}
        </MobileCarousel>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${plan.gradient} p-8 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                plan.popular ? 'ring-4 ring-brand-yellow ring-offset-4 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-brand-yellow text-brand-darkGreen text-xs font-bold px-4 py-2 rounded-full inline-block mb-4">
                  MÁS POPULAR
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{plan.name}</h3>
              <div className="text-4xl md:text-5xl font-bold mb-2">{plan.price}</div>
              <div className="text-sm mb-4 opacity-90">{plan.investment}</div>
              <div className="text-base font-semibold mb-6 border-t border-white/30 pt-4">
                {plan.duration}
              </div>
              <ul className="space-y-3 text-sm mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.exclusive && (
                <div className="bg-white/20 text-xs font-bold px-4 py-3 rounded mt-4">
                  {plan.exclusive}
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
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            * Todos los planes incluyen suscripción por 3 años. Con un solo pago inicial tendrás acceso a todos los beneficios de ser aliado TuColpagos durante todo el período.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

