/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
    remotePatterns: [],
    domains: [],
  },
  compress: true,
}

module.exports = nextConfig

