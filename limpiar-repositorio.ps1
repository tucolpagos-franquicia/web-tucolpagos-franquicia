# Script para limpiar .next/ del repositorio Git
# Ejecuta este script desde GitHub Desktop: Repository -> Open in Command Prompt

Write-Host "Limpiando archivos de build del repositorio..." -ForegroundColor Yellow

# Remover .next/ del tracking de Git
git rm -r --cached .next 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ .next/ removido del tracking" -ForegroundColor Green
} else {
    Write-Host "ℹ .next/ no estaba en el tracking (esto está bien)" -ForegroundColor Cyan
}

# Verificar estado
Write-Host "`nEstado del repositorio:" -ForegroundColor Yellow
git status --short | Select-Object -First 20

Write-Host "`n✓ Limpieza completada" -ForegroundColor Green
Write-Host "`nAhora haz commit y push desde GitHub Desktop" -ForegroundColor Cyan



