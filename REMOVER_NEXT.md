# Cómo Remover .next del Repositorio

## Problema
Los archivos de `.next/` están siendo incluidos en los commits. Estos archivos son generados automáticamente durante el build y NO deben estar en el repositorio.

## Solución

### Paso 1: Remover .next del tracking en GitHub Desktop

1. Abre **GitHub Desktop**
2. Ve a la pestaña **Changes**
3. Busca todos los archivos que estén dentro de `.next/`
4. **Deselecciona** todos esos archivos (no los incluyas en el commit)
5. Si ya hiciste commit, necesitas deshacerlo o hacer un nuevo commit que los remueva

### Paso 2: Remover .next del repositorio (si ya está en GitHub)

**Opción A: Desde GitHub Desktop (Recomendado)**
1. En GitHub Desktop, ve a **Repository → Open in Command Prompt** (o Terminal)
2. Ejecuta estos comandos:
   ```bash
   git rm -r --cached .next
   git commit -m "Remover archivos de build .next del repositorio"
   git push
   ```

**Opción B: Desde la línea de comandos**
Si tienes Git instalado, ejecuta:
```bash
git rm -r --cached .next
git commit -m "Remover archivos de build .next del repositorio"
git push
```

### Paso 3: Verificar .gitignore

El archivo `.gitignore` ya está actualizado para ignorar `.next/`. Verifica que incluya:
```
.next/
.next
```

### Paso 4: Hacer commit solo de los archivos fuente

Cuando hagas commits futuros, asegúrate de que **SOLO** incluyas:
- ✅ Archivos `.tsx`, `.ts`, `.js`, `.json`, `.css`
- ✅ Archivos de configuración (`package.json`, `tsconfig.json`, etc.)
- ✅ Archivos en `components/`, `app/`, `public/`
- ❌ NO incluyas archivos de `.next/`
- ❌ NO incluyas archivos de `node_modules/`

### Paso 5: Verificar en GitHub

Después de hacer push, verifica en GitHub que:
- Los archivos de `.next/` ya no aparezcan en los commits
- Solo aparezcan los archivos fuente que realmente cambiaste

## ¿Por qué es importante?

1. Los archivos de `.next/` se regeneran en cada build
2. Son muy grandes y hacen el repositorio pesado
3. Pueden causar conflictos innecesarios
4. Vercel genera estos archivos automáticamente durante el deployment

