# Guía para Verificar Errores de Build

## Para ver los logs de error en Vercel:

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto `web-tucolpagos-franquicia`
3. Ve a la pestaña "Deployments"
4. Haz clic en el deployment que tiene la X roja
5. Revisa los logs de build para ver el error específico

## Errores comunes y soluciones:

### 1. Error de TypeScript
- Verifica que todos los tipos estén correctos
- Asegúrate de que `tsconfig.json` esté configurado correctamente

### 2. Error de imports
- Verifica que todos los componentes estén exportados correctamente
- Asegúrate de que las rutas de imports sean correctas (`@/components/...`)

### 3. Error de imágenes
- Verifica que `logo.png` y `logo2.png` existan en `/public`
- Asegúrate de que las rutas de imágenes sean correctas

### 4. Error de dependencias
- Ejecuta `npm install` para asegurar que todas las dependencias estén instaladas

## Para verificar localmente:

```bash
npm run build
```

Esto te mostrará los errores de compilación antes de hacer push.

