# 📤 Cómo Subir tu Proyecto a GitHub

## Si usas GitHub Desktop (Recomendado - Más Fácil)

### Paso 1: Abrir GitHub Desktop
1. Abre **GitHub Desktop**
2. Si no lo tienes instalado: https://desktop.github.com/

### Paso 2: Agregar el Repositorio Local
1. En GitHub Desktop, click en **"File"** → **"Add Local Repository"**
2. O click en el botón **"+"** → **"Add Existing Repository"**
3. Navega a la carpeta: `C:\Users\joser\Documents\Jose\TuColpagos\web-tucolpagos-franquicia`
4. Click en **"Add Repository"**

### Paso 3: Verificar Archivos
1. En GitHub Desktop verás una lista de archivos en la pestaña **"Changes"**
2. Deberías ver todos los archivos de tu proyecto listos para subir

### Paso 4: Hacer Commit
1. En la parte inferior izquierda, escribe un mensaje como: **"Initial commit: Landing page TuColpagos"**
2. Click en el botón **"Commit to main"** (o la rama que tengas)

### Paso 5: Publicar/Subir a GitHub
1. Si el repositorio aún no está en GitHub:
   - Click en **"Publish repository"** (botón arriba)
   - Elige el nombre: `web-tucolpagos-franquicia`
   - Elige si quieres que sea **Private** o **Public**
   - Click en **"Publish repository"**

2. Si el repositorio ya existe en GitHub pero está vacío:
   - Click en **"Push origin"** (botón arriba)
   - O **"Push"** en la barra de herramientas

### Paso 6: Verificar en GitHub
1. Ve a tu repositorio en GitHub: `https://github.com/TU_USUARIO/web-tucolpagos-franquicia`
2. Deberías ver todos los archivos ahora

---

## Si usas Git desde Línea de Comandos

### Paso 1: Verificar que Git esté instalado
```powershell
git --version
```

Si no está instalado:
- Descarga desde: https://git-scm.com/download/win
- O instala GitHub Desktop (incluye Git)

### Paso 2: Inicializar Git (si no está inicializado)
```powershell
cd C:\Users\joser\Documents\Jose\TuColpagos\web-tucolpagos-franquicia
git init
```

### Paso 3: Agregar todos los archivos
```powershell
git add .
```

### Paso 4: Hacer commit
```powershell
git commit -m "Initial commit: Landing page TuColpagos"
```

### Paso 5: Conectar con GitHub
```powershell
git remote add origin https://github.com/TU_USUARIO/web-tucolpagos-franquicia.git
```

(Reemplaza `TU_USUARIO` con tu usuario de GitHub)

### Paso 6: Subir a GitHub
```powershell
git branch -M main
git push -u origin main
```

Si te pide autenticación, usa un **Personal Access Token** (no tu contraseña).

---

## Verificar que Funcionó

1. Ve a tu repositorio en GitHub
2. Deberías ver archivos como:
   - `package.json`
   - `next.config.js`
   - `app/`
   - `components/`
   - `public/`
   - etc.

---

## Si el Repositorio ya Existe pero Está Vacío

Si ya creaste el repositorio en GitHub pero está vacío:

### Con GitHub Desktop:
1. Abre GitHub Desktop
2. File → Clone Repository → GitHub.com
3. Selecciona tu repositorio `web-tucolpagos-franquicia`
4. Elige dónde clonarlo
5. Copia todos los archivos de tu proyecto actual a la carpeta clonada
6. Vuelve a GitHub Desktop
7. Verás todos los archivos en "Changes"
8. Escribe un mensaje y haz "Commit to main"
9. Click en "Push origin"

---

## Archivos que NO Debes Subir

GitHub Desktop automáticamente ignora:
- `node_modules/` (se regenera con `npm install`)
- `.next/` (se genera con `npm run build`)
- `.env` (archivos de configuración local)

Estos están en `.gitignore` y es correcto.

---

## ¿Necesitas Ayuda?

Si tienes algún problema:
1. **GitHub Desktop no detecta cambios**: Asegúrate de estar en la carpeta correcta
2. **Error al hacer push**: Verifica que tengas permisos en el repositorio
3. **Repositorio sigue vacío**: Asegúrate de haber hecho "Commit" antes de "Push"

Avísame qué error específico ves y te ayudo a resolverlo.

