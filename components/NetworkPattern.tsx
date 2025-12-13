'use client'

export default function NetworkPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full opacity-[0.02]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hexagon-network" x="0" y="0" width="50" height="43.3" patternUnits="userSpaceOnUse">
            {/* Hexágono */}
            <polygon
              points="25,5 40,13.66 40,30.66 25,38.3 10,30.66 10,13.66"
              fill="none"
              stroke="#058341"
              strokeWidth="0.3"
            />
            {/* Puntos en los vértices */}
            <circle cx="25" cy="5" r="0.8" fill="#058341" />
            <circle cx="40" cy="13.66" r="0.8" fill="#058341" />
            <circle cx="40" cy="30.66" r="0.8" fill="#058341" />
            <circle cx="25" cy="38.3" r="0.8" fill="#058341" />
            <circle cx="10" cy="30.66" r="0.8" fill="#058341" />
            <circle cx="10" cy="13.66" r="0.8" fill="#058341" />
            {/* Punto central */}
            <circle cx="25" cy="21.65" r="0.5" fill="#058341" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagon-network)" />
      </svg>
    </div>
  )
}
