# Guía: Configurar DNS para tucolpagosfranquicia.com

## Problema Actual
El dominio `tucolpagosfranquicia.com` muestra "Invalid Configuration" en Vercel porque los registros DNS no están apuntando correctamente a Vercel.

## Solución: Configurar Registros DNS

### Paso 1: Obtener los valores de DNS de Vercel

1. En Vercel, ve a **Settings → Domains**
2. Haz clic en el dominio `tucolpagosfranquicia.com` (el que tiene el error)
3. Vercel te mostrará los registros DNS que necesitas configurar
4. Anota estos valores (generalmente son algo como):
   - **Tipo A**: `76.76.21.21` (o similar)
   - **Tipo CNAME**: `cname.vercel-dns.com` (o similar)

### Paso 2: Configurar DNS en tu Proveedor de Dominio

#### Si usas Hostinger:

1. Inicia sesión en **Hostinger** (hpanel.hostinger.com)
2. Ve a **Dominios → Administrar**
3. Selecciona `tucolpagosfranquicia.com`
4. Ve a **DNS / Zona de nombres**
5. Configura los siguientes registros:

   **Para el dominio raíz (sin www):**
   - **Tipo**: `A`
   - **Nombre**: `@` o `tucolpagosfranquicia.com`
   - **Valor**: La IP que Vercel te proporcionó (ej: `76.76.21.21`)
   - **TTL**: `3600` (o el que recomiende Vercel)

   **Para el subdominio www:**
   - **Tipo**: `CNAME`
   - **Nombre**: `www`
   - **Valor**: El CNAME que Vercel te proporcionó (ej: `cname.vercel-dns.com`)
   - **TTL**: `3600`

### Paso 3: Verificar en Vercel

1. Después de configurar los DNS, vuelve a Vercel
2. En **Settings → Domains**, haz clic en **"Refresh"** o **"Verify"** en el dominio `tucolpagosfranquicia.com`
3. Espera 5-10 minutos para que los DNS se propaguen
4. El estado debería cambiar de "Invalid Configuration" a "Valid Configuration"

### Paso 4: Verificar la Redirección

Una vez que el dominio esté validado:
- `tucolpagosfranquicia.com` debería redirigir automáticamente a `www.tucolpagosfranquicia.com`
- No deberías ver más alertas de seguridad

## Notas Importantes

- **Propagación DNS**: Los cambios DNS pueden tardar entre 5 minutos y 48 horas en propagarse completamente
- **Certificado SSL**: Una vez validado el dominio, Vercel generará automáticamente el certificado SSL
- **Redirección 301**: Ya está configurada en Vercel, solo necesita que el dominio esté validado

## Si el Problema Persiste

1. Verifica que no haya otros registros DNS conflictivos
2. Asegúrate de que el dominio esté desbloqueado (no en transferencia)
3. Contacta a Vercel support si después de 24 horas sigue sin validarse



