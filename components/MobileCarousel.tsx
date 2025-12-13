'use client'

import { useRef, useState, useEffect } from 'react'

interface MobileCarouselProps {
  children: React.ReactNode
  className?: string
  itemsPerView?: number
}

export default function MobileCarousel({ children, className = '', itemsPerView = 1.2 }: MobileCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    // Delay para asegurar que el DOM esté renderizado
    const timer = setTimeout(() => {
      checkScrollability()
    }, 100)
    
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollability)
      window.addEventListener('resize', checkScrollability)
      return () => {
        clearTimeout(timer)
        container.removeEventListener('scroll', checkScrollability)
        window.removeEventListener('resize', checkScrollability)
      }
    }
  }, [children])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const itemWidth = container.clientWidth / (itemsPerView || 1.2)
    const scrollAmount = itemWidth + 16 // item width + gap
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
    
    // Actualizar estado después del scroll
    setTimeout(checkScrollability, 300)
  }

  // Determinar el número de columnas basado en el número de items
  const childrenArray = Array.isArray(children) ? children : [children]
  const getGridCols = () => {
    const count = childrenArray.length
    if (count <= 2) return 'md:grid-cols-2'
    if (count <= 3) return 'md:grid-cols-2 lg:grid-cols-3'
    if (count <= 4) return 'md:grid-cols-2 lg:grid-cols-4'
    return 'md:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <div className={`relative ${className}`}>
      {/* Desktop: Grid normal */}
      <div className={`hidden md:grid ${getGridCols()} gap-8`}>
        {children}
      </div>

      {/* Mobile: Carrusel */}
      <div className="md:hidden relative">
        {/* Botón izquierdo */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-xl hover:bg-white transition-all border border-gray-200"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 text-brand-darkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Contenedor del carrusel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start"
                style={{ 
                  width: `calc((100% - 2rem) / ${itemsPerView})`,
                  minWidth: `calc(85% - 1rem)`
                }}
              >
                {child}
              </div>
            ))
          ) : (
            <div className="flex-shrink-0 snap-start w-full">
              {children}
            </div>
          )}
        </div>

        {/* Botón derecho */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-xl hover:bg-white transition-all border border-gray-200"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5 text-brand-darkGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

      </div>
    </div>
  )
}
