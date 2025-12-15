# Forzar Nuevo Deployment en Vercel

## Problema
Vercel no está detectando los nuevos commits automáticamente.

## Soluciones

### Opción 1: Verificar conexión GitHub-Vercel
1. Ve a: https://vercel.com/dashboard
2. Selecciona: `web-tucolpagos-franquicia`
3. Ve a: **Settings** → **Git**
4. Verifica que esté conectado a: `tucolpagos-franquicia/web-tucolpagos-franquicia`
5. Si no está conectado, haz clic en **Connect Git Repository**

### Opción 2: Hacer Redeploy manual
1. Ve a: https://vercel.com/dashboard
2. Selecciona: `web-tucolpagos-franquicia`
3. Ve a la pestaña **Deployments**
4. Busca el deployment con commit `c78b3bf` (el que corrigió vercel.json)
5. Haz clic en los **3 puntos** (⋯) del deployment
6. Selecciona **Redeploy**
7. Confirma el redeploy

### Opción 3: Verificar que el commit esté en GitHub
1. Ve a: https://github.com/tucolpagos-franquicia/web-tucolpagos-franquicia
2. Verifica que el último commit sea el más reciente
3. Si no está, necesitas hacer push desde GitHub Desktop

### Opción 4: Crear un Deploy Hook
1. Ve a: Vercel Dashboard → Settings → Git
2. Ve a la sección **Deploy Hooks**
3. Crea un nuevo hook
4. Usa el URL del hook para forzar deployments

