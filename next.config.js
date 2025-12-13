/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
    unoptimized: false, // Vercel optimiza automáticamente
  },
  compress: true,
  poweredByHeader: false, // Ocultar header X-Powered-By por seguridad
  generateEtags: true, // Habilitar ETags para mejor caché
  // Configuración para producción
  swcMinify: true, // Usar SWC para minificación (más rápido)
}

module.exports = nextConfig

