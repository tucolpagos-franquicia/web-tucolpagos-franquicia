export default function NetworkPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente de fondo suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-white to-brand-yellow/5" />
      
      {/* Patrón de círculos abstractos */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradiente para círculos */}
          <radialGradient id="circleGradient1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fd7203" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fd7203" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="circleGradient2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fdbc02" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#fdbc02" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="circleGradient3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#91c004" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#91c004" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="circleGradient4" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#058341" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#058341" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Círculos abstractos posicionados estratégicamente */}
        <circle cx="200" cy="150" r="120" fill="url(#circleGradient1)" />
        <circle cx="800" cy="200" r="150" fill="url(#circleGradient2)" />
        <circle cx="1000" cy="500" r="180" fill="url(#circleGradient3)" />
        <circle cx="150" cy="600" r="140" fill="url(#circleGradient4)" />
        <circle cx="600" cy="700" r="130" fill="url(#circleGradient1)" />
        <circle cx="400" cy="400" r="160" fill="url(#circleGradient2)" />
      </svg>

      {/* Líneas de conexión sutiles */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#058341" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#91c004" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fdbc02" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M 200 150 Q 400 300 600 400 T 1000 500"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <path
          d="M 800 200 Q 600 400 400 400 T 150 600"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  )
}
