export default function NetworkPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexagons"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="#058341"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  )
}


