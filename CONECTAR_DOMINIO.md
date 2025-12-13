# 🌐 Conectar Vercel con WordPress - Guía Completa

## ✅ Ya tienes:
- GitHub con archivos subidos ✅
- Vercel conectado ✅
- Necesitas: Conectar el dominio ✅

---

## Paso 1: Agregar Dominio en Vercel

### 1.1 Acceder a la Configuración del Proyecto
1. Ve a: **https://vercel.com/dashboard**
2. Click en tu proyecto: **`web-tucolpagos-franquicia`**
3. Click en **"Settings"** (arriba en el menú)
4. Click en **"Domains"** (menú lateral izquierdo)

### 1.2 Agregar tu Dominio
1. En el campo de texto, escribe tu dominio completo:
   - Ejemplo: `tucolpagosfranquicia.com`
   - O con www: `www.tucolpagosfranquicia.com`
2. Click en el botón **"Add"**

### 1.3 Vercel te dará Instrucciones de DNS
Vercel mostrará algo como esto:

**Para dominio con www:**
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**Para dominio raíz (sin www):**
```
Tipo: A
Nombre: @
Valor: 76.76.21.21
```

**O también puede mostrar:**
```
Tipo: A
Nombre: @
Valor: 76.76.19.19
```

**IMPORTANTE:** Copia exactamente lo que Vercel te muestre, puede variar.

---

## Paso 2: Configurar DNS en WordPress/Hosting

### Opción A: Si usas cPanel (más común)

1. **Accede a cPanel:**
   - Ve a: `tudominio.com/cpanel` (o la URL que te dieron)
   - O desde tu hosting: Panel de control → cPanel

2. **Buscar "Zona DNS" o "DNS Zone Editor":**
   - En cPanel busca: **"Zona DNS"** o **"DNS Zone Editor"**
   - O **"Advanced DNS Zone Editor"**

3. **Agregar Registro CNAME (para www):**
   - Click en **"Add Record"** o **"Añadir Registro"**
   - **Tipo**: Selecciona **CNAME**
   - **Nombre**: `www`
   - **Valor**: `cname.vercel-dns.com` (o el que Vercel te dio)
   - **TTL**: Deja el predeterminado (3600)
   - Click en **"Add Record"** o **"Añadir"**

4. **Agregar Registro A (para dominio raíz):**
   - Click en **"Add Record"** o **"Añadir Registro"**
   - **Tipo**: Selecciona **A**
   - **Nombre**: `@` (o deja vacío, o escribe el dominio sin www)
   - **Valor**: `76.76.21.21` (o la IP que Vercel te dio)
   - **TTL**: Deja el predeterminado (3600)
   - Click en **"Add Record"** o **"Añadir"**

5. **Guardar cambios:**
   - Los cambios se guardan automáticamente
   - Puede tardar unos minutos en aplicarse

### Opción B: Si usas Cloudflare

1. **Accede a Cloudflare:**
   - Ve a: https://dash.cloudflare.com
   - Selecciona tu dominio

2. **Ir a DNS:**
   - Click en **"DNS"** en el menú lateral

3. **Agregar Registros:**
   - Click en **"Add record"**
   - Para www: Tipo **CNAME**, Nombre `www`, Contenido `cname.vercel-dns.com`
   - Para raíz: Tipo **A**, Nombre `@`, Contenido `76.76.21.21` (IP de Vercel)
   - Click en **"Save"**

### Opción C: Si usas otro gestor de DNS

1. **Accede al panel de DNS de tu proveedor**
2. **Agrega los registros que Vercel te indicó:**
   - CNAME para www
   - A para dominio raíz (@)
3. **Guarda los cambios**

---

## Paso 3: Verificar en Vercel

### 3.1 Esperar Propagación DNS
- Los cambios DNS pueden tardar **15 minutos a 48 horas**
- Normalmente toma **1-4 horas**

### 3.2 Verificar Estado en Vercel
1. Ve a Vercel → Tu proyecto → Settings → Domains
2. Verás el estado de tu dominio:
   - **"Valid Configuration"** ✅ = Todo correcto
   - **"Invalid Configuration"** ❌ = Revisa los DNS
   - **"Pending"** ⏳ = Esperando propagación

### 3.3 Verificar que Funciona
1. Espera al menos 15-30 minutos
2. Abre tu dominio en el navegador: `tucolpagosfranquicia.com`
3. Deberías ver tu página de Next.js

---

## Paso 4: Configurar HTTPS (Automático)

Vercel configura HTTPS automáticamente:
- ✅ Certificado SSL gratuito
- ✅ Renovación automática
- ✅ Redirección HTTP → HTTPS

**No necesitas hacer nada**, Vercel lo hace automáticamente cuando el dominio está verificado.

---

## Paso 5: Configurar Redirecciones (Opcional)

Si quieres que `tudominio.com` redirija a `www.tudominio.com` (o viceversa):

1. En Vercel → Settings → Domains
2. Agrega ambos dominios (con y sin www)
3. Vercel automáticamente redirige uno al otro

---

## ❓ Troubleshooting

### El dominio no carga después de 24 horas

1. **Verifica los DNS:**
   - Usa: https://whatsmydns.net
   - Busca tu dominio
   - Verifica que los registros A y CNAME sean correctos

2. **Verifica en Vercel:**
   - Ve a Settings → Domains
   - ¿Muestra "Valid Configuration"?
   - Si no, revisa los errores que muestra

3. **Verifica que no haya conflictos:**
   - Asegúrate de que no haya otros registros A o CNAME conflictivos
   - Elimina registros antiguos si los hay

### Error: "Invalid Configuration"

1. **Verifica que los DNS sean exactos:**
   - El nombre debe ser exacto (www o @)
   - El valor debe ser exacto (IP o CNAME de Vercel)

2. **Verifica que no haya espacios:**
   - Copia y pega directamente desde Vercel

3. **Espera unos minutos:**
   - A veces tarda en detectar los cambios

### WordPress sigue mostrando en lugar de Vercel

1. **Verifica que los DNS estén correctos:**
   - Los registros A y CNAME deben apuntar a Vercel
   - No deben apuntar a WordPress

2. **Limpia caché:**
   - Limpia caché del navegador (Ctrl+Shift+R)
   - Limpia caché de DNS: `ipconfig /flushdns` (en CMD)

3. **Espera propagación:**
   - Puede tardar hasta 48 horas

---

## 📋 Checklist Final

- [ ] Dominio agregado en Vercel
- [ ] Registro CNAME configurado (para www)
- [ ] Registro A configurado (para dominio raíz)
- [ ] DNS guardados en WordPress/hosting
- [ ] Estado "Valid Configuration" en Vercel
- [ ] Dominio carga correctamente
- [ ] HTTPS funciona (https://tudominio.com)

---

## 🎯 Resumen Rápido

1. **Vercel**: Settings → Domains → Agrega tu dominio
2. **Copia los DNS** que Vercel te da
3. **WordPress/cPanel**: Agrega los registros CNAME y A
4. **Espera 1-4 horas** para propagación
5. **Verifica** en Vercel que diga "Valid Configuration"
6. **¡Listo!** Tu dominio está conectado

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:
1. Comparte qué error ves en Vercel
2. Comparte qué registros DNS configuraste
3. Verifica con whatsmydns.net si los DNS están propagados

Avísame si necesitas ayuda con algún paso específico.

