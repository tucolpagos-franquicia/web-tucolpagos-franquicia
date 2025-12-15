'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="TuColpagos Logo"
              width={208}
              height={64}
              className="w-40 h-12 md:w-52 md:h-16"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#beneficios" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Beneficios
            </Link>
            <Link href="#portafolio" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Portafolio
            </Link>
            <Link href="#comisiones" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Comisiones
            </Link>
            <Link href="#testimonios" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Testimonios
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              FAQ
            </Link>
            <a
              href="https://wa.me/573054477618"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-darkGreen text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-darkerGreen transition-colors"
            >
              Paga Aquí
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

