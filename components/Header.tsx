'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil al hacer clic en un enlace
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image
              src="/logo.png"
              alt="TuColpagos Logo"
              width={208}
              height={64}
              className="w-40 h-12 md:w-52 md:h-16"
              priority
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Beneficios
            </a>
            <a href="#portafolio" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Portafolio
            </a>
            <a href="#comisiones" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Comisiones
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-gray-700 hover:text-brand-darkGreen transition-colors">
              FAQ
            </a>
            <a
              href="https://wa.me/573054477618"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-darkGreen text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-darkerGreen transition-colors"
            >
              Paga Aquí
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-200">
            <a
              href="#beneficios"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-brand-darkGreen transition-colors py-2"
            >
              Beneficios
            </a>
            <a
              href="#portafolio"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-brand-darkGreen transition-colors py-2"
            >
              Portafolio
            </a>
            <a
              href="#comisiones"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-brand-darkGreen transition-colors py-2"
            >
              Comisiones
            </a>
            <a
              href="#testimonios"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-brand-darkGreen transition-colors py-2"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-brand-darkGreen transition-colors py-2"
            >
              FAQ
            </a>
            <a
              href="https://wa.me/573054477618"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="bg-brand-darkGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkerGreen transition-colors text-center"
            >
              Paga Aquí
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
