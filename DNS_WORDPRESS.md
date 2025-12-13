# 🔧 Configurar DNS en WordPress - Guía Visual

## Ubicaciones Comunes de DNS en WordPress

### Si tu hosting es:
- **cPanel** → Zona DNS / DNS Zone Editor
- **Cloudflare** → DNS en el dashboard
- **GoDaddy** → DNS Management
- **Namecheap** → Advanced DNS
- **Hostinger** → Zona DNS

---

## Paso a Paso: cPanel (Más Común)

### 1. Acceder a cPanel
```
URL: tudominio.com/cpanel
O desde tu hosting: Panel de control → cPanel
```

### 2. Buscar "Zona DNS"
En cPanel busca:
- **"Zona DNS"** (en español)
- **"DNS Zone Editor"** (en inglés)
- **"Advanced DNS Zone Editor"**

### 3. Seleccionar tu Dominio
- Selecciona tu dominio de la lista
- Click en **"Manage"** o **"Gestionar"**

### 4. Agregar Registro CNAME (para www)

**Campos a llenar:**
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
TTL: 3600 (o predeterminado)
```

**Pasos:**
1. Click en **"Add Record"** o **"Añadir Registro"**
2. Selecciona **CNAME** en el dropdown "Tipo"
3. En "Nombre" escribe: `www`
4. En "Valor" o "Punto" escribe: `cname.vercel-dns.com`
5. TTL déjalo en 3600 (o predeterminado)
6. Click en **"Add Record"** o **"Añadir"**

### 5. Agregar Registro A (para dominio raíz)

**Campos a llenar:**
```
Tipo: A
Nombre: @ (o vacío, o tu dominio sin www)
Valor: 76.76.21.21 (o la IP que Vercel te dio)
TTL: 3600 (o predeterminado)
```

**Pasos:**
1. Click en **"Add Record"** o **"Añadir Registro"**
2. Selecciona **A** en el dropdown "Tipo"
3. En "Nombre" escribe: `@` (o déjalo vacío)
4. En "Valor" o "Dirección" escribe: `76.76.21.21` (IP de Vercel)
5. TTL déjalo en 3600
6. Click en **"Add Record"** o **"Añadir"**

### 6. Verificar Registros Existentes

**IMPORTANTE:** Si ya existen registros A o CNAME para tu dominio:
- **NO los elimines** si apuntan a WordPress (puedes tener ambos)
- O **reemplázalos** si quieres que solo apunte a Vercel
- Si tienes dudas, déjalos y agrega los nuevos

### 7. Guardar y Esperar

- Los cambios se guardan automáticamente
- Espera **15 minutos a 4 horas** para propagación
- Verifica en Vercel el estado

---

## Ejemplo Visual de Registros DNS

Después de configurar, deberías ver algo así:

```
Tipo    Nombre    Valor                    TTL
----    ------    -----                    ---
A       @         76.76.21.21             3600
CNAME   www       cname.vercel-dns.com     3600
```

---

## Verificar que Funcionó

### Opción 1: En Vercel
1. Ve a Vercel → Settings → Domains
2. Debería decir: **"Valid Configuration"** ✅

### Opción 2: Con Herramienta Online
1. Ve a: https://whatsmydns.net
2. Busca tu dominio
3. Verifica que los registros A y CNAME sean correctos

### Opción 3: Probar en Navegador
1. Espera 30 minutos mínimo
2. Abre: `tudominio.com`
3. Deberías ver tu página de Next.js

---

## ⚠️ Errores Comunes

### Error: "El registro ya existe"
- **Solución**: Edita el registro existente en lugar de crear uno nuevo
- O elimina el antiguo y crea uno nuevo

### Error: "TTL inválido"
- **Solución**: Usa 3600 (1 hora) o déjalo en predeterminado

### Error: "Nombre inválido"
- **Solución**: 
  - Para www: escribe exactamente `www`
  - Para raíz: escribe `@` o déjalo vacío

### El dominio no carga
- **Solución**: 
  - Espera más tiempo (hasta 48 horas)
  - Verifica que los valores sean exactos
  - Limpia caché del navegador

---

## 📞 ¿Necesitas Ayuda Específica?

Si tu hosting es diferente a cPanel, avísame cuál usas y te doy instrucciones específicas:
- Cloudflare
- GoDaddy
- Namecheap
- Hostinger
- Otro

