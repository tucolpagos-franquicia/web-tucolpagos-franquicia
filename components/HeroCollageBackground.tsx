'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { PUNTOS_VENTA_IMAGES, getPuntoVentaSrc } from '@/data/puntos-venta'

type CollageSlot = {
  imageIndex: number
  className: string
  rotate: number
  opacity: number
  floatDelay?: number
  hiddenOnMobile?: boolean
}

/** Posiciones periféricas para no tapar el texto central */
const COLLAGE_SLOTS: CollageSlot[] = [
  { imageIndex: 0, className: 'top-[4%] left-[2%]', rotate: -7, opacity: 0.32, floatDelay: 0 },
  { imageIndex: 1, className: 'top-[8%] right-[3%]', rotate: 5, opacity: 0.28, floatDelay: 0.4, hiddenOnMobile: true },
  { imageIndex: 2, className: 'top-[32%] left-[-2%] sm:left-[1%]', rotate: -4, opacity: 0.26, floatDelay: 0.8 },
  { imageIndex: 3, className: 'top-[28%] right-[-1%] sm:right-[2%]', rotate: 6, opacity: 0.3, floatDelay: 1.2 },
  { imageIndex: 4, className: 'bottom-[28%] left-[1%]', rotate: 4, opacity: 0.27, floatDelay: 0.2 },
  { imageIndex: 5, className: 'bottom-[32%] right-[2%]', rotate: -5, opacity: 0.29, floatDelay: 0.6, hiddenOnMobile: true },
  { imageIndex: 6, className: 'bottom-[12%] left-[8%]', rotate: -3, opacity: 0.24, floatDelay: 1 },
  { imageIndex: 7, className: 'bottom-[10%] right-[6%]', rotate: 7, opacity: 0.26, floatDelay: 1.4 },
  { imageIndex: 8, className: 'top-[18%] left-[18%]', rotate: 3, opacity: 0.2, floatDelay: 0.5, hiddenOnMobile: true },
  { imageIndex: 9, className: 'top-[20%] right-[16%]', rotate: -6, opacity: 0.22, floatDelay: 0.9, hiddenOnMobile: true },
  { imageIndex: 10, className: 'bottom-[20%] left-[22%]', rotate: 5, opacity: 0.2, floatDelay: 1.1, hiddenOnMobile: true },
  { imageIndex: 11, className: 'bottom-[18%] right-[20%]', rotate: -4, opacity: 0.21, floatDelay: 1.3, hiddenOnMobile: true },
  { imageIndex: 12, className: 'top-[42%] left-[6%]', rotate: 2, opacity: 0.18, floatDelay: 0.3, hiddenOnMobile: true },
  { imageIndex: 13, className: 'top-[44%] right-[5%]', rotate: -3, opacity: 0.19, floatDelay: 0.7, hiddenOnMobile: true },
  { imageIndex: 14, className: 'bottom-[38%] left-[14%]', rotate: -2, opacity: 0.17, floatDelay: 1.5, hiddenOnMobile: true },
  { imageIndex: 15, className: 'bottom-[36%] right-[12%]', rotate: 4, opacity: 0.18, floatDelay: 1.6, hiddenOnMobile: true },
  { imageIndex: 16, className: 'top-[52%] left-[3%]', rotate: 6, opacity: 0.16, floatDelay: 0.6, hiddenOnMobile: true },
  { imageIndex: 17, className: 'top-[50%] right-[4%]', rotate: -5, opacity: 0.17, floatDelay: 1.2, hiddenOnMobile: true },
]

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
          <circle cx="2" cy="2" r="1.2" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="1000" height="600" fill="url(#hero-grid)" opacity="0.5" />
      <g stroke="currentColor" strokeWidth="1" opacity="0.22" fill="none">
        <path d="M0 120 Q200 80 400 140 T800 100" className="hero-network-line" />
        <path d="M100 0 Q300 200 500 80 T900 160" className="hero-network-line hero-network-line-delay" />
        <path d="M0 320 Q250 280 480 340 T960 300" className="hero-network-line hero-network-line-delay-2" />
        <line x1="120" y1="108" x2="350" y2="252" />
        <line x1="650" y1="132" x2="880" y2="228" />
        <line x1="80" y1="432" x2="280" y2="330" />
        <line x1="720" y1="408" x2="920" y2="288" />
        <circle cx="120" cy="108" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="350" cy="252" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="650" cy="132" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="880" cy="228" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="280" cy="330" r="3" fill="currentColor" opacity="0.28" />
        <circle cx="720" cy="408" r="3" fill="currentColor" opacity="0.28" />
      </g>
    </svg>
  )
}

export default function HeroCollageBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white" aria-hidden>
      {/* Collage de corresponsales */}
      <div className="absolute inset-0">
        {COLLAGE_SLOTS.map((slot, i) => {
          const filename = PUNTOS_VENTA_IMAGES[slot.imageIndex % PUNTOS_VENTA_IMAGES.length]
          const visibility = slot.hiddenOnMobile ? 'hidden sm:block' : 'block'

          return (
            <motion.div
              key={`${filename}-${i}`}
              className={`absolute aspect-[4/3] w-[26vw] max-w-[175px] sm:max-w-[200px] md:max-w-[220px] ${slot.className} ${visibility}`}
              style={{
                rotate: `${slot.rotate}deg`,
                opacity: slot.opacity,
              }}
              initial={false}
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -10, 0], scale: [1, 1.02, 1] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 7 + (i % 4),
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: slot.floatDelay ?? 0,
                    }
              }
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/80">
                <Image
                  src={getPuntoVentaSrc(filename)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 30vw, 200px"
                  priority={i < 4}
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Red / nodos */}
      <HeroNetworkOverlay />

      {/* Cortina blanca + vignette central para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/88 to-white/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 42%, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.55) 70%, rgba(255,255,255,0.25) 100%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
