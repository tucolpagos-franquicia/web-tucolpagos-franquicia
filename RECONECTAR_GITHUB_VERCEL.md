# Reconectar GitHub con Vercel

## Problema
GitHub muestra una "X" indicando que hay un problema con la conexión a Vercel.

## Solución: Reconectar GitHub con Vercel

### Paso 1: Ir a Vercel Dashboard

1. Ve a: https://vercel.com/dashboard
2. Inicia sesión si es necesario

### Paso 2: Seleccionar el Proyecto

1. Selecciona: `web-tucolpagos-franquicia`

### Paso 3: Ir a Settings → Git

1. En el menú lateral izquierdo, haz clic en **"Settings"**
2. Luego haz clic en **"Git"** (en el submenú de Settings)

### Paso 4: Verificar/Reconectar

1. Verifica que esté conectado a:
   - **Repository**: `tucolpagos-franquicia/web-tucolpagos-franquicia`
   - **Production Branch**: `main`

2. Si NO está conectado o muestra un error:
   - Haz clic en **"Disconnect"** (si está conectado pero con error)
   - Luego haz clic en **"Connect Git Repository"**
   - Selecciona **GitHub**
   - Autoriza a Vercel si te lo pide
   - Selecciona el repositorio: `tucolpagos-franquicia/web-tucolpagos-franquicia`
   - Selecciona la rama: `main`
   - Haz clic en **"Connect"**

### Paso 5: Verificar que Funcione

1. Después de conectar, ve a la pestaña **"Deployments"**
2. Deberías ver que Vercel está sincronizado con GitHub
3. Si hay commits pendientes, Vercel debería iniciar un deployment automáticamente

### Paso 6: Si Aún No Funciona

Si después de reconectar sigue sin funcionar:

1. Ve a GitHub: https://github.com/tucolpagos-franquicia/web-tucolpagos-franquicia
2. Ve a **Settings** → **Integrations** → **Vercel**
3. Verifica que la integración esté activa
4. Si no está, instala la integración de Vercel en GitHub

## Alternativa: Verificar Permisos en GitHub

1. Ve a: https://github.com/settings/applications
2. Busca **Vercel** en las aplicaciones autorizadas
3. Verifica que tenga los permisos necesarios:
   - Acceso al repositorio
   - Permisos de lectura/escritura

