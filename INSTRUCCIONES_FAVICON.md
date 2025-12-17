# Instrucciones para Agregar Favicon

## 📍 Ubicación de los Archivos

En Next.js 14 con App Router, coloca los archivos en la carpeta **`app/`** (en la raíz del proyecto, junto a `layout.tsx`).

## 📐 Especificaciones de la Imagen

### Opción 1: Método Automático (Recomendado)

Next.js detecta automáticamente estos archivos si los colocas en `app/`:

#### 1. **icon.png** o **icon.ico**
- **Ubicación**: `app/icon.png` o `app/icon.ico`
- **Tamaño**: 512x512 píxeles
- **Formato**: PNG (transparente) o ICO
- **Resolución**: 72-96 DPI (estándar web)
- **Fondo**: Transparente o sólido (recomendado transparente)
- **Descripción**: Este será el favicon principal

#### 2. **apple-icon.png** (Opcional pero recomendado)
- **Ubicación**: `app/apple-icon.png`
- **Tamaño**: 180x180 píxeles
- **Formato**: PNG
- **Resolución**: 72-96 DPI
- **Fondo**: Sólido (iOS no soporta transparencia en este icono)
- **Descripción**: Icono para dispositivos Apple (iPhone, iPad)

### Opción 2: Método Manual (Alternativa)

Si prefieres usar `public/`:

#### **favicon.ico**
- **Ubicación**: `public/favicon.ico`
- **Tamaño**: Múltiples tamaños en un solo archivo (16x16, 32x32, 48x48)
- **Formato**: ICO (formato especial que contiene múltiples tamaños)
- **Resolución**: 72-96 DPI
- **Descripción**: Formato tradicional, compatible con todos los navegadores

## 🎨 Recomendaciones de Diseño

1. **Usa el logo de TuColpagos** (el mismo que está en el header)
2. **Fondo transparente** para `icon.png` (se adapta mejor a diferentes fondos del navegador)
3. **Fondo sólido verde** para `apple-icon.png` (iOS requiere fondo sólido)
4. **Mantén el diseño simple** - el favicon se verá muy pequeño (16x16 o 32x32 píxeles)
5. **Colores de la marca**: Usa los colores de TuColpagos (#fd7203, #fdbc02, #91c004, #058341)

## 📝 Pasos a Seguir

1. **Prepara las imágenes**:
   - Crea `icon.png` de 512x512px (con fondo transparente)
   - Crea `apple-icon.png` de 180x180px (con fondo sólido verde)

2. **Coloca los archivos**:
   - Copia `icon.png` a: `app/icon.png`
   - Copia `apple-icon.png` a: `app/apple-icon.png`

3. **Next.js los detectará automáticamente** - No necesitas configurar nada más

## 🔧 Si Usas el Método Manual

Si prefieres usar `public/favicon.ico`, necesitarás actualizar `app/layout.tsx` para agregar:

```typescript
export const metadata: Metadata = {
  // ... resto de metadata
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}
```

## ✅ Verificación

Después de agregar los archivos:
1. Reinicia el servidor de desarrollo (`npm run dev`)
2. Abre la página en el navegador
3. Verifica que el favicon aparezca en la pestaña del navegador
4. En móvil, verifica que el icono aparezca al agregar a la pantalla de inicio

## 📦 Resumen de Archivos Necesarios

```
app/
  ├── icon.png          (512x512px, PNG, transparente)
  └── apple-icon.png    (180x180px, PNG, fondo sólido)
```

O alternativamente:

```
public/
  └── favicon.ico       (múltiples tamaños, formato ICO)
```


