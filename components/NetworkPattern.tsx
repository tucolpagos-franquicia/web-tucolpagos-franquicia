export default function NetworkPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente de fondo suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-white to-brand-yellow/5" />
      
      {/* Patrón seamless que se repite sin líneas */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(253, 114, 3, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(253, 188, 2, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 60% 70%, rgba(145, 192, 4, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(5, 131, 65, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 60%, rgba(253, 114, 3, 0.06) 0%, transparent 50%)
          `,
          backgroundSize: '100% 800px',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'top center'
        }}
      />
      
      {/* Patrón de puntos sutiles seamless */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(5, 131, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}
      />
    </div>
  )
}
