'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  PUNTOS_VENTA_IMAGES,
  formatPuntoVentaLabel,
  getPuntoVentaSrc,
  type PuntoVentaImage,
} from '@/data/puntos-venta'

const AUTO_PLAY_MS = 4000
const IMAGES = [...PUNTOS_VENTA_IMAGES]

interface GalleryLightboxProps {
  isOpen: boolean
  selectedIndex: number
  onClose: () => void
  onSelect: (index: number) => void
}

function GalleryLightbox({ isOpen, selectedIndex, onClose, onSelect }: GalleryLightboxProps) {
  const [zoomed, setZoomed] = useState(false)
  const count = IMAGES.length

  const goToPrevious = useCallback(() => {
    onSelect(selectedIndex === 0 ? count - 1 : selectedIndex - 1)
    setZoomed(false)
  }, [selectedIndex, count, onSelect])

  const goToNext = useCallback(() => {
    onSelect(selectedIndex === count - 1 ? 0 : selectedIndex + 1)
    setZoomed(false)
  }, [selectedIndex, count, onSelect])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goToPrevious()
      if (event.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, goToPrevious, goToNext])

  if (!isOpen) return null

  const current = IMAGES[selectedIndex]
  const currentLabel = formatPuntoVentaLabel(current)

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de corresponsales"
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:max-h-[88vh] lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-lg text-white transition-colors hover:bg-black"
          aria-label="Cerrar galería"
        >
          ✕
        </button>

        <div className="relative min-h-[50vh] flex-1 bg-gray-950 sm:min-h-[55vh] lg:min-h-[520px]">
          <button
            type="button"
            onClick={() => setZoomed((z) => !z)}
            className={`relative h-full min-h-[50vh] w-full sm:min-h-[55vh] lg:min-h-[520px] ${
              zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            aria-label={zoomed ? 'Reducir imagen' : 'Ampliar imagen'}
          >
            <div
              className={`relative h-full w-full transition-transform duration-300 ease-out ${
                zoomed ? 'scale-[1.35]' : 'scale-100'
              }`}
            >
              <Image
                src={getPuntoVentaSrc(current)}
                alt={`Corresponsal TuColpagos — ${currentLabel}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 75vw"
                priority
              />
            </div>
          </button>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:left-4"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:right-4"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 z-20 max-w-[90%] -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-center text-sm text-white backdrop-blur-sm">
            {currentLabel} · {selectedIndex + 1}/{count}
          </div>
        </div>

        <div className="flex max-h-[38vh] flex-col border-t border-gray-200 bg-white p-4 lg:max-h-none lg:w-52 lg:border-l lg:border-t-0 xl:w-60">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-brand-darkGreen">Todas las sedes</p>
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              className="shrink-0 rounded-md bg-brand-darkGreen px-3 py-1.5 text-xs text-white transition-colors hover:bg-brand-darkerGreen"
            >
              {zoomed ? 'Ajustar' : 'Zoom'}
            </button>
          </div>
          <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-1 lg:grid-cols-2">
            {IMAGES.map((punto, index) => (
              <button
                key={punto}
                type="button"
                onClick={() => {
                  onSelect(index)
                  setZoomed(false)
                }}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                  selectedIndex === index
                    ? 'border-brand-darkGreen ring-2 ring-brand-darkGreen/30'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
                aria-label={`Ver imagen ${index + 1}`}
                aria-current={selectedIndex === index}
              >
                <Image
                  src={getPuntoVentaSrc(punto)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CorresponsalesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeDot, setActiveDot] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const count = IMAGES.length

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el || !el.children[index]) return
    const child = el.children[index] as HTMLElement
    const offset = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2
    el.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' })
    setActiveDot(index)
  }, [])

  const scrollNext = useCallback(() => {
    const nextIndex = activeDot >= count - 1 ? 0 : activeDot + 1
    scrollToIndex(nextIndex)
  }, [activeDot, count, scrollToIndex])

  const scrollPrev = useCallback(() => {
    const prevIndex = activeDot <= 0 ? count - 1 : activeDot - 1
    scrollToIndex(prevIndex)
  }, [activeDot, count, scrollToIndex])

  useEffect(() => {
    if (isPaused || isGalleryOpen || count <= 1) return
    const id = setInterval(scrollNext, AUTO_PLAY_MS)
    return () => clearInterval(id)
  }, [isPaused, isGalleryOpen, count, scrollNext])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2
      let closest = 0
      let minDist = Infinity
      Array.from(el.children).forEach((child, i) => {
        const node = child as HTMLElement
        const childCenter = node.offsetLeft + node.offsetWidth / 2
        const dist = Math.abs(center - childCenter)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })
      setActiveDot(closest)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const openGallery = (index: number) => {
    setGalleryIndex(index)
    setIsGalleryOpen(true)
    setIsPaused(true)
  }

  return (
    <div className="relative rounded-3xl border border-brand-darkGreen/10 bg-gradient-to-b from-white via-white to-emerald-50/40 p-4 shadow-inner sm:p-6 md:p-8">
      <div className="mb-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <span className="mb-2 inline-block rounded-full bg-brand-darkGreen/10 px-4 py-1 text-sm font-semibold text-brand-darkGreen">
            +300 corresponsales en Colombia
          </span>
          <p className="max-w-xl text-sm text-gray-600 md:text-base">
            Carrusel automático con todos nuestros aliados. Haz clic en cualquier foto para verla en grande.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsPaused((p) => !p)}
          className="inline-flex items-center gap-2 rounded-full border border-brand-darkGreen/30 bg-white px-4 py-2 text-sm font-medium text-brand-darkGreen shadow-sm transition-colors hover:bg-brand-darkGreen/5"
          aria-pressed={isPaused}
          aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
        >
          <span className="material-symbols-outlined text-lg leading-none">
            {isPaused ? 'play_arrow' : 'pause'}
          </span>
          {isPaused ? 'Reanudar' : 'Pausar'}
        </button>
      </div>

      <div
        className="group relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-2 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent sm:w-12" />
        <div className="pointer-events-none absolute inset-y-2 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent sm:w-12" />

        <button
          type="button"
          onClick={scrollPrev}
          className="absolute -left-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-brand-darkGreen shadow-lg ring-1 ring-gray-200 transition-all hover:scale-105 hover:bg-brand-darkGreen hover:text-white sm:flex md:-left-3"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="absolute -right-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-brand-darkGreen shadow-lg ring-1 ring-gray-200 transition-all hover:scale-105 hover:bg-brand-darkGreen hover:text-white sm:flex md:-right-3"
          aria-label="Siguiente"
        >
          ›
        </button>

        <div
          ref={scrollRef}
          className="corresponsales-track flex gap-4 overflow-x-auto scroll-smooth px-1 pb-2 pt-1 scrollbar-hide snap-x snap-mandatory"
        >
          {IMAGES.map((punto, index) => (
            <CarouselCard
              key={punto}
              filename={punto}
              onOpen={() => openGallery(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeDot
                ? 'w-8 bg-brand-darkGreen'
                : 'w-2 bg-gray-300 hover:bg-brand-darkGreen/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            aria-current={index === activeDot}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        {count} sedes en galería · WebP 1200×900 px (4:3)
      </p>

      <GalleryLightbox
        isOpen={isGalleryOpen}
        selectedIndex={galleryIndex}
        onClose={() => {
          setIsGalleryOpen(false)
          setIsPaused(false)
        }}
        onSelect={setGalleryIndex}
      />
    </div>
  )
}

function CarouselCard({
  filename,
  onOpen,
}: {
  filename: PuntoVentaImage
  onOpen: () => void
}) {
  const label = formatPuntoVentaLabel(filename)

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className="corresponsales-slide group/card relative shrink-0 snap-center overflow-hidden rounded-2xl text-left shadow-lg ring-1 ring-gray-200/80 transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <Image
          src={getPuntoVentaSrc(filename)}
          alt={`Corresponsal TuColpagos — ${label}`}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 42vw, 280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-3 sm:p-4">
          <span className="text-sm font-semibold leading-tight text-white drop-shadow-md sm:text-base">
            {label}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-brand-darkGreen shadow-sm">
            <span className="material-symbols-outlined text-base leading-none">zoom_in</span>
            Ampliar
          </span>
        </div>
      </div>
    </motion.button>
  )
}
