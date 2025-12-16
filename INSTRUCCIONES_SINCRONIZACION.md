# Instrucciones para Sincronizar Cambios con GitHub

## Cambios Realizados

### ✅ Cambios Solicitados:
1. **Footer - Certificaciones**: Aumentado tamaño, eliminadas líneas
2. **Badge "MÁS POPULAR"**: Optimizado para móvil (iPhone 11)
3. **Título actualizado**: "Nuestros Puntos de Venta" → "Algunos de Nuestros Aliados"

### ✅ Mejoras Adicionales:
4. **Hero - CTA directo a WhatsApp**: Botón "Solicitar Información" va directo a WhatsApp
5. **Sección Planes**: Mensaje más claro sobre "Sin pagos mensuales adicionales"
6. **Navegación mejorada**: Botón "Conocer Más" ahora es "Ver Planes"

---

## Opción 1: Usar el Script Automático (Recomendado)

1. Abre PowerShell en la carpeta del proyecto
2. Ejecuta:
   ```powershell
   .\sincronizar-cambios.ps1
   ```
3. Sigue las instrucciones en pantalla

---

## Opción 2: GitHub Desktop (Más Fácil)

1. Abre **GitHub Desktop**
2. Verás los archivos modificados en la columna izquierda:
   - `components/Footer.tsx`
   - `components/sections/SubscriptionPlans.tsx`
   - `components/sections/TheOpportunity.tsx`
   - `components/sections/Hero.tsx`
   - `components/sections/Commissions.tsx`
3. En la parte inferior, escribe el mensaje de commit:
   ```
   Optimización móvil: Badge MÁS POPULAR, certificaciones sin líneas, mejoras de conversión y UX
   ```
4. Haz clic en **"Commit to main"**
5. Haz clic en **"Push origin"** (botón azul arriba)
6. ✅ Listo! Vercel se actualizará automáticamente

---

## Opción 3: Terminal con Git

Si tienes Git instalado y configurado:

```powershell
# Agregar todos los cambios
git add .

# Crear commit
git commit -m "Optimización móvil: Badge MÁS POPULAR, certificaciones sin líneas, mejoras de conversión y UX"

# Subir a GitHub
git push origin main
```

---

## Verificación Post-Deploy

Después de hacer push, espera 2-3 minutos y verifica:

1. **GitHub**: Ve a tu repositorio y confirma que el commit aparece
2. **Vercel**: Ve al dashboard de Vercel y verifica que hay un nuevo deployment
3. **Página**: Visita `https://www.tucolpagosfranquicia.com` y verifica los cambios

---

## Archivos Modificados

- ✅ `components/Footer.tsx` - Certificaciones optimizadas
- ✅ `components/sections/SubscriptionPlans.tsx` - Badge MÁS POPULAR optimizado
- ✅ `components/sections/TheOpportunity.tsx` - Título actualizado
- ✅ `components/sections/Hero.tsx` - CTA directo a WhatsApp
- ✅ `components/sections/Commissions.tsx` - Mensaje mejorado

---

## Si Hay Problemas

### Error: "Git no está instalado"
- Instala Git desde: https://git-scm.com/download/win
- O usa GitHub Desktop

### Error: "No es un repositorio Git"
- Verifica que estás en la carpeta correcta
- O inicializa con: `git init`

### Error al hacer Push
- Verifica tu conexión a internet
- Verifica que tienes permisos en el repositorio
- Intenta: `git pull origin main` primero, luego `git push origin main`

---

## Build Verificado ✅

El proyecto compila correctamente sin errores:
- ✅ Next.js build exitoso
- ✅ Sin errores de TypeScript
- ✅ Sin errores de ESLint
- ✅ Todos los componentes funcionando

