# Script de Deploy Manual para Windows PowerShell
# Este script construye el proyecto y prepara los archivos para subir a WordPress

Write-Host "🚀 Iniciando deploy manual..." -ForegroundColor Green

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto." -ForegroundColor Red
    exit 1
}

# Limpiar builds anteriores
Write-Host "🧹 Limpiando builds anteriores..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
}
if (Test-Path "out") {
    Remove-Item -Recurse -Force out
}

# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
npm install

# Build del proyecto
Write-Host "🔨 Construyendo proyecto..." -ForegroundColor Yellow
npm run build

# Verificar que el build fue exitoso
if (-not (Test-Path ".next")) {
    Write-Host "❌ Error: El build falló. Revisa los errores arriba." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completado exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Los archivos están listos en la carpeta .next/" -ForegroundColor White
Write-Host "2. Si necesitas export estático, configura next.config.js con output: 'export'" -ForegroundColor White
Write-Host "3. Sube los archivos a tu hosting WordPress vía FTP o cPanel" -ForegroundColor White
Write-Host ""
Write-Host "💡 Tip: Para export estático, ejecuta 'npm run build' después de configurar next.config.js" -ForegroundColor Yellow

