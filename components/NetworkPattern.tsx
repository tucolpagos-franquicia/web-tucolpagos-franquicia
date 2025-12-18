export default function NetworkPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Patrón muy sutil para no interferir con imagen de fondo */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(5, 131, 65, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}
      />
    </div>
  )
}
