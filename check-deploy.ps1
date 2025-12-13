# Script de verificación pre-deploy
# Verifica que todo esté listo para el deploy

Write-Host "🔍 Verificando proyecto para deploy..." -ForegroundColor Cyan
Write-Host ""

$errors = @()
$warnings = @()

# Verificar package.json
Write-Host "📦 Verificando package.json..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Write-Host "  ✅ package.json encontrado" -ForegroundColor Green
} else {
    $errors += "package.json no encontrado"
    Write-Host "  ❌ package.json no encontrado" -ForegroundColor Red
}

# Verificar next.config.js
Write-Host "⚙️ Verificando next.config.js..." -ForegroundColor Yellow
if (Test-Path "next.config.js") {
    Write-Host "  ✅ next.config.js encontrado" -ForegroundColor Green
} else {
    $warnings += "next.config.js no encontrado (usará configuración por defecto)"
    Write-Host "  ⚠️ next.config.js no encontrado" -ForegroundColor Yellow
}

# Verificar vercel.json
Write-Host "🚀 Verificando vercel.json..." -ForegroundColor Yellow
if (Test-Path "vercel.json") {
    Write-Host "  ✅ vercel.json encontrado" -ForegroundColor Green
} else {
    $warnings += "vercel.json no encontrado (Vercel usará configuración por defecto)"
    Write-Host "  ⚠️ vercel.json no encontrado" -ForegroundColor Yellow
}

# Verificar archivos esenciales
Write-Host "📁 Verificando estructura de archivos..." -ForegroundColor Yellow
$essentialFiles = @(
    "app/layout.tsx",
    "app/page.tsx",
    "components/Header.tsx",
    "components/Footer.tsx",
    "public/logo.png"
)

foreach ($file in $essentialFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file" -ForegroundColor Green
    } else {
        $errors += "$file no encontrado"
        Write-Host "  ❌ $file no encontrado" -ForegroundColor Red
    }
}

# Verificar node_modules
Write-Host "📚 Verificando dependencias..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "  ✅ node_modules encontrado" -ForegroundColor Green
} else {
    $warnings += "node_modules no encontrado. Ejecuta 'npm install'"
    Write-Host "  ⚠️ node_modules no encontrado" -ForegroundColor Yellow
}

# Intentar build de prueba
Write-Host ""
Write-Host "🔨 Verificando build..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    try {
        Write-Host "  Ejecutando 'npm run build'..." -ForegroundColor Gray
        $buildOutput = npm run build 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  ✅ Build exitoso" -ForegroundColor Green
        } else {
            $errors += "Build falló. Revisa los errores arriba."
            Write-Host "  ❌ Build falló" -ForegroundColor Red
        }
    } catch {
        $warnings += "No se pudo ejecutar build. Verifica manualmente con 'npm run build'"
        Write-Host "  ⚠️ No se pudo verificar build" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ⏭️ Omitiendo build (node_modules no encontrado)" -ForegroundColor Gray
}

# Resumen
Write-Host ""
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 RESUMEN" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

if ($errors.Count -eq 0) {
    Write-Host "✅ Proyecto listo para deploy!" -ForegroundColor Green
} else {
    Write-Host "❌ Se encontraron errores:" -ForegroundColor Red
    foreach ($error in $errors) {
        Write-Host "  • $error" -ForegroundColor Red
    }
}

if ($warnings.Count -gt 0) {
    Write-Host ""
    Write-Host "⚠️ Advertencias:" -ForegroundColor Yellow
    foreach ($warning in $warnings) {
        Write-Host "  • $warning" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Si hay errores, corrígelos antes de hacer deploy" -ForegroundColor White
Write-Host "2. Haz commit y push a GitHub" -ForegroundColor White
Write-Host "3. Conecta el repositorio con Vercel" -ForegroundColor White
Write-Host "4. Configura tu dominio en Vercel" -ForegroundColor White
Write-Host ""
Write-Host "Ver DEPLOY.md para instrucciones detalladas" -ForegroundColor Yellow

