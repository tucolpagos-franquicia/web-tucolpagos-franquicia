# 🚀 Quick Start - Deploy TuColpagos

## ✅ Ya tienes GitHub conectado - ¡Perfecto!

Ahora solo necesitas conectar con Vercel para que tu página esté en línea.

---

## Paso 1: Verificar que todo esté listo

Ejecuta el script de verificación:

```powershell
.\check-deploy.ps1
```

Este script verificará que:
- ✅ Todos los archivos estén presentes
- ✅ El build funcione correctamente
- ✅ La configuración esté lista

---

## Paso 2: Conectar con Vercel (5 minutos)

### 2.1 Crear cuenta en Vercel

1. Ve a: **https://vercel.com**
2. Click en **"Sign Up"**
3. Elige **"Continue with GitHub"** (más fácil)
4. Autoriza Vercel a acceder a tus repositorios

### 2.2 Importar tu proyecto

1. En el dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. Busca tu repositorio: `web-tucolpagos-franquicia`
3. Click en **"Import"**

### 2.3 Configurar el proyecto

Vercel detectará automáticamente:
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`

**No necesitas cambiar nada**, solo click en **"Deploy"**

### 2.4 ¡Listo!

En 1-2 minutos tendrás:
- ✅ Tu página en línea
- ✅ URL temporal: `tu-proyecto.vercel.app`
- ✅ HTTPS automático
- ✅ CDN global

---

## Paso 3: Conectar tu dominio (desde WordPress)

### 3.1 En Vercel

1. Ve a tu proyecto → **Settings** → **Domains**
2. Agrega tu dominio: `tucolpagosfranquicia.com` (o el que uses)
3. Vercel te dará instrucciones de DNS

### 3.2 En WordPress (Panel de DNS)

Tienes dos opciones:

**Opción A: Subdominio (www)**
- Agrega registro **CNAME**:
  - Nombre: `www`
  - Valor: `cname.vercel-dns.com`

**Opción B: Dominio raíz (@)**
- Agrega registro **A**:
  - Nombre: `@`
  - Valor: `76.76.21.21` (IP de Vercel - puede cambiar)

### 3.3 Verificar dominio

1. Vuelve a Vercel
2. Espera a que aparezca "Valid Configuration"
3. ¡Listo! Tu dominio está conectado

---

## Paso 4: Workflow de actualización

### Actualización automática (recomendado)

Cada vez que hagas cambios:

```powershell
# 1. Haces cambios en Cursor
# 2. Subes a GitHub (desde GitHub Desktop o git)
# 3. Vercel despliega automáticamente en 1-2 minutos
```

### Actualización manual

Si prefieres controlar cuándo se despliega:

1. Haz tus cambios en Cursor
2. **NO hagas push** hasta que quieras desplegar
3. Cuando estés listo: push a GitHub
4. Vercel detecta el cambio y despliega

---

## 🎯 Comandos Útiles

```powershell
# Verificar proyecto
.\check-deploy.ps1

# Build local (probar antes de deploy)
npm run build

# Desarrollo local
npm run dev
```

---

## ❓ Troubleshooting

### El dominio no carga
- Espera 24-48 horas para propagación DNS
- Verifica que los DNS estén correctos en Vercel
- Usa herramientas como `whatsmydns.net` para verificar

### Cambios no se reflejan
- Verifica que hayas hecho push a GitHub
- Revisa el dashboard de Vercel para ver el estado del deploy
- Limpia caché del navegador (Ctrl+Shift+R)

### Errores de build
- Revisa los logs en Vercel
- Prueba `npm run build` localmente primero
- Verifica que todas las dependencias estén en `package.json`

---

## 📞 ¿Necesitas ayuda?

Si algo no funciona, avísame y te ayudo a resolverlo.

