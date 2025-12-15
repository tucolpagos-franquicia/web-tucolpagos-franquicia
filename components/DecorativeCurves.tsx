export default function DecorativeCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Formas abstractas fluidas */}
      <svg
        className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 opacity-30"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdbc02" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fd7203" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q150,50 300,150 T600,200 L600,0 L0,0 Z"
          fill="url(#curveGradient1)"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 opacity-25"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#91c004" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#058341" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M600,200 Q450,350 300,250 T0,200 L0,400 L600,400 Z"
          fill="url(#curveGradient2)"
        />
      </svg>

      {/* Formas geométricas abstractas adicionales */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-15"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fd7203" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#91c004" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#058341" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <polygon
          points="200,50 350,150 300,300 100,300 50,150"
          fill="url(#shapeGradient)"
          transform="rotate(45 200 200)"
        />
      </svg>
    </div>
  )
}
