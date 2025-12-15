# Script para verificar que los cambios estén correctos

Write-Host "=== VERIFICACION DE CAMBIOS ===" -ForegroundColor Cyan
Write-Host ""

# Verificar Hero.tsx
Write-Host "1. Verificando Hero.tsx..." -ForegroundColor Yellow
$heroContent = Get-Content "components\sections\Hero.tsx" -Raw
if ($heroContent -match "Potencia tu Negocio") {
    Write-Host "   OK Hero.tsx tiene 'Potencia tu Negocio'" -ForegroundColor Green
} else {
    Write-Host "   ERROR Hero.tsx NO tiene 'Potencia tu Negocio'" -ForegroundColor Red
}

# Verificar Commissions.tsx
Write-Host "2. Verificando Commissions.tsx..." -ForegroundColor Yellow
$commissionsContent = Get-Content "components\sections\Commissions.tsx" -Raw
$has1M = $commissionsContent -match '\$1M - \$2M'
$has3M = $commissionsContent -match '\$3M - \$4M'
$has5M = $commissionsContent -match '\$5M\+'
if ($has1M -and $has3M -and $has5M) {
    Write-Host "   OK Commissions.tsx tiene los valores correctos" -ForegroundColor Green
} else {
    Write-Host "   ERROR Commissions.tsx NO tiene los valores correctos" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== PROXIMOS PASOS ===" -ForegroundColor Cyan
Write-Host "1. Abre GitHub Desktop" -ForegroundColor White
Write-Host "2. Verifica que estos archivos aparezcan en 'Changes'" -ForegroundColor White
Write-Host "3. Haz commit y push" -ForegroundColor White
Write-Host "4. Verifica en GitHub que los cambios esten ahi" -ForegroundColor White
