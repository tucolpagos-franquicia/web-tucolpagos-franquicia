'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'

const plans = [
  {
    name: 'PLAN ESTÁNDAR',
    icon: 'work',
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
    bgColor: 'bg-brand-darkGreen',
    textColor: 'text-white',
    buttonColor: 'bg-white hover:bg-gray-100',
    buttonTextColor: 'text-brand-darkGreen',
    popular: false,
    whatsappMessage: 'Hola, estoy interesado en el PLAN ESTÁNDAR de TuColpagos por $3.000.000. Me gustaría recibir más información.',
  },
  {
    name: 'PLAN EMPRENDEDOR',
    icon: 'rocket_launch',
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
    bgColor: 'bg-brand-orange',
    textColor: 'text-white',
    buttonColor: 'bg-white hover:bg-gray-100',
    buttonTextColor: 'text-brand-orange',
    popular: true,
    whatsappMessage: 'Hola, estoy interesado en el PLAN EMPRENDEDOR de TuColpagos por $6.000.000. Me gustaría recibir más información.',
  },
  {
    name: 'PLAN EMPRESARIAL',
    icon: 'apartment',
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
    bgColor: 'bg-brand-darkGreen',
    textColor: 'text-white',
    buttonColor: 'bg-white hover:bg-gray-100',
    buttonTextColor: 'text-brand-darkGreen',
    popular: false,
    whatsappMessage: 'Hola, estoy interesado en el PLAN EMPRESARIAL de TuColpagos por $9.000.000. Me gustaría recibir más información.',
  },
]

export default function SubscriptionPlans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappNumber = '573054477618'

  return (
    <section id="planes" ref={ref} className="section-padding relative overflow-hidden">
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
          <p className="text-lg md:text-xl text-brand-darkGreen font-semibold max-w-3xl mx-auto">
            Suscripción de 3 años con un solo pago inicial • Sin pagos mensuales adicionales
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8 pt-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} ${plan.textColor} p-6 rounded-2xl shadow-xl relative ${
                plan.popular ? 'mt-6' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                    <span className="text-yellow-300">⭐</span>
                    MÁS POPULAR
                  </div>
                </div>
              )}
              <h3 className={`text-2xl font-black mb-3 flex items-center justify-center gap-3 ${plan.textColor}`}>
                <span 
                  className="material-symbols-outlined"
                  style={{ 
                    fontSize: '36px', 
                    color: '#ffffff',
                    lineHeight: '1'
                  }}
                >
                  {plan.icon}
                </span>
                <span>{plan.name}</span>
              </h3>
              <div className={`text-4xl font-bold mb-2 ${plan.textColor}`}>{plan.price}</div>
              <div className={`text-sm mb-4 ${plan.textColor} opacity-90`}>{plan.investment}</div>
              <div className={`text-sm font-semibold mb-4 border-t border-white/30 pt-4 ${plan.textColor}`}>
                {plan.duration}
              </div>
              <ul className="space-y-2.5 text-sm mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`mr-2 text-lg font-bold ${plan.textColor}`}>✓</span>
                    <span className={`leading-relaxed ${plan.textColor}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.exclusive && (
                <div className={`bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold px-4 py-2.5 rounded-lg mt-4 mb-4 ${plan.textColor}`}>
                  {plan.exclusive}
                </div>
              )}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full ${plan.buttonColor} ${plan.buttonTextColor || 'text-white'} px-6 py-3.5 rounded-xl font-bold text-center transition-all duration-300 mt-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
              >
                Paga Aquí
              </a>
            </div>
          ))}
        </MobileCarousel>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${plan.bgColor} ${plan.textColor} p-8 rounded-2xl relative flex flex-col transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                plan.popular ? 'mt-8' : ''
              }`}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold px-7 py-2.5 rounded-full shadow-xl uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
                    <span className="text-yellow-300 text-lg">⭐</span>
                    MÁS POPULAR
                  </div>
                </div>
              )}
              <h3 className={`text-2xl md:text-3xl font-black mb-4 flex items-center justify-center gap-3 relative z-10 ${plan.textColor}`}>
                <span 
                  className="material-symbols-outlined"
                  style={{ 
                    fontSize: '52px', 
                    color: '#ffffff',
                    lineHeight: '1'
                  }}
                >
                  {plan.icon}
                </span>
                <span>{plan.name}</span>
              </h3>
              <div className={`text-4xl md:text-5xl font-bold mb-3 relative z-10 ${plan.textColor}`}>{plan.price}</div>
              <div className={`text-sm mb-5 relative z-10 font-medium ${plan.textColor} opacity-90`}>{plan.investment}</div>
              <div className={`text-base font-semibold mb-6 border-t border-white/30 pt-5 relative z-10 ${plan.textColor}`}>
                {plan.duration}
              </div>
              <ul className="space-y-3.5 text-sm mb-6 flex-grow relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className={`mr-3 text-xl font-bold group-hover:scale-110 transition-transform ${plan.textColor}`}>✓</span>
                    <span className={`leading-relaxed ${plan.textColor}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.exclusive && (
                <div className={`bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold px-5 py-3 rounded-xl mt-4 mb-4 relative z-10 shadow-sm ${plan.textColor}`}>
                  {plan.exclusive}
                </div>
              )}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full ${plan.buttonColor} ${plan.buttonTextColor || 'text-white'} px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 mt-auto shadow-lg hover:shadow-xl relative z-10 transform hover:scale-[1.03]`}
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
