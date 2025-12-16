'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h2>
        <p className="text-gray-600 mb-6">Lo sentimos, ha ocurrido un error.</p>
        <button
          onClick={reset}
          className="bg-brand-darkGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkerGreen transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}

