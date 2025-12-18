# 🌟 TuColpagos Franquicia - Sitio Web Oficial

Sitio web oficial de TuColpagos Franquicia desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- ⚡ Next.js 14 con App Router
- 🎨 Tailwind CSS para estilos modernos y responsivos
- 🎭 Framer Motion para animaciones suaves
- 📱 100% Responsive (Mobile, Tablet, Desktop)
- 🔍 SEO optimizado con metadata completa
- ♿ Accesibilidad optimizada
- 🖼️ Optimización automática de imágenes con Next.js Image
- 📊 Google Analytics integrado

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/[tu-usuario]/web-tucolpagos-franquicia.git

# Entrar al directorio
cd web-tucolpagos-franquicia

# Instalar dependencias
npm install
```

## 🏃 Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en:
# http://localhost:3000
```

## 🏗️ Build para Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
web-tucolpagos-franquicia/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal con metadata
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globales
│   └── sitemap.ts           # Generación de sitemap
├── components/
│   ├── sections/            # Secciones de la landing page
│   │   ├── Hero.tsx
│   │   ├── SubscriptionPlans.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   ├── Header.tsx           # Navegación
│   ├── Footer.tsx           # Footer
│   └── WhatsAppButton.tsx   # Botón flotante de WhatsApp
├── public/                  # Recursos estáticos
│   ├── bancos/             # Logos de bancos
│   ├── billeteras/         # Logos de billeteras digitales
│   ├── certificaciones/    # Sellos de certificación
│   ├── puntos-venta/       # Fotos de puntos de venta
│   └── testimonios/        # Fotos de testimonios (agregar aquí)
└── ...
```

## 🎨 Paleta de Colores

```css
--brand-orange: #fd7203
--brand-yellow: #fdbc02
--brand-green: #91c004
--brand-darkGreen: #058341
--brand-darkerGreen: #034a2a
```

## 📸 Fotos de Testimonios

Para que la sección de testimonios funcione correctamente, debes agregar 5 fotos en:

```
/public/testimonios/
├── persona-1.jpg  (400x400px)
├── persona-2.jpg  (400x400px)
├── persona-3.jpg  (400x400px)
├── persona-4.jpg  (400x400px)
└── persona-5.jpg  (400x400px)
```

Ver instrucciones completas en: `/public/testimonios/INSTRUCCIONES_FOTOS.txt`

## 🌐 Deployment

El sitio está configurado para deployment automático en Vercel:

1. Cada push a `main` despliega automáticamente
2. El dominio principal es: https://www.tucolpagosfranquicia.com
3. Redirección automática de `tucolpagosfranquicia.com` a `www.tucolpagosfranquicia.com`

## 📊 Google Analytics

Para configurar Google Analytics:

1. Crea una variable de entorno: `NEXT_PUBLIC_GA_ID`
2. Agrega tu ID de medición de Google Analytics
3. El componente GoogleAnalytics lo cargará automáticamente

## 📱 Contacto

- **WhatsApp:** +57 305 447 7618
- **Dirección:** Carrera 4 #38–61 Lc2, Centro Montería-Córdoba
- **Instagram:** @tucolpagos
- **Facebook:** @tucolpagos

## 📄 Licencia

© 2025 TuColpagos Colombia SAS. Todos los derechos reservados.

---

**Desarrollado con ❤️ para TuColpagos**




