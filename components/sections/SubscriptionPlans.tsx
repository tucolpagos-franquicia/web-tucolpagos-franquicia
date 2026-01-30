'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const plans = [
  {
    name: 'PLAN ESTÁNDAR',
    icon: 'work',
    price: '$6.960.000',
    investment: '+$3.000.000 de cupo en plataforma',
    duration: 'Suscripción 3 años',
    features: [
      'Plataforma Digital',
      'Acceso a nuestra plataforma',
      'Soporte y acompañamiento permanente',
      'Marketing & Branding',
      'Pendón publicitario',
      'Camiseta corporativa',
    ],
    exclusive: 'EXCLUSIVO: CLIENTES CON NEGOCIO',
    bgColor: 'bg-brand-darkGreen',
    popular: false,
    whatsappMessage: 'Hola, estoy interesado en el PLAN ESTÁNDAR de TuColpagos por $6.960.000. Me gustaría recibir más información.',
  },
  {
    name: 'PLAN EMPRENDEDOR',
    icon: 'rocket_launch',
    price: '$11.960.000',
    investment: '+$5.000.000 de cupo en plataforma',
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
    bgColor: 'bg-brand-orange',
    popular: true,
    whatsappMessage: 'Hola, estoy interesado en el PLAN EMPRENDEDOR de TuColpagos por $11.960.000. Me gustaría recibir más información.',
  },
  {
    name: 'PLAN EMPRESARIAL',
    icon: 'business',
    price: '$16.960.000',
    investment: '+$7.000.000 de cupo en plataforma',
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
    bgColor: 'bg-brand-darkGreen',
    popular: false,
    whatsappMessage: 'Hola, estoy interesado en el PLAN EMPRESARIAL de TuColpagos por $16.960.000. Me gustaría recibir más información.',
  },
]

export default function SubscriptionPlans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappNumber = '573054477618'

  return (
    <section id="planes" ref={ref} className="section-padding relative">
      <NetworkPattern />
      <div className="container-custom relative z-10 pt-8">
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
          <p className="text-lg md:text-xl text-brand-darkGreen font-semibold max-w-3xl mx-auto">
            Suscripción de 3 años con un solo pago inicial • Sin pagos mensuales adicionales
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} p-6 rounded-2xl text-white shadow-2xl relative ${
                plan.popular ? 'ring-4 ring-brand-yellow ring-offset-4 pt-12' : ''
              }`}
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-brand-yellow text-brand-darkGreen text-[10px] sm:text-xs font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xl border-2 border-white/50 uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-xs sm:text-sm">star</span>
                    <span>MÁS POPULAR</span>
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2 relative z-10 mt-6 sm:mt-4">
                <span className="material-symbols-outlined text-4xl drop-shadow-lg">{plan.icon}</span>
                <span>{plan.name}</span>
              </h3>
              <div className="text-4xl font-bold mb-2 relative z-10 drop-shadow-md">{plan.price}</div>
              <div className="text-sm mb-4 opacity-90 relative z-10 font-bold">{plan.investment}</div>
              <div className="text-sm font-semibold mb-4 border-t border-white/30 pt-4 relative z-10">
                {plan.duration}
              </div>
              <ul className="space-y-2.5 text-sm mb-4 relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-lg font-bold">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.exclusive && (
                <div className="bg-white/25 backdrop-blur-sm text-xs font-bold px-4 py-2.5 rounded-lg mt-4 mb-4 border border-white/30 relative z-10">
                  {plan.exclusive}
                </div>
              )}
              <a
                href="https://link.mercadopago.com.co/tucolpagos"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-brand-darkGreen px-6 py-3.5 rounded-xl font-bold text-center hover:bg-gray-50 transition-all duration-300 mt-4 shadow-lg hover:shadow-xl relative z-10 transform hover:scale-[1.02]"
              >
                Paga Aquí
              </a>
            </div>
          ))}
        </MobileCarousel>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${plan.bgColor} p-8 rounded-2xl text-white relative flex flex-col transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                plan.popular ? 'ring-4 ring-brand-yellow ring-offset-4 scale-105 pt-16 mt-6' : ''
              }`}
              style={{
                boxShadow: '0 25px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-brand-yellow text-brand-darkGreen text-xs font-black px-4 py-2.5 rounded-full shadow-2xl border-2 border-white/50 uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span>MÁS POPULAR</span>
                  </div>
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3 relative z-10 mt-4">
                <span className="material-symbols-outlined text-5xl md:text-6xl drop-shadow-lg">{plan.icon}</span>
                <span className="drop-shadow-md">{plan.name}</span>
              </h3>
              <div className="text-4xl md:text-5xl font-bold mb-3 relative z-10 drop-shadow-lg">{plan.price}</div>
              <div className="text-sm mb-5 opacity-95 relative z-10 font-bold">{plan.investment}</div>
              <div className="text-base font-semibold mb-6 border-t border-white/30 pt-5 relative z-10">
                {plan.duration}
              </div>
              <ul className="space-y-3.5 text-sm mb-6 flex-grow relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="mr-3 text-xl font-bold group-hover:scale-110 transition-transform">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.exclusive && (
                <div className="bg-white/25 backdrop-blur-sm text-xs font-bold px-5 py-3 rounded-xl mt-4 mb-4 border border-white/30 relative z-10 shadow-lg">
                  {plan.exclusive}
                </div>
              )}
              <a
                href="https://link.mercadopago.com.co/tucolpagos"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-brand-darkGreen px-6 py-4 rounded-xl font-bold text-center hover:bg-gray-50 transition-all duration-300 mt-auto shadow-xl hover:shadow-2xl relative z-10 transform hover:scale-[1.03]"
              >
                Paga Aquí
              </a>
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
