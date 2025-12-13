# Tu COLPAGOS Franquicia - Landing Page

Landing page de alta conversión para captar emprendedores e inversionistas interesados en las franquicias de Tu COLPAGOS.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con SSR
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **EmailJS** - Envío de formularios

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Configura las variables de entorno (opcional para EmailJS):
```bash
# Crea un archivo .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Optimización de performance (>80 PageSpeed)
- ✅ SEO optimizado (meta tags, schema markup, sitemap)
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Animaciones suaves con scroll triggers
- ✅ Formularios con validación
- ✅ Botón flotante de WhatsApp
- ✅ Integración con EmailJS (opcional)

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
├── components/
│   ├── Header.tsx           # Header con navegación
│   ├── Footer.tsx           # Footer
│   ├── ContactForm.tsx      # Formulario de contacto
│   ├── WhatsAppButton.tsx   # Botón flotante WhatsApp
│   └── sections/            # Secciones de la landing
│       ├── Hero.tsx
│       ├── WhyChooseUs.tsx
│       ├── TheOpportunity.tsx
│       ├── Portfolio.tsx
│       ├── Benefits.tsx
│       ├── Commissions.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── Platform.tsx
│       ├── FAQ.tsx
│       └── CTA.tsx
└── public/                   # Archivos estáticos
```

## 🔧 Configuración

### EmailJS (Opcional)

Para habilitar el envío de formularios por email:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea un template
4. Agrega las variables de entorno en `.env.local`

**Nota:** Si no configuras EmailJS, los formularios redirigirán automáticamente a WhatsApp.

## 📝 Notas Importantes

- Las imágenes de testimonios deben agregarse en `/public/testimonials/`
- Los logos de bancos deben agregarse en `/public/banks/`
- Reemplaza los placeholders con contenido real
- Configura el dominio en `app/layout.tsx` y `app/sitemap.ts`

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático

### Otros Proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Azure Static Web Apps

## 📞 Contacto

- WhatsApp: +57 324 683 0038
- Email: info@tucolpagos.com
- Dirección: Carrera 4 #38–61 Lc2, Centro Montería-Córdoba

## 📄 Licencia

© 2024 Tu COLPAGOS Colombia SAS. Todos los derechos reservados.

