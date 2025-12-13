# Guía de Deploy - TuColpagos Franquicia

Esta guía te ayudará a conectar tu página Next.js con WordPress y mantener actualizaciones desde Cursor.

## Opción 1: Vercel (Recomendado) - Deploy Automático

### Ventajas:
- ✅ Deploy automático desde GitHub
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Actualizaciones instantáneas
- ✅ Dominio personalizado fácil

### Pasos:

#### 1. Preparar el repositorio en GitHub

```bash
# Si aún no tienes git inicializado
git init
git add .
git commit -m "Initial commit"

# Crear repositorio en GitHub y luego:
git remote add origin https://github.com/TU_USUARIO/web-tucolpagos-franquicia.git
git branch -M main
git push -u origin main
```

#### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta (puedes usar GitHub)
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Click en "Deploy"

#### 3. Conectar tu dominio desde WordPress

**En WordPress (cPanel o panel de dominio):**
1. Ve a la configuración de DNS
2. Agrega un registro CNAME:
   - **Nombre**: `www` (o el subdominio que quieras)
   - **Valor**: `cname.vercel-dns.com`
3. O agrega un registro A:
   - **Nombre**: `@` (para el dominio raíz)
   - **Valor**: IP de Vercel (te la dará Vercel en la configuración de dominio)

**En Vercel:**
1. Ve a tu proyecto → Settings → Domains
2. Agrega tu dominio (ej: `tucolpagosfranquicia.com`)
3. Sigue las instrucciones para verificar el dominio

#### 4. Workflow de actualización

**Actualización automática:**
```bash
# Haces cambios en Cursor
git add .
git commit -m "Descripción de cambios"
git push origin main
# Vercel despliega automáticamente en 1-2 minutos
```

**Actualización manual (si prefieres controlar cuándo):**
- Simplemente no hagas push hasta que quieras desplegar
- O usa branches: `git push origin main` solo cuando quieras deploy

---

## Opción 2: Export Estático + WordPress (Subida Manual)

Si prefieres mantener todo en WordPress, puedes exportar el sitio como estático y subirlo.

### Pasos:

#### 1. Configurar Next.js para export estático

Ya está configurado en `next.config.js` si es necesario. Para exportar:

```bash
npm run build
```

#### 2. Script de deploy manual

Usa el script `deploy-manual.sh` (o `deploy-manual.ps1` para Windows) que crearemos.

#### 3. Subir a WordPress

- Vía FTP: Sube la carpeta `out/` a tu hosting WordPress
- Vía cPanel: Usa el File Manager
- Vía plugin: Algunos plugins permiten subir archivos estáticos

---

## Opción 3: CI/CD con GitHub Actions

Para más control, puedes configurar GitHub Actions que despliegue cuando tú lo indiques.

Ver archivo `.github/workflows/deploy.yml` (se creará si eliges esta opción)

---

## Recomendación

**Usa Opción 1 (Vercel)** porque:
- Es gratis para proyectos personales
- Deploy automático desde GitHub
- Mantienes control desde Cursor
- Solo necesitas cambiar DNS en WordPress
- WordPress puede seguir funcionando para otras cosas

---

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Ver build localmente
npm run start

# Deploy manual (si usas script)
./deploy-manual.sh
```

---

## Troubleshooting

### El dominio no carga
- Verifica que los DNS estén configurados correctamente
- Espera 24-48 horas para propagación DNS
- Verifica en Vercel que el dominio esté verificado

### Cambios no se reflejan
- Verifica que hayas hecho push a GitHub
- Revisa el dashboard de Vercel para ver el estado del deploy
- Limpia caché del navegador

### Errores de build
- Revisa los logs en Vercel
- Prueba `npm run build` localmente primero
- Verifica que todas las dependencias estén en `package.json`

