'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { PUNTOS_VENTA_IMAGES, getPuntoVentaSrc } from '@/data/puntos-venta'

type CollagePiece = {
  imageIndex: number
  position: string
  size: string
  rotate: number
  opacity: number
}

/** Móvil: solo esquinas y laterales — nada detrás del texto central */
const MOBILE_COLLAGE: CollagePiece[] = [
  { imageIndex: 0, position: 'top-[0.5%] left-[-3%]', size: 'w-[36vw] max-w-[132px]', rotate: -10, opacity: 0.58 },
  { imageIndex: 1, position: 'top-[1%] right-[-3%]', size: 'w-[34vw] max-w-[126px]', rotate: 9, opacity: 0.56 },
  { imageIndex: 4, position: 'left-[-5%] top-[58%]', size: 'w-[30vw] max-w-[112px]', rotate: -6, opacity: 0.5 },
  { imageIndex: 5, position: 'right-[-5%] top-[56%]', size: 'w-[30vw] max-w-[110px]', rotate: 7, opacity: 0.5 },
  { imageIndex: 10, position: 'bottom-[1%] left-[-2%]', size: 'w-[35vw] max-w-[130px]', rotate: 5, opacity: 0.57 },
  { imageIndex: 11, position: 'bottom-[0.5%] right-[-2%]', size: 'w-[34vw] max-w-[125px]', rotate: -8, opacity: 0.56 },
]

/** Escritorio: collage orgánico en todo el perímetro */
const DESKTOP_COLLAGE: CollagePiece[] = [
  { imageIndex: 0, position: 'top-[1%] left-[0%]', size: 'w-[14vw] max-w-[178px]', rotate: -9, opacity: 0.52 },
  { imageIndex: 1, position: 'top-[2%] right-[0%]', size: 'w-[13vw] max-w-[168px]', rotate: 8, opacity: 0.5 },
  { imageIndex: 2, position: 'top-[11%] left-[14%]', size: 'w-[11vw] max-w-[150px]', rotate: 5, opacity: 0.46 },
  { imageIndex: 3, position: 'top-[9%] right-[12%]', size: 'w-[10.5vw] max-w-[145px]', rotate: -6, opacity: 0.48 },
  { imageIndex: 4, position: 'top-[22%] left-[-1%]', size: 'w-[12vw] max-w-[160px]', rotate: -4, opacity: 0.5 },
  { imageIndex: 5, position: 'top-[20%] right-[0%]', size: 'w-[11.5vw] max-w-[155px]', rotate: 7, opacity: 0.49 },
  { imageIndex: 6, position: 'top-[38%] left-[2%]', size: 'w-[10vw] max-w-[140px]', rotate: 6, opacity: 0.44 },
  { imageIndex: 7, position: 'top-[36%] right-[1%]', size: 'w-[10.5vw] max-w-[142px]', rotate: -5, opacity: 0.45 },
  { imageIndex: 8, position: 'top-[48%] left-[10%]', size: 'w-[9vw] max-w-[130px]', rotate: 4, opacity: 0.42 },
  { imageIndex: 9, position: 'top-[46%] right-[9%]', size: 'w-[9.5vw] max-w-[135px]', rotate: -7, opacity: 0.43 },
  { imageIndex: 10, position: 'bottom-[20%] left-[0%]', size: 'w-[13.5vw] max-w-[172px]', rotate: 5, opacity: 0.51 },
  { imageIndex: 11, position: 'bottom-[18%] right-[0%]', size: 'w-[13vw] max-w-[165px]', rotate: -8, opacity: 0.5 },
  { imageIndex: 12, position: 'bottom-[32%] left-[12%]', size: 'w-[10vw] max-w-[138px]', rotate: -3, opacity: 0.4 },
  { imageIndex: 13, position: 'bottom-[30%] right-[11%]', size: 'w-[9.5vw] max-w-[132px]', rotate: 6, opacity: 0.41 },
  { imageIndex: 14, position: 'bottom-[8%] left-[18%]', size: 'w-[11vw] max-w-[148px]', rotate: 4, opacity: 0.47 },
  { imageIndex: 15, position: 'bottom-[6%] right-[16%]', size: 'w-[10.5vw] max-w-[144px]', rotate: -5, opacity: 0.46 },
  { imageIndex: 16, position: 'top-[58%] left-[20%]', size: 'w-[8.5vw] max-w-[125px]', rotate: 9, opacity: 0.38 },
  { imageIndex: 17, position: 'top-[56%] right-[19%]', size: 'w-[9vw] max-w-[128px]', rotate: -6, opacity: 0.39 },
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
        <circle cx="120" cy="108" r="5" fill="currentColor" opacity="0.45" />
        <circle cx="650" cy="132" r="5" fill="currentColor" opacity="0.45" />
      </g>
    </svg>
  )
}

