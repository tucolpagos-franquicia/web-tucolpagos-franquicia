'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NetworkPattern from '@/components/NetworkPattern'
import DecorativeCurves from '@/components/DecorativeCurves'
import Image from 'next/image'
import MobileCarousel from '@/components/MobileCarousel'

const puntosVenta = [
  'puntos-venta (1).jpg',
  'puntos-venta (2).jpg',
  'puntos-venta (3).jpg',
  'puntos-venta (4).jpg',
  'puntos-venta (5).jpg',
  'puntos-venta (6).jpg',
  'puntos-venta (7).jpg',
  'puntos-venta (8).jpg',
  'puntos-venta (9).jpg',
  'puntos-venta (10).jpg',
]

const stats = [
  { number: '+300', label: 'Oficinas en el Territorio Colombiano', bgColor: 'bg-brand-darkGreen', textColor: 'text-white' },
  { number: '+25', label: 'Bancos en Nuestro Portafolio', bgColor: 'bg-brand-orange', textColor: 'text-white' },
  { number: '8+', label: 'Años de Experiencia en Corresponsalía', bgColor: 'bg-brand-darkGreen', textColor: 'text-white' },
]

const opportunities = [
  {
    title: 'Oportunidad de Expandir tu Negocio',
    description: 'Multiplica tus ingresos al integrar nuestra plataforma de pagos y recaudos a tu negocio existente.',
  },
  {
    title: 'Comercialización de Productos',
    description: 'Ofrece productos físicos y financieros, ampliando tu catálogo de servicios para tus clientes.',
  },
  {
    title: 'Plataforma Ágil y Segura',
    description: 'Tecnología de última generación con más de 8 años de experiencia en corresponsalía bancaria.',
  },
]

export default function TheOpportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const previewImagesMobile = puntosVenta.slice(0, 6)
  const previewImagesDesktop = puntosVenta.slice(0, 5)

  const openGallery = (index: number) => {
    setSelectedImageIndex(index)
    setZoomed(false)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setZoomed(false)
  }

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? puntosVenta.length - 1 : prev - 1))
    setZoomed(false)
  }

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === puntosVenta.length - 1 ? 0 : prev + 1))
    setZoomed(false)
  }

  useEffect(() => {
    if (!isGalleryOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery()
      if (event.key === 'ArrowLeft') goToPrevious()
      if (event.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isGalleryOpen])

  return (
    <section id="oportunidad" ref={ref} className="section-padding relative">
      <NetworkPattern />
      <DecorativeCurves />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-darkGreen">
            Nuestra Presencia
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            ¡Contamos con una plataforma ÁGIL Y SEGURA!
          </p>
        </motion.div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${stat.bgColor} ${stat.textColor} p-6 rounded-xl text-center shadow-lg`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.textColor}`}>{stat.number}</div>
              <div className={`text-lg md:text-xl ${stat.textColor}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Oportunidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-darkGreen">
            Nuestros corresponsales TuColpagos te ofrecen:
          </h3>
        </motion.div>

        {/* Carrusel móvil: 3 elementos "Nuestros corresponsales te ofrecen" */}
        <MobileCarousel itemsPerView={1.2} className="md:hidden mb-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="card text-center min-h-[200px] flex flex-col">
              <h4 className="text-lg font-bold mb-3 text-brand-darkGreen">{opportunity.title}</h4>
              <p className="text-gray-700 text-sm flex-grow">{opportunity.description}</p>
            </div>
          ))}
        </MobileCarousel>

        {/* Grid desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card text-center"
            >
              <h4 className="text-xl font-bold mb-3 text-brand-darkGreen">{opportunity.title}</h4>
              <p className="text-gray-700">{opportunity.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            El mercado de servicios transaccionales en Colombia está en constante crecimiento. Únete a la revolución de la inclusión financiera.
          </p>
        </motion.div>

        {/* Galería de Puntos de Venta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-brand-darkGreen">
            Algunos de Nuestros Aliados
          </h3>
          
          {/* Mobile Carousel */}
          <MobileCarousel itemsPerView={1.2} className="md:hidden">
            {previewImagesMobile.map((punto, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openGallery(index)}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg w-full text-left"
              >
                <Image
                  src={`/puntos-venta/${punto}`}
                  alt={`Punto de venta TuColpagos ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {index === 5 ? (
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                    <span className="bg-white/95 text-brand-darkGreen px-4 py-2 rounded-lg font-bold text-sm">
                      Ver más
                    </span>
                  </div>
                ) : null}
              </button>
            ))}
          </MobileCarousel>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {previewImagesDesktop.map((punto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openGallery(index === 4 ? 5 : index)}
              >
                <Image
                  src={`/puntos-venta/${punto}`}
                  alt={`Punto de venta TuColpagos ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {index === 4 ? (
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                    <span className="bg-white/95 text-brand-darkGreen px-4 py-2 rounded-lg font-bold text-sm">
                      Ver más
                    </span>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {isGalleryOpen ? (
        <div className="fixed inset-0 z-[90] bg-black/85 p-4 md:p-8 flex items-center justify-center">
          <div className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              type="button"
              onClick={closeGallery}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Cerrar galería"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] h-full">
              <div className="relative bg-gray-100 min-h-[280px] sm:min-h-[380px] lg:min-h-[520px] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setZoomed((prev) => !prev)}
                  className={`absolute inset-0 w-full h-full ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                  aria-label={zoomed ? 'Reducir zoom' : 'Ampliar zoom'}
                >
                  <div className={`relative w-full h-full transition-transform duration-300 ${zoomed ? 'scale-150' : 'scale-100'}`}>
                    <Image
                      src={`/puntos-venta/${puntosVenta[selectedImageIndex]}`}
                      alt={`Punto de venta TuColpagos ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/75 transition-colors"
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/75 transition-colors"
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>
              </div>

              <div className="p-4 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-brand-darkGreen">
                    Imagen {selectedImageIndex + 1} de {puntosVenta.length}
                  </p>
                  <button
                    type="button"
                    onClick={() => setZoomed((prev) => !prev)}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-md bg-brand-darkGreen text-white hover:bg-brand-darkerGreen transition-colors"
                  >
                    {zoomed ? 'Reducir' : 'Zoom'}
                  </button>
                </div>

                <div className="grid grid-cols-5 lg:grid-cols-2 gap-2 max-h-[220px] lg:max-h-[460px] overflow-y-auto pr-1">
                  {puntosVenta.map((punto, index) => (
                    <button
                      key={punto}
                      type="button"
                      onClick={() => {
                        setSelectedImageIndex(index)
                        setZoomed(false)
                      }}
                      className={`relative h-16 lg:h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index ? 'border-brand-darkGreen' : 'border-transparent'
                      }`}
                      aria-label={`Seleccionar imagen ${index + 1}`}
                    >
                      <Image
                        src={`/puntos-venta/${punto}`}
                        alt={`Miniatura punto de venta ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
