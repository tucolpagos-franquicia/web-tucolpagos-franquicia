'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-40 h-12 md:w-52 md:h-16 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="TuColpagos Logo"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 160px, 208px"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#beneficios" className="font-medium text-gray-700 hover:text-brand-darkGreen transition-colors">
              Beneficios
            </Link>
            <Link href="#portafolio" className="font-medium text-gray-700 hover:text-brand-darkGreen transition-colors">
              Portafolio
            </Link>
            <Link href="#comisiones" className="font-medium text-gray-700 hover:text-brand-darkGreen transition-colors">
              Comisiones
            </Link>
            <Link href="#testimonios" className="font-medium text-gray-700 hover:text-brand-darkGreen transition-colors">
              Testimonios
            </Link>
            <Link href="#faq" className="font-medium text-gray-700 hover:text-brand-darkGreen transition-colors">
              FAQ
            </Link>
            <a
              href="https://wa.me/573054477618"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2"
            >
              Paga Aquí
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="#beneficios"
                className="font-medium hover:text-brand-darkGreen transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#portafolio"
                className="font-medium hover:text-brand-darkGreen transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portafolio
              </Link>
              <Link
                href="#comisiones"
                className="font-medium hover:text-brand-darkGreen transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comisiones
              </Link>
              <Link
                href="#testimonios"
                className="font-medium hover:text-brand-darkGreen transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="#faq"
                className="font-medium hover:text-brand-darkGreen transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <a
                href="https://wa.me/573054477618"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Paga Aquí
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

