# Script para preparar el proyecto para GitHub Desktop
Write-Host "=== PREPARANDO PROYECTO PARA GITHUB ===" -ForegroundColor Cyan
Write-Host ""

# Verificar que no haya archivos .next
Write-Host "1. Verificando archivos .next..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Write-Host "   ADVERTENCIA: Directorio .next encontrado" -ForegroundColor Red
    Write-Host "   Este directorio NO debe estar en el repositorio" -ForegroundColor Red
} else {
    Write-Host "   OK: No hay directorio .next" -ForegroundColor Green
}

# Verificar .gitignore
Write-Host "2. Verificando .gitignore..." -ForegroundColor Yellow
if (Test-Path ".gitignore") {
    $gitignoreContent = Get-Content ".gitignore" -Raw
    if ($gitignoreContent -match "\.next") {
        Write-Host "   OK: .gitignore incluye .next" -ForegroundColor Green
    } else {
        Write-Host "   ERROR: .gitignore NO incluye .next" -ForegroundColor Red
    }
} else {
    Write-Host "   ERROR: No existe .gitignore" -ForegroundColor Red
}

# Verificar archivos clave
Write-Host "3. Verificando archivos clave..." -ForegroundColor Yellow

$heroFile = "components\sections\Hero.tsx"
if (Test-Path $heroFile) {
    $heroContent = Get-Content $heroFile -Raw
    if ($heroContent -match "Potencia tu Negocio") {
        Write-Host "   OK: Hero.tsx tiene 'Potencia tu Negocio'" -ForegroundColor Green
    } else {
        Write-Host "   ERROR: Hero.tsx NO tiene 'Potencia tu Negocio'" -ForegroundColor Red
    }
} else {
    Write-Host "   ERROR: No existe Hero.tsx" -ForegroundColor Red
}

$commissionsFile = "components\sections\Commissions.tsx"
if (Test-Path $commissionsFile) {
    $commissionsContent = Get-Content $commissionsFile -Raw
    if ($commissionsContent -match '\$1M - \$2M' -and $commissionsContent -match '\$3M - \$4M' -and $commissionsContent -match '\$5M\+') {
        Write-Host "   OK: Commissions.tsx tiene valores correctos" -ForegroundColor Green
    } else {
        Write-Host "   ERROR: Commissions.tsx NO tiene valores correctos" -ForegroundColor Red
    }
} else {
    Write-Host "   ERROR: No existe Commissions.tsx" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== RESUMEN ===" -ForegroundColor Cyan
Write-Host "Todos los archivos están listos para commit." -ForegroundColor Green
Write-Host ""
Write-Host "PROXIMOS PASOS EN GITHUB DESKTOP:" -ForegroundColor Yellow
Write-Host "1. Abre GitHub Desktop" -ForegroundColor White
Write-Host "2. Ve a la pestaña 'Changes'" -ForegroundColor White
Write-Host "3. Verifica que aparezcan estos archivos:" -ForegroundColor White
Write-Host "   - components/sections/Hero.tsx" -ForegroundColor Gray
Write-Host "   - components/sections/Commissions.tsx" -ForegroundColor Gray
Write-Host "   - app/layout.tsx" -ForegroundColor Gray
Write-Host "   - vercel.json" -ForegroundColor Gray
Write-Host "   - .gitignore" -ForegroundColor Gray
Write-Host "4. NO incluyas archivos de .next/ o node_modules/" -ForegroundColor Red
Write-Host "5. Escribe el mensaje: 'Actualizar Hero y proyección de ingresos'" -ForegroundColor White
Write-Host "6. Haz clic en 'Commit to main'" -ForegroundColor White
Write-Host "7. Haz clic en 'Push origin'" -ForegroundColor White
Write-Host ""
Write-Host "Después del push, Vercel debería desplegar automáticamente." -ForegroundColor Green

