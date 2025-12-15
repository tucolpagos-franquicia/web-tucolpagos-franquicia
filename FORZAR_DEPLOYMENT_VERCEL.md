# Forzar Deployment en Vercel

## Problema
Vercel no está detectando automáticamente los nuevos commits de GitHub.

## Soluciones

### Opción 1: Verificar y Reconectar GitHub-Vercel (RECOMENDADO)

1. Ve a: https://vercel.com/dashboard
2. Selecciona: `web-tucolpagos-franquicia`
3. Ve a: **Settings** → **Git**
4. Verifica el estado de la conexión:
   - ¿Está conectado a `tucolpagos-franquicia/web-tucolpagos-franquicia`?
   - ¿Muestra algún error?
5. Si hay error o no está conectado:
   - Haz clic en **"Disconnect"** (si está conectado)
   - Luego haz clic en **"Connect Git Repository"**
   - Selecciona **GitHub**
   - Autoriza a Vercel
   - Selecciona: `tucolpagos-franquicia/web-tucolpagos-franquicia`
   - Selecciona rama: `main`
   - Haz clic en **"Connect"**
6. Después de conectar, Vercel debería detectar automáticamente los commits pendientes

### Opción 2: Crear Deployment Manual desde Vercel

1. Ve a: https://vercel.com/dashboard
2. Selecciona: `web-tucolpagos-franquicia`
3. Haz clic en el botón **"Deploy"** (arriba a la derecha)
4. Selecciona:
   - **Git Repository**: `tucolpagos-franquicia/web-tucolpagos-franquicia`
   - **Branch**: `main`
   - **Framework Preset**: Next.js (debería detectarse automáticamente)
5. Haz clic en **"Deploy"**
6. Espera a que el deployment se complete

### Opción 3: Verificar Webhooks en GitHub

1. Ve a: https://github.com/tucolpagos-franquicia/web-tucolpagos-franquicia
2. Ve a: **Settings** → **Webhooks**
3. Verifica que haya un webhook de Vercel activo
4. Si no hay webhook:
   - Esto significa que la integración no está funcionando
   - Necesitas reconectar GitHub con Vercel (Opción 1)

### Opción 4: Usar Deploy Hook (Alternativa)

1. Ve a: Vercel Dashboard → Settings → Git
2. Ve a la sección **"Deploy Hooks"**
3. Crea un nuevo Deploy Hook
4. Copia el URL del hook
5. Puedes usar este URL para forzar deployments manualmente

## Verificación Post-Deployment

Después de que el deployment se complete:

1. Ve a la pestaña **"Deployments"**
2. Verifica que el nuevo deployment tenga estado **"Ready"** (verde)
3. Visita: https://www.tucolpagosfranquicia.com
4. Haz hard refresh: `Ctrl + F5`
5. Verifica que los cambios estén aplicados

