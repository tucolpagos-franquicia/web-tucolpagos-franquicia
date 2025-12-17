# Script para sincronizar cambios con GitHub
# Ejecuta este script desde PowerShell en la carpeta del proyecto

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Sincronización con GitHub - TuColpagos" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✓ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Opciones:" -ForegroundColor Yellow
    Write-Host "1. Instala Git desde: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. O usa GitHub Desktop para hacer commit y push manualmente" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Verificando estado del repositorio..." -ForegroundColor Yellow
Write-Host ""

# Verificar si estamos en un repositorio Git
if (-not (Test-Path .git)) {
    Write-Host "✗ Esta carpeta no es un repositorio Git" -ForegroundColor Red
    Write-Host ""
    Write-Host "Inicializa el repositorio con:" -ForegroundColor Yellow
    Write-Host "  git init" -ForegroundColor White
    Write-Host "  git remote add origin [URL_DEL_REPOSITORIO]" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Mostrar estado
Write-Host "Archivos modificados:" -ForegroundColor Cyan
git status --short
Write-Host ""

# Preguntar si continuar
$continuar = Read-Host "¿Deseas continuar con el commit y push? (S/N)"
if ($continuar -ne "S" -and $continuar -ne "s") {
    Write-Host "Operación cancelada." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Agregando archivos al staging..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Creando commit..." -ForegroundColor Yellow
$mensajeCommit = "Optimización móvil: Badge MÁS POPULAR, certificaciones sin líneas, mejoras de conversión y UX"
git commit -m $mensajeCommit

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Commit creado exitosamente" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "Subiendo cambios a GitHub..." -ForegroundColor Yellow
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "✓ Cambios sincronizados exitosamente!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Vercel debería actualizar automáticamente en unos minutos." -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "✗ Error al hacer push. Verifica tu conexión y permisos." -ForegroundColor Red
        Write-Host ""
        Write-Host "Intenta manualmente con:" -ForegroundColor Yellow
        Write-Host "  git push origin main" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "✗ Error al crear commit. Verifica los cambios." -ForegroundColor Red
}

Write-Host ""


