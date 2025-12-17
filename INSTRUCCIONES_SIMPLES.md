# Instrucciones Simples para Actualizar la Página

## ✅ Estado Actual
Todos los archivos están correctos y listos para subir:
- ✅ Hero: "Potencia tu Negocio con TuColpagos"
- ✅ Comisiones: $1M-$2M, $3M-$4M, $5M+
- ✅ WhatsApp: +57 305 447 7618
- ✅ Sin errores de código

## 📋 Pasos en GitHub Desktop

### 1. Abre GitHub Desktop
- Si no está abierto, ábrelo desde el menú de inicio

### 2. Ve a la pestaña "Changes"
- En la parte superior de GitHub Desktop, haz clic en "Changes"

### 3. Verifica los archivos
Deberías ver estos archivos listos para commit:
- `components/sections/Hero.tsx`
- `components/sections/Commissions.tsx`
- `app/layout.tsx`
- `vercel.json`
- `.gitignore`

### 4. ⚠️ IMPORTANTE: NO incluyas estos archivos
Si ves alguno de estos, DESELECCIONÁLOS:
- ❌ Cualquier archivo dentro de `.next/`
- ❌ Cualquier archivo dentro de `node_modules/`

### 5. Haz el Commit
1. En la parte inferior, escribe el mensaje:
   ```
   Actualizar Hero y proyección de ingresos
   ```
2. Haz clic en el botón **"Commit to main"**

### 6. Haz Push
1. Después del commit, haz clic en el botón **"Push origin"**
2. Espera a que termine (verás un mensaje de confirmación)

### 7. Verifica en Vercel
1. Ve a: https://vercel.com/dashboard
2. Selecciona el proyecto: `web-tucolpagos-franquicia`
3. Deberías ver un nuevo deployment iniciándose
4. Espera 1-2 minutos
5. Verifica que tenga un ✓ verde

### 8. Verifica la página
1. Visita: https://www.tucolpagosfranquicia.com
2. Haz un hard refresh: `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
3. Verifica:
   - Hero dice: "Potencia tu Negocio con TuColpagos"
   - Comisiones muestra: $1M-$2M, $3M-$4M, $5M+

## 🔧 Si algo no funciona

### Si no ves archivos en "Changes":
1. En GitHub Desktop, ve a: **Repository → Show in Explorer**
2. Verifica que los archivos existan
3. Si existen pero no aparecen, ve a: **Repository → Open in Command Prompt**
4. Ejecuta: `git add .`
5. Vuelve a GitHub Desktop

### Si GitHub muestra errores:
1. Toma una captura de pantalla del error
2. Compártela para revisar

### Si Vercel no despliega:
1. Ve a Vercel Dashboard
2. Ve a Settings → Git
3. Verifica que esté conectado a GitHub
4. Si no está conectado, reconéctalo

## 📞 Contacto
Si necesitas ayuda, comparte:
- Captura de la pestaña "Changes" en GitHub Desktop
- Captura de cualquier error que aparezca
- Captura del estado en Vercel Dashboard


