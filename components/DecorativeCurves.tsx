export default function DecorativeCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Formas abstractas fluidas - muy sutiles para no tapar imagen de fondo */}
      <svg
        className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 opacity-15"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdbc02" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fd7203" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q150,50 300,150 T600,200 L600,0 L0,0 Z"
          fill="url(#curveGradient1)"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 opacity-15"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#91c004" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#058341" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M600,200 Q450,350 300,250 T0,200 L0,400 L600,400 Z"
          fill="url(#curveGradient2)"
        />
      </svg>
    </div>
  )
}
