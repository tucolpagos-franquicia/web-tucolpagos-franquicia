# Script para verificar conexión con GitHub

Write-Host "🔍 Verificando conexión con GitHub..." -ForegroundColor Cyan
Write-Host ""

# Verificar si existe carpeta .git
if (Test-Path ".git") {
    Write-Host "✅ Repositorio Git inicializado" -ForegroundColor Green
    
    # Intentar leer configuración remota
    if (Test-Path ".git\config") {
        $config = Get-Content ".git\config" -Raw
        if ($config -match "url\s*=\s*(.+)") {
            $remoteUrl = $matches[1]
            Write-Host "✅ Remote configurado: $remoteUrl" -ForegroundColor Green
        } else {
            Write-Host "⚠️ No se encontró URL remota en la configuración" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "❌ Repositorio Git NO inicializado" -ForegroundColor Red
    Write-Host "   Necesitas inicializar Git o agregar el repositorio en GitHub Desktop" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 Verificación de archivos del proyecto:" -ForegroundColor Cyan

# Verificar archivos esenciales
$essentialFiles = @(
    "package.json",
    "next.config.js",
    "app/page.tsx",
    "components/Header.tsx"
)

$allPresent = $true
foreach ($file in $essentialFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file (FALTA)" -ForegroundColor Red
        $allPresent = $false
    }
}

Write-Host ""
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 RESUMEN" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan

if (Test-Path ".git") {
    Write-Host "✅ Git está inicializado" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Para verificar en GitHub Desktop:" -ForegroundColor Cyan
    Write-Host "1. Abre GitHub Desktop" -ForegroundColor White
    Write-Host "2. Verifica que este repositorio aparezca en la lista" -ForegroundColor White
    Write-Host "3. Si aparece, click en él y verifica:" -ForegroundColor White
    Write-Host "   - Que muestre 'Current repository: web-tucolpagos-franquicia'" -ForegroundColor Gray
    Write-Host "   - Que en la parte inferior diga 'Published' o 'Push origin'" -ForegroundColor Gray
    Write-Host "4. Si hay archivos en 'Changes', haz commit y push" -ForegroundColor White
} else {
    Write-Host "❌ Git NO está inicializado" -ForegroundColor Red
    Write-Host ""
    Write-Host "📝 Pasos para conectar:" -ForegroundColor Cyan
    Write-Host "1. Abre GitHub Desktop" -ForegroundColor White
    Write-Host "2. File → Add Local Repository" -ForegroundColor White
    Write-Host "3. Selecciona esta carpeta:" -ForegroundColor White
    Write-Host "   C:\Users\joser\Documents\Jose\TuColpagos\web-tucolpagos-franquicia" -ForegroundColor Gray
    Write-Host "4. Si el repositorio existe en GitHub, GitHub Desktop lo detectará" -ForegroundColor White
    Write-Host "5. Si no existe, click en Publish repository" -ForegroundColor White
}

Write-Host ""
Write-Host "🌐 Para verificar en GitHub.com:" -ForegroundColor Cyan
Write-Host "1. Ve a: https://github.com/TU_USUARIO/web-tucolpagos-franquicia" -ForegroundColor White
Write-Host "2. Deberías ver archivos como package.json, app/, components/, etc." -ForegroundColor White
Write-Host "3. Si está vacío, necesitas hacer push desde GitHub Desktop" -ForegroundColor Yellow

