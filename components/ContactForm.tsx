'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

interface ContactFormProps {
  variant?: 'hero' | 'cta'
}

export default function ContactForm({ variant = 'hero' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Validación básica
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Configurar EmailJS (necesitarás configurar las variables de entorno)
      // Por ahora, simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Aquí iría la integración real con EmailJS
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //   formData,
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      // )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
      })

      // Redirigir a WhatsApp como alternativa
      const whatsappMessage = encodeURIComponent(
        `Hola, soy ${formData.name}. Estoy interesado en la franquicia TuColpagos.\n\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Ciudad: ${formData.city}\n` +
        (formData.message ? `Mensaje: ${formData.message}` : '')
      )
      window.open(`https://wa.me/573246830038?text=${whatsappMessage}`, '_blank')
    } catch (error) {
      console.error('Error sending form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-brand-darkGreen mb-2">¡Formulario Enviado!</h3>
        <p className="text-gray-600">
          Te contactaremos pronto. También puedes escribirnos directamente por WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-darkGreen focus:border-transparent transition-all"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-darkGreen focus:border-transparent transition-all"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-darkGreen focus:border-transparent transition-all"
          placeholder="300 123 4567"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          Ciudad
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-darkGreen focus:border-transparent transition-all"
          placeholder="Tu ciudad"
        />
      </div>

      {variant === 'cta' && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Cuéntanos sobre tu interés en la franquicia..."
          />
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contáctanos por WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Al enviar, aceptas que nos pongamos en contacto contigo.
      </p>
    </form>
  )
}

