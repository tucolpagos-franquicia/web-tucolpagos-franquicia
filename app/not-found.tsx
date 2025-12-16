import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">404</h2>
        <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
        <p className="text-gray-500 mb-8">La página que buscas no existe.</p>
        <Link
          href="/"
          className="bg-brand-darkGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkerGreen transition-colors inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

