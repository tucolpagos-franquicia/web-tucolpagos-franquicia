'use client'

interface DecorativeCurvesProps {
  position?: 'top-left' | 'bottom-right' | 'both'
  className?: string
}

export default function DecorativeCurves({ position = 'both', className = '' }: DecorativeCurvesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {position === 'both' || position === 'top-left' ? (
        <div className="absolute top-0 left-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] -translate-x-1/4 -translate-y-1/4">
          <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gradient-yellow-green-tl" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdbc02" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#fdbc02" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#91c004" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            {/* Forma curva exterior amarilla */}
            <path
              d="M0,0 Q150,80 300,0 T600,0 L600,200 Q450,280 300,200 T0,200 Z"
              fill="#fdbc02"
              fillOpacity="0.08"
              transform="rotate(-25 200 200)"
            />
            {/* Forma curva interior verde */}
            <path
              d="M50,50 Q200,120 350,50 T650,50 L650,250 Q500,320 350,250 T50,250 Z"
              fill="#91c004"
              fillOpacity="0.06"
              transform="rotate(-25 200 200)"
            />
          </svg>
        </div>
      ) : null}
      
      {position === 'both' || position === 'bottom-right' ? (
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gradient-green-yellow-br" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#91c004" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#91c004" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#fdbc02" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            {/* Forma curva exterior amarilla */}
            <path
              d="M0,400 Q150,320 300,400 T600,400 L600,200 Q450,120 300,200 T0,200 Z"
              fill="#fdbc02"
              fillOpacity="0.08"
              transform="rotate(25 200 200)"
            />
            {/* Forma curva interior verde */}
            <path
              d="M50,350 Q200,280 350,350 T650,350 L650,150 Q500,80 350,150 T50,150 Z"
              fill="#91c004"
              fillOpacity="0.06"
              transform="rotate(25 200 200)"
            />
          </svg>
        </div>
      ) : null}
    </div>
  )
}
