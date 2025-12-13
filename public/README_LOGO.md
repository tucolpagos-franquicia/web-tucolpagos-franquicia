# Instrucciones para el Logo

## Ubicación del Logo

Coloca el archivo del logo en esta carpeta (`/public/`) con el nombre:

**`logo.png`**

## Especificaciones Recomendadas

- **Formato**: PNG con transparencia (recomendado) o JPG
- **Dimensiones**: 
  - Ancho mínimo: 320px
  - Alto recomendado: 80-100px
  - Proporción: Aproximadamente 4:1 (ancho:alto)
- **Resolución**: 72-150 DPI (suficiente para web)
- **Tamaño de archivo**: Optimizado para web (< 100KB recomendado)

## Formatos Alternativos

Si prefieres usar otro formato, puedes usar:
- `logo.svg` (vectorial, mejor calidad)
- `logo.jpg` (si no necesitas transparencia)
- `logo.webp` (formato moderno optimizado)

Si usas un formato diferente, actualiza la ruta en:
- `components/Header.tsx` (línea ~30)
- `components/Footer.tsx` (línea ~12)

## Optimización

Para optimizar el logo antes de subirlo:
1. Usa herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
2. Asegúrate de que el logo tenga buen contraste sobre fondo blanco
3. Si el logo es muy grande, redimensiona antes de optimizar

