'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { PUNTOS_VENTA_IMAGES, getPuntoVentaSrc } from '@/data/puntos-venta'

function HeroNetworkOverlay() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-brand-darkGreen"
      viewBox="0 0 1000 600"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="currentColor" opacity="0.45" />
        </pattern>
      </defs>
      <rect width="1000" height="600" fill="url(#hero-grid)" opacity="0.65" />
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.35" fill="none">
        <path d="M0 120 Q200 80 400 140 T800 100" className="hero-network-line" />
        <path d="M100 0 Q300 200 500 80 T900 160" className="hero-network-line hero-network-line-delay" />
        <path d="M0 320 Q250 280 480 340 T960 300" className="hero-network-line hero-network-line-delay-2" />
        <line x1="120" y1="108" x2="350" y2="252" />
        <line x1="650" y1="132" x2="880" y2="228" />
        <line x1="80" y1="432" x2="280" y2="330" />
        <line x1="720" y1="408" x2="920" y2="288" />
        <circle cx="120" cy="108" r="5" fill="currentColor" opacity="0.45" />
        <circle cx="350" cy="252" r="5" fill="currentColor" opacity="0.4" />
        <circle cx="650" cy="132" r="5" fill="currentColor" opacity="0.45" />
        <circle cx="880" cy="228" r="5" fill="currentColor" opacity="0.4" />
        <circle cx="280" cy="330" r="4" fill="currentColor" opacity="0.38" />
        <circle cx="720" cy="408" r="4" fill="currentColor" opacity="0.38" />
      </g>
    </svg>
  )
}

const MASK_STYLE: CSSProperties = {
  WebkitMaskImage:
    'radial-gradient(ellipse 58% 52% at 50% 44%, transparent 18%, rgba(0,0,0,0.35) 45%, black 72%)',
  maskImage:
    'radial-gradient(ellipse 58% 52% at 50% 44%, transparent 18%, rgba(0,0,0,0.35) 45%, black 72%)',
}

export default function HeroCollageBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] min-h-full overflow-hidden bg-white" aria-hidden>
      {/* Mosaico de todas las sedes — visible en bordes gracias a la máscara */}
      <motion.div
        className="absolute inset-0 opacity-70 sm:opacity-65 md:opacity-60"
        style={MASK_STYLE}
        initial={false}
        animate={reduceMotion ? undefined : { scale: [1, 1.015, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <div className="grid h-full min-h-[85vh] w-full grid-cols-3 gap-2 p-2 sm:grid-cols-4 sm:gap-2.5 sm:p-3 md:grid-cols-5 md:gap-3 lg:grid-cols-6">
          {PUNTOS_VENTA_IMAGES.map((filename, i) => (
            <motion.div
              key={filename}
              className="relative h-[4.5rem] overflow-hidden rounded-xl shadow-md ring-1 ring-white/60 sm:h-[5.25rem] md:h-[6rem] lg:h-[6.75rem]"
              initial={false}
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, i % 2 === 0 ? -6 : 6, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 8 + (i % 5),
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.15,
                    }
              }
            >
              <Image
                src={getPuntoVentaSrc(filename)}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 25vw, 180px"
                priority={i < 6}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Red de nodos */}
      <div className="absolute inset-0 opacity-50 mix-blend-multiply">
        <HeroNetworkOverlay />
      </div>

      {/* Cortina blanca suave: centro legible, bordes dejan ver el collage */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 62% 56% at 50% 44%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0.4) 68%, rgba(255,255,255,0.15) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/70" />
    </div>
  )
}
