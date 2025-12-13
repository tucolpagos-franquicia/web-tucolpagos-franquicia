# Guía Completa: Configurar GitHub para TuColpagos

## Paso 1: Instalar Git

### Opción A: Instalar Git para Windows

1. **Descarga Git:**
   - Ve a: https://git-scm.com/download/win
   - Descarga la versión más reciente
   - Ejecuta el instalador

2. **Durante la instalación:**
   - Acepta las opciones por defecto
   - Asegúrate de marcar "Add Git to PATH" si aparece la opción
   - Completa la instalación

3. **Verificar instalación:**
   - Abre PowerShell o CMD
   - Ejecuta: `git --version`
   - Deberías ver algo como: `git version 2.x.x`

### Opción B: Instalar desde GitHub Desktop (Más fácil)

1. **Descarga GitHub Desktop:**
   - Ve a: https://desktop.github.com/
   - Descarga e instala GitHub Desktop
   - Esto incluye Git automáticamente

---

## Paso 2: Crear cuenta en GitHub

1. Ve a: https://github.com
2. Click en "Sign up"
3. Completa el registro (es gratis)
4. Verifica tu email

---

## Paso 3: Crear repositorio en GitHub

1. **Inicia sesión en GitHub**
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. **Configura el repositorio:**
   - **Repository name**: `web-tucolpagos-franquicia`
   - **Description**: `Landing page para TuColpagos Franquicia`
   - **Visibility**: Elige **Private** (recomendado) o **Public**
   - **NO marques** "Initialize with README" (ya tenemos archivos)
   - **NO elijas** .gitignore ni license (ya los tenemos)
4. Click en **"Create repository"**

---

## Paso 4: Conectar tu proyecto local con GitHub

### Si instalaste Git directamente:

Abre PowerShell en la carpeta del proyecto y ejecuta estos comandos:

```powershell
# 1. Inicializar git (si no está inicializado)
git init

# 2. Configurar tu nombre y email (solo la primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 3. Agregar todos los archivos
git add .

# 4. Hacer el primer commit
git commit -m "Initial commit: Landing page TuColpagos Franquicia"

# 5. Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/web-tucolpagos-franquicia.git

# 6. Cambiar a la rama main
git branch -M main

# 7. Subir el código
git push -u origin main
```

**Nota:** En el paso 7, GitHub te pedirá autenticación. Usa un **Personal Access Token** (ver Paso 5).

### Si instalaste GitHub Desktop:

1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona la carpeta: `C:\Users\joser\Documents\Jose\TuColpagos\web-tucolpagos-franquicia`
4. Click en "Publish repository"
5. Elige el nombre y visibilidad
6. Click en "Publish repository"

---

## Paso 5: Crear Personal Access Token (para Git desde línea de comandos)

Si usas Git desde PowerShell, necesitas un token:

1. **En GitHub:**
   - Click en tu foto de perfil (arriba derecha)
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click en "Generate new token (classic)"

2. **Configura el token:**
   - **Note**: `TuColpagos Deploy`
   - **Expiration**: Elige una duración (90 días recomendado)
   - **Scopes**: Marca `repo` (todos los permisos de repositorio)
   - Click en "Generate token"

3. **Copia el token** (solo se muestra una vez)
   - Guárdalo en un lugar seguro
   - Úsalo como contraseña cuando Git te pida autenticación

---

## Paso 6: Verificar que todo funciona

```powershell
# Ver el estado del repositorio
git status

# Ver los commits
git log --oneline

# Ver la conexión remota
git remote -v
```

---

## Paso 7: Workflow de actualización

Cada vez que hagas cambios y quieras actualizar:

```powershell
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar los cambios
git add .

# 3. Hacer commit con descripción
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push origin main
```

---

## Troubleshooting

### Error: "git no se reconoce"
- Git no está instalado o no está en PATH
- Reinstala Git y asegúrate de marcar "Add to PATH"
- O reinicia PowerShell después de instalar

### Error: "Authentication failed"
- Usa Personal Access Token en lugar de contraseña
- Verifica que el token tenga permisos `repo`

### Error: "remote origin already exists"
```powershell
# Elimina el remote existente
git remote remove origin
# Luego agrega el correcto
git remote add origin https://github.com/TU_USUARIO/web-tucolpagos-franquicia.git
```

### Error: "failed to push"
- Verifica que tengas permisos en el repositorio
- Asegúrate de estar en la rama correcta: `git branch`

---

## ¿Necesitas ayuda?

Si encuentras algún problema, avísame y te ayudo a resolverlo paso a paso.

