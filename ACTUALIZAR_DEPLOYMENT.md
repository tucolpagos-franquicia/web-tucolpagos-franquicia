# Cómo Forzar la Actualización del Deployment

## Problema
Los cambios están en el código local pero no se reflejan en la página desplegada.

## Solución

### Paso 1: Verificar que los cambios estén en GitHub

1. Abre GitHub Desktop
2. Verifica que TODOS los archivos modificados estén incluidos en el commit
3. Asegúrate de que el commit esté hecho y el push esté completo

### Paso 2: Forzar un nuevo deployment en Vercel

**Opción A: Desde GitHub (Recomendado)**
1. Haz un pequeño cambio en cualquier archivo (por ejemplo, agrega un espacio en blanco)
2. Haz commit y push
3. Esto forzará un nuevo deployment automático

**Opción B: Desde Vercel Dashboard**
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto `web-tucolpagos-franquicia`
3. Ve a la pestaña **Deployments**
4. Haz clic en los 3 puntos (⋯) del deployment más reciente
5. Selecciona **Redeploy**
6. Confirma el redeploy

### Paso 3: Verificar el deployment

1. Espera 1-2 minutos para que se complete el build
2. Verifica que el deployment tenga un check verde (✓)
3. Visita la página y haz un hard refresh (Ctrl+F5 o Cmd+Shift+R)

### Paso 4: Si aún no se actualiza

1. En Vercel Dashboard, ve a **Settings → General**
2. Verifica que el **Production Branch** sea `main`
3. Verifica que **Auto-deploy** esté habilitado
4. Si es necesario, desactiva y reactiva el auto-deploy

## Verificar que los cambios estén correctos

Los archivos locales deben tener:
- `components/sections/Hero.tsx`: "Potencia tu Negocio con TuColpagos"
- `components/sections/Commissions.tsx`: "$1M - $2M", "$3M - $4M", "$5M+"

Si estos cambios están en GitHub pero no en Vercel, el problema es el deployment.

