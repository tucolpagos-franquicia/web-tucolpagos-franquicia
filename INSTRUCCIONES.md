# Instrucciones de Implementación - Tu COLPAGOS Franquicia

## ✅ Checklist de Implementación

### 1. Configuración Inicial
- [ ] Instalar dependencias: `npm install`
- [ ] Configurar variables de entorno (opcional): Copiar `.env.example` a `.env.local`
- [ ] Verificar que el proyecto compile: `npm run build`

### 2. Contenido a Reemplazar

#### Imágenes de Testimonios
- [ ] Agregar fotos reales de franquiciados en `/public/testimonials/`
  - `carlos.jpg`
  - `maria.jpg`
  - `juan.jpg`
  - `ana.jpg`
  - `luis.jpg`
- [ ] Actualizar rutas en `components/sections/Testimonials.tsx`

#### Logos de Bancos
- [ ] Agregar logos reales de bancos aliados en `/public/banks/`
  - `davivienda.png`
  - `bancolombia.png`
  - `bancolombia-alt.png`
  - `agrario.png`
  - `caja-social.png`
  - `otros.png`
- [ ] Actualizar componente `components/sections/Portfolio.tsx` para usar imágenes reales

#### Logo Principal
- [ ] Agregar logo oficial de Tu COLPAGOS en `/public/logo.png`
- [ ] Actualizar `components/Header.tsx` y `components/Footer.tsx`

#### Favicon
- [ ] Crear favicon.ico y agregarlo en `/public/favicon.ico`

### 3. Configuración de EmailJS (Opcional)

Si deseas que los formularios se envíen por email:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email (Gmail, Outlook, etc.)
3. Crear template de email con variables:
   - `{{name}}`
   - `{{email}}`
   - `{{phone}}`
   - `{{city}}`
   - `{{message}}`
4. Agregar variables en `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

**Nota:** Si no configuras EmailJS, los formularios automáticamente redirigirán a WhatsApp con el mensaje prellenado.

### 4. Google Analytics (Opcional)

1. Crear propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtener el ID de medición (G-XXXXXXXXXX)
3. Agregar en `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 5. Dominio y URLs

Actualizar las siguientes URLs en los archivos:

- [ ] `app/layout.tsx` - Schema markup (línea 56)
- [ ] `app/sitemap.ts` - URL del sitemap
- [ ] `public/robots.txt` - URL del sitemap

Reemplazar `https://www.tucolpagosfranquicia.com` con tu dominio real.

### 6. Optimización de Imágenes

- [ ] Convertir todas las imágenes a formato WebP
- [ ] Optimizar imágenes con herramientas como:
  - [Squoosh](https://squoosh.app/)
  - [TinyPNG](https://tinypng.com/)
- [ ] Asegurar que las imágenes no excedan 200KB

### 7. Testing

- [ ] Probar formularios (con y sin EmailJS)
- [ ] Verificar enlaces de WhatsApp
- [ ] Probar en diferentes dispositivos (mobile, tablet, desktop)
- [ ] Verificar accesibilidad (navegación por teclado, contraste)
- [ ] Probar PageSpeed Insights (objetivo: >80)

### 8. SEO

- [ ] Verificar meta tags en `app/layout.tsx`
- [ ] Verificar schema markup
- [ ] Verificar sitemap.xml (generado automáticamente)
- [ ] Verificar robots.txt
- [ ] Configurar Google Search Console

### 9. Despliegue

#### Opción 1: Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

#### Opción 2: Otros Proveedores
- Netlify
- AWS Amplify
- Google Cloud Run

### 10. Post-Despliegue

- [ ] Verificar que el sitio carga en <3 segundos
- [ ] Verificar HTTPS está activo
- [ ] Configurar redirección de HTTP a HTTPS
- [ ] Verificar que todos los formularios funcionan
- [ ] Probar en diferentes navegadores

## 📝 Notas Adicionales

### Datos de Contacto
Los datos de contacto están configurados en:
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`
- `components/sections/CTA.tsx`

### Colores y Branding
Los colores están definidos en `tailwind.config.js`:
- Primario: Verde/Turquesa (#00BFA5)
- Secundario: Blanco/Gris
- Acento: Oro (#FFD700)

### Fuentes
- Headings: Poppins
- Body: Open Sans

## 🐛 Solución de Problemas

### Error: Module not found
```bash
npm install
```

### Error: TypeScript errors
```bash
npm run build
```

### Formularios no envían
- Verificar variables de entorno de EmailJS
- O usar WhatsApp como alternativa (ya está configurado)

### Imágenes no cargan
- Verificar rutas en `/public/`
- Usar rutas relativas desde `/public/`

## 📞 Soporte

Para dudas o problemas, contactar:
- WhatsApp: +57 324 683 0038
- Email: info@tucolpagos.com

