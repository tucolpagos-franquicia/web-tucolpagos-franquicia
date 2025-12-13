# 🚀 Guía Rápida: Conectar Vercel con tu Proyecto

## ✅ Ya tienes GitHub y Vercel conectados - ¡Perfecto!

Ahora solo necesitas importar tu proyecto y configurar el dominio.

---

## Paso 1: Importar Proyecto en Vercel

### 1.1 Acceder a Vercel
1. Ve a: **https://vercel.com/dashboard**
2. Inicia sesión (si no lo has hecho)

### 1.2 Importar Repositorio
1. Click en **"Add New..."** (botón grande)
2. Selecciona **"Project"**
3. En la lista de repositorios, busca: **`web-tucolpagos-franquicia`**
4. Click en **"Import"** al lado del repositorio

### 1.3 Configurar Proyecto
Vercel detectará automáticamente:
- ✅ **Framework**: Next.js
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `.next`
- ✅ **Install Command**: `npm install`

**IMPORTANTE:** No cambies nada, solo verifica que esté correcto.

### 1.4 Deploy
1. Click en el botón **"Deploy"** (abajo a la derecha)
2. Espera 1-2 minutos mientras Vercel:
   - Instala dependencias
   - Hace el build
   - Despliega tu sitio

### 1.5 ¡Listo!
Verás una URL temporal como: `web-tucolpagos-franquicia.vercel.app`
**¡Tu página ya está en línea!** 🎉

---

## Paso 2: Conectar tu Dominio (desde WordPress)

### 2.1 En Vercel - Agregar Dominio
1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** (arriba)
3. Click en **"Domains"** (menú lateral)
4. En el campo de texto, escribe tu dominio: `tucolpagosfranquicia.com` (o el que uses)
5. Click en **"Add"**

### 2.2 Vercel te dará instrucciones de DNS
Vercel mostrará algo como:
- **Tipo**: CNAME
- **Nombre**: www
- **Valor**: `cname.vercel-dns.com`

O para el dominio raíz:
- **Tipo**: A
- **Nombre**: @
- **Valor**: `76.76.21.21` (IP de Vercel)

### 2.3 En WordPress - Configurar DNS
1. Accede al panel de control de tu dominio (cPanel, Cloudflare, o donde tengas el DNS)
2. Agrega el registro que Vercel te indicó:
   - Si es CNAME: Agrega registro CNAME con el nombre y valor que Vercel te dio
   - Si es A: Agrega registro A con el nombre y valor que Vercel te dio

### 2.4 Verificar en Vercel
1. Vuelve a Vercel → Settings → Domains
2. Espera unos minutos (puede tardar hasta 24 horas)
3. Verás el estado cambiar a **"Valid Configuration"** ✅

---

## Paso 3: Workflow de Actualización

### Actualización Automática (Recomendado)

Cada vez que hagas cambios:

1. **En Cursor**: Haces tus cambios
2. **Subes a GitHub**: 
   - Si usas GitHub Desktop: Click en "Commit" y "Push"
   - Si usas Git: `git add .`, `git commit -m "mensaje"`, `git push`
3. **Vercel despliega automáticamente** en 1-2 minutos
4. **Tu sitio se actualiza** sin hacer nada más

### Ver Estado del Deploy
- Ve a tu proyecto en Vercel
- Verás el historial de deploys
- Cada push a GitHub genera un nuevo deploy automático

---

## Paso 4: Verificar que Todo Funciona

### 4.1 Probar la URL Temporal
1. Abre: `tu-proyecto.vercel.app`
2. Verifica que la página cargue correctamente
3. Prueba todos los botones y enlaces

### 4.2 Probar el Dominio (después de configurar DNS)
1. Espera 24-48 horas para propagación DNS
2. Abre tu dominio: `tucolpagosfranquicia.com`
3. Debería mostrar tu página

---

## ❓ Troubleshooting

### El deploy falla
- Ve a Vercel → Tu proyecto → Deployments
- Click en el deploy fallido
- Revisa los logs de error
- Los errores más comunes:
  - Dependencias faltantes: Verifica `package.json`
  - Errores de TypeScript: Revisa los errores en los logs
  - Variables de entorno: Si usas `.env`, agrégalas en Vercel Settings → Environment Variables

### El dominio no carga
- Verifica que los DNS estén correctos
- Usa herramientas como `whatsmydns.net` para verificar propagación
- Espera 24-48 horas (propagación DNS puede tardar)
- Verifica en Vercel que el dominio esté verificado

### Cambios no se reflejan
- Verifica que hayas hecho push a GitHub
- Revisa en Vercel que el deploy se haya completado
- Limpia caché del navegador (Ctrl+Shift+R)
- Espera unos minutos (puede haber caché de CDN)

### Build exitoso pero página en blanco
- Verifica que no haya errores en la consola del navegador
- Revisa los logs de Vercel
- Asegúrate de que `app/page.tsx` esté correcto

---

## 📋 Checklist Final

- [ ] Proyecto importado en Vercel
- [ ] Deploy exitoso (URL temporal funciona)
- [ ] Dominio agregado en Vercel
- [ ] DNS configurado en WordPress/hosting
- [ ] Dominio verificado en Vercel
- [ ] Página accesible desde tu dominio
- [ ] Prueba de actualización automática funcionando

---

## 🆘 ¿Necesitas ayuda?

Si algo no funciona:
1. Revisa los logs en Vercel
2. Verifica que el build funcione localmente: `npm run build`
3. Avísame qué error específico ves y te ayudo a resolverlo

---

## 🎉 ¡Felicidades!

Una vez completado, tendrás:
- ✅ Tu página en línea
- ✅ HTTPS automático
- ✅ CDN global (carga rápida en todo el mundo)
- ✅ Deploy automático desde GitHub
- ✅ Dominio personalizado conectado