const MASK_DESKTOP: CSSProperties = {
  WebkitMaskImage:
    'radial-gradient(ellipse 56% 50% at 50% 44%, transparent 20%, rgba(0,0,0,0.4) 48%, black 78%)',
  maskImage:
    'radial-gradient(ellipse 56% 50% at 50% 44%, transparent 20%, rgba(0,0,0,0.4) 48%, black 78%)',
}

function CollageTile({
  filename,
  piece,
  index,
  reduceMotion,
  visibilityClass,
}: {
  filename: string
  piece: CollagePiece
  index: number
  reduceMotion: boolean | null
  visibilityClass: string
}) {
  return (
    <motion.div
      className={`absolute aspect-[4/3] ${visibilityClass} ${piece.position} ${piece.size}`}
      style={{
        rotate: `${piece.rotate}deg`,
        opacity: piece.opacity,
      }}
      initial={false}
      animate={
        reduceMotion
          ? undefined
          : { y: [0, index % 2 === 0 ? -6 : 6, 0] }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 9 + (index % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.18,
            }
      }
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white/60 shadow-lg ring-2 ring-white/90">
        <Image
          src={getPuntoVentaSrc(filename)}
          alt=""
          fill
          className="rounded-2xl object-contain"
          sizes="(max-width: 768px) 36vw, 180px"
          priority={index < 4}
        />
      </div>
    </motion.div>
  )
}

export default function HeroCollageBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] min-h-[85vh] overflow-hidden bg-white" aria-hidden>
      {/* Móvil */}
      <div className="absolute inset-0 min-h-[85vh] md:hidden">
        <div className="relative h-full min-h-[85vh] w-full">
          {MOBILE_COLLAGE.map((piece, index) => (
            <CollageTile
              key={`m-${PUNTOS_VENTA_IMAGES[piece.imageIndex]}`}
              filename={PUNTOS_VENTA_IMAGES[piece.imageIndex]}
              piece={piece}
              index={index}
              reduceMotion={reduceMotion}
              visibilityClass="block"
            />
          ))}
        </div>
      </div>

      {/* Escritorio */}
      <motion.div
        className="absolute inset-0 hidden min-h-[85vh] md:block"
        style={MASK_DESKTOP}
        initial={false}
        animate={reduceMotion ? undefined : { scale: [1, 1.008, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <div className="relative h-full min-h-[85vh] w-full">
          {DESKTOP_COLLAGE.map((piece, index) => (
            <CollageTile
              key={`d-${PUNTOS_VENTA_IMAGES[piece.imageIndex]}`}
              filename={PUNTOS_VENTA_IMAGES[piece.imageIndex]}
              piece={piece}
              index={index}
              reduceMotion={reduceMotion}
              visibilityClass="block"
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 opacity-40 mix-blend-multiply md:opacity-50">
        <HeroNetworkOverlay />
      </div>

      {/* Cortina: más fuerte en móvil para liberar el centro del texto */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'radial-gradient(ellipse 88% 58% at 50% 46%, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 38%, rgba(255,255,255,0.5) 62%, rgba(255,255,255,0.2) 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse 58% 52% at 50% 44%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 42%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.12) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/30 to-white/80 md:from-white/75 md:via-white/20 md:to-white/65" />
    </div>
  )
}
