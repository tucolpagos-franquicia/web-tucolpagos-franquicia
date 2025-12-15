# Solución para Errores de Build en Vercel

## El build local funciona ✅
El proyecto compila correctamente localmente, por lo que el problema está en la configuración de Vercel.

## Pasos para solucionar:

### 1. Verificar configuración en Vercel Dashboard

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto `web-tucolpagos-franquicia`
3. Ve a **Settings → General**
4. Verifica:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (o déjalo vacío para auto-detectar)
   - **Output Directory**: `.next` (o déjalo vacío)
   - **Install Command**: `npm install` (o déjalo vacío)
   - **Node.js Version**: 18.x o 20.x

### 2. Verificar Variables de Entorno

1. En Vercel Dashboard, ve a **Settings → Environment Variables**
2. Verifica si necesitas alguna variable (por ejemplo, `NEXT_PUBLIC_GA_ID` para Google Analytics)
3. Si no usas Google Analytics, no necesitas variables de entorno

### 3. Limpiar y Re-desplegar

1. En Vercel Dashboard, ve a **Deployments**
2. Haz clic en los 3 puntos (⋯) del deployment fallido
3. Selecciona **Redeploy**
4. O mejor aún, haz un nuevo commit y push para forzar un nuevo deployment

### 4. Verificar Logs de Build

1. En el deployment fallido, haz clic en **View Build Logs**
2. Busca el error específico
3. Los errores comunes son:
   - **Module not found**: Falta una dependencia
   - **Type error**: Error de TypeScript
   - **Build timeout**: El build tarda demasiado

### 5. Si el problema persiste

Ejecuta estos comandos localmente y haz commit:

```bash
# Limpiar cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

Luego haz commit y push de todos los archivos.

