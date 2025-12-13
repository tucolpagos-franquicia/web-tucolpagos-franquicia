# 🚀 Actualizar Página en Vercel

## Pasos para Actualizar la Página

### Opción 1: Con GitHub Desktop (Más Fácil)

1. **Abre GitHub Desktop**
2. **Verifica que estés en el repositorio correcto:**
   - Debería decir: `web-tucolpagos-franquicia`
   - En la parte inferior izquierda verás "Changes" con archivos modificados

3. **Hacer Commit:**
   - En el campo de texto abajo, escribe: `Actualizar comisiones y número de WhatsApp`
   - Click en **"Commit to main"**

4. **Hacer Push:**
   - Click en el botón **"Push origin"** (arriba en la barra de herramientas)
   - O si dice "Fetch origin", primero haz click ahí y luego "Push origin"

5. **Esperar Deploy en Vercel:**
   - Ve a: https://vercel.com/dashboard
   - Click en tu proyecto: `web-tucolpagos-franquicia`
   - Verás un nuevo deploy en proceso
   - Espera 1-2 minutos
   - Cuando diga "Ready", tu página está actualizada

### Opción 2: Verificar Cambios

Si no ves cambios en GitHub Desktop:

1. **Cierra y vuelve a abrir GitHub Desktop**
2. **File → Add Local Repository**
3. **Selecciona:** `C:\Users\joser\Documents\Jose\TuColpagos\web-tucolpagos-franquicia`
4. **Verifica los cambios** y haz commit + push

---

## Archivos Modificados

Los siguientes archivos fueron actualizados:
- ✅ `components/sections/Commissions.tsx` - Tabla eliminada, subtítulo actualizado
- ✅ `components/WhatsAppButton.tsx` - Número actualizado
- ✅ `components/ContactForm.tsx` - Número actualizado
- ✅ `components/Header.tsx` - Número actualizado
- ✅ `components/Footer.tsx` - Número actualizado
- ✅ `components/sections/CTA.tsx` - Número actualizado
- ✅ `components/sections/FAQ.tsx` - Número actualizado
- ✅ `app/layout.tsx` - Número actualizado en schema

---

## Verificar que Funcionó

1. **En Vercel:**
   - Ve al dashboard
   - Verifica que el último deploy esté "Ready" ✅
   - Click en el dominio para ver la página

2. **En tu Navegador:**
   - Abre tu dominio: `tucolpagosfranquicia.com`
   - Refresca con Ctrl+Shift+R (limpia caché)
   - Verifica que:
     - La tabla de comisiones ya no aparezca
     - El número de WhatsApp sea: +57 305 447 7618

---

## Si el Deploy Falla

1. **Revisa los logs en Vercel:**
   - Click en el deploy fallido
   - Revisa los errores

2. **Verifica el build localmente:**
   ```powershell
   npm run build
   ```
   Si hay errores, corrígelos antes de hacer push

3. **Contacta si necesitas ayuda:**
   - Comparte el error que ves en Vercel
   - Te ayudo a resolverlo

---

## ⏱️ Tiempo Estimado

- **Commit y Push:** 1 minuto
- **Deploy en Vercel:** 1-2 minutos
- **Total:** 2-3 minutos

¡Tu página estará actualizada en menos de 3 minutos!

