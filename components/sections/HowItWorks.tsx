'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'

// Componentes de iconos SVG personalizados
const StepIcon = ({ iconType, className = "w-12 h-12" }: { iconType: string; className?: string }) => {
  const baseProps = {
    viewBox: "0 0 24 24" as const,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 2 as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }
  
  switch (iconType) {
    case 'form':
      return (
        <svg {...baseProps} className={`${className} text-brand-orange`}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    case 'check':
      return (
        <svg {...baseProps} className={`${className} text-brand-green`}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    case 'school':
      return (
        <svg {...baseProps} className={`${className} text-brand-yellow`}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    case 'key':
      return (
        <svg {...baseProps} className={`${className} text-brand-darkGreen`}>
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      )
    case 'money':
      return (
        <svg {...baseProps} className={`${className} text-brand-orange`}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    default:
      return null
  }
}

const steps = [
  {
    number: '01',
    title: 'Solicita Información',
    description: 'Completa el formulario o contáctanos directamente. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.',
    iconType: 'form',
    color: 'text-brand-orange',
  },
  {
    number: '02',
    title: 'Evaluación',
    description: 'Revisamos tu perfil y ubicación para asegurar que cumples con los requisitos y que hay oportunidad en tu zona.',
    iconType: 'check',
    color: 'text-brand-green',
  },
  {
    number: '03',
    title: 'Capacitación',
    description: 'Recibe capacitación completa sobre la plataforma, procesos comerciales y mejores prácticas para el éxito.',
    iconType: 'school',
    color: 'text-brand-yellow',
  },
  {
    number: '04',
    title: 'Credenciales y Activación',
    description: 'Obtén tus credenciales de acceso, configura tu punto de venta y comienza a operar con nuestro respaldo.',
    iconType: 'key',
    color: 'text-brand-darkGreen',
  },
  {
    number: '05',
    title: 'Genera Ingresos',
    description: 'Comienza a atender clientes y generar comisiones desde el primer día. Monitorea todo desde tu dashboard.',
    iconType: 'money',
    color: 'text-brand-orange',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkGreen mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Proceso simple y rápido para comenzar tu franquicia en 5 pasos
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Número y Icono */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="w-20 h-20 bg-brand-darkGreen rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg relative z-10">
                        {step.number}
                      </div>
                      <div className="hidden lg:block">
                        <StepIcon iconType={step.iconType} className="w-16 h-16" />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 lg:p-8">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <StepIcon iconType={step.iconType} className="w-12 h-12" />
                        <h3 className="font-heading text-2xl font-bold text-brand-darkGreen">
                          {step.title}
                        </h3>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-brand-darkGreen mb-3 hidden lg:block">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#contacto" className="btn-primary inline-block">
            Comenzar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

