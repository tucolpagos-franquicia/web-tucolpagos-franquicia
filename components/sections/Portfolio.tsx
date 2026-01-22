'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import MobileCarousel from '@/components/MobileCarousel'
import Image from 'next/image'

// Lista de bancos disponibles
const bancos = [
  'bancolombia',
  'davivienda',
  'banco-agrario',
  'banco-av-villas',
  'banco-caja-social',
  'banco-de-bogota',
  'banco-occidente',
  'banco-popular',
  'banco-falabella',
  'bancomeva',
  'bbva',
  'bold',
  'colpatria',
  'confia-coop',
  'nu',
]

// Lista de billeteras disponibles
const billeteras = [
  'nequi',
  'daviplata',
  'movii',
  'dale',
]

const portfolioItems = [
  {
    title: 'BRE-B',
    description: 'Olvídate de las largas esperas y los trámites complicados. BRE-B cuenta con todos los bancos y billeteras digitales a nivel nacional. Puedes enviar o recibir dinero de cualquier banco o billetera de manera inmediata. Solo necesitas la llave registrada.',
    gradient: 'from-brand-yellow to-brand-orange',
    highlight: 'NUEVO',
  },
  {
    title: 'Corresponsalía Bancaria',
    description: 'El modelo de corresponsales digitales ha contribuido en gran medida a la inclusión financiera, al permitir la cobertura de los principales bancos en nuestro país. Más de 25 bancos disponibles.',
    gradient: 'from-brand-orange to-brand-green',
    highlight: null,
  },
  {
    title: 'Recargas y Paquetes',
    description: 'Por muy inteligente que sea tu celular, siempre necesitará de minutos, datos y paquetes todo incluido. Recarga de minutos, datos y paquetes para todas las operadoras móviles.',
    gradient: 'from-brand-green to-brand-darkGreen',
    highlight: null,
  },
  {
    title: 'Apuestas Deportivas',
    description: 'En nuestros puntos aliados podrás hacer recargas de las principales casas de apuestas deportivas online y al instante. Depósitos y retiros para plataformas de apuestas deportivas autorizadas.',
    gradient: 'from-brand-yellow to-brand-orange',
    highlight: null,
  },
  {
    title: 'Pines de Streaming & Entretenimiento',
    description: 'Olvídate de las tarjetas de crédito y obtén nuestros pines prepago para todo tipo de entretenimiento. Netflix, HBO, Prime Video, Office 365, Datacrédito, Free Fire, Payvalida, SimpleTV, Movistar TV, Movilnet, PlayStation, Wii y más.',
    gradient: 'from-brand-orange to-brand-green',
    highlight: null,
  },
  {
    title: 'Giros Venezuela',
    description: 'Giros a Venezuela con la mejor tasa. Transacciones rápidas, seguras y directas a bancos venezolanos. Tasa competitiva y transparente, transferencia segura en minutos, sin consulta en centrales de riesgo.',
    gradient: 'from-brand-green to-brand-darkGreen',
    highlight: null,
  },
]

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="portafolio" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <NetworkPattern />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Nuestro Portafolio
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Soluciones ágiles y seguras para tu negocio. Más de 20,000 convenios disponibles para tus clientes
          </p>
        </motion.div>

        <MobileCarousel itemsPerView={1.2} className="md:hidden">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl text-white relative`}>
              {item.highlight && (
                <div className="absolute top-4 right-4 bg-white text-brand-darkGreen text-xs font-bold px-3 py-1 rounded-full">
                  {item.highlight}
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </MobileCarousel>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl text-white relative transform hover:scale-[1.03] transition-all duration-300 overflow-hidden`}
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {/* Efecto de brillo sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              {item.highlight && (
                <div className="absolute top-4 right-4 bg-white text-brand-darkGreen text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                  {item.highlight}
                </div>
              )}
              <h3 className="text-xl font-bold mb-3 relative z-10 drop-shadow-md">{item.title}</h3>
              <p className="text-sm leading-relaxed relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Sección completa de logos de bancos y billeteras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-brand-darkGreen">
            Nuestros Aliados Bancarios y Billeteras Digitales
          </h3>
          
          {/* Bancos */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-center mb-6 text-gray-700">Bancos</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {bancos.map((banco, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:-translate-y-1"
                >
                  <Image
                    src={`/bancos/${banco}.png`}
                    alt={banco.replace(/-/g, ' ')}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 w-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Billeteras */}
          <div>
            <h4 className="text-xl font-semibold text-center mb-6 text-gray-700">Billeteras Digitales</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {billeteras.map((billetera, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:-translate-y-1"
                >
                  <Image
                    src={`/billeteras/${billetera}.png`}
                    alt={billetera}
                    width={100}
                    height={100}
                    className="object-contain max-h-16 w-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
