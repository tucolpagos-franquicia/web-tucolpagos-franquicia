# Solución Completa: Remover .next y Actualizar Deployment

## Problema Identificado
Los archivos de `.next/` están siendo incluidos en los commits, lo que impide que Vercel detecte los cambios reales y actualice la página.

## Solución Paso a Paso

### 1. Remover .next del Commit Actual

**En GitHub Desktop:**

1. Abre GitHub Desktop
2. Si tienes un commit pendiente que incluye archivos de `.next/`:
   - Ve a **History**
   - Encuentra el commit más reciente
   - Haz clic derecho → **Revert this commit**
   - O simplemente **deselecciona** todos los archivos de `.next/` en la pestaña **Changes**

3. Si ya hiciste push:
   - Ve a **Repository → Open in Command Prompt**
   - Ejecuta:
     ```bash
     git rm -r --cached .next
     git commit -m "Remover archivos de build .next"
     git push
     ```

### 2. Hacer Commit Solo de Archivos Fuente

**Asegúrate de incluir SOLO estos archivos:**
- ✅ `components/sections/Hero.tsx` (con "Potencia tu Negocio")
- ✅ `components/sections/Commissions.tsx` (con $1M-$2M, $3M-$4M, $5M+)
- ✅ `app/layout.tsx`
- ✅ `vercel.json`
- ✅ `.gitignore` (actualizado)
- ✅ Cualquier otro archivo fuente que hayas modificado

**NO incluyas:**
- ❌ Cualquier archivo dentro de `.next/`
- ❌ Archivos de `node_modules/`
- ❌ Archivos de cache

### 3. Hacer Push y Verificar

1. Haz commit con el mensaje: "Actualizar Hero y proyección de ingresos (sin archivos de build)"
2. Haz push a GitHub
3. Espera 1-2 minutos
4. Verifica en Vercel que el deployment se haya iniciado
5. Visita la página y verifica los cambios

### 4. Verificar que .gitignore esté funcionando

El archivo `.gitignore` ya está actualizado. Después de remover `.next`, los archivos nuevos de `.next/` no deberían aparecer en futuros commits.

## Archivos que DEBEN estar en el commit:

```
components/sections/Hero.tsx
components/sections/Commissions.tsx
app/layout.tsx
app/page.tsx
app/globals.css
vercel.json
.gitignore
package.json
tsconfig.json
next.config.js
tailwind.config.js
postcss.config.js
.eslintrc.json
```

## Archivos que NO deben estar:

```
.next/ (cualquier archivo dentro)
node_modules/ (cualquier archivo dentro)
*.log
.DS_Store
```

