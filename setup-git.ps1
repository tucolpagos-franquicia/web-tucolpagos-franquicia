# Script de configuración inicial de Git
# Ejecuta este script después de instalar Git

Write-Host "🔧 Configurando Git para TuColpagos..." -ForegroundColor Green
Write-Host ""

# Verificar si Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git no está instalado o no está en PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor instala Git desde:" -ForegroundColor Yellow
    Write-Host "https://git-scm.com/download/win" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "O instala GitHub Desktop desde:" -ForegroundColor Yellow
    Write-Host "https://desktop.github.com/" -ForegroundColor Cyan
    exit 1
}

Write-Host ""
Write-Host "📝 Configuración de Git" -ForegroundColor Cyan
Write-Host ""

# Solicitar información del usuario
$userName = Read-Host "Ingresa tu nombre completo (para commits)"
$userEmail = Read-Host "Ingresa tu email (para commits)"

# Configurar Git
Write-Host ""
Write-Host "⚙️ Configurando Git..." -ForegroundColor Yellow
git config --global user.name "$userName"
git config --global user.email "$userEmail"

Write-Host "✅ Git configurado correctamente" -ForegroundColor Green
Write-Host ""

# Verificar si ya es un repositorio Git
if (Test-Path ".git") {
    Write-Host "ℹ️ Este directorio ya es un repositorio Git" -ForegroundColor Yellow
} else {
    Write-Host "📦 Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Repositorio inicializado" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Crea un repositorio en GitHub (ve a https://github.com/new)" -ForegroundColor White
Write-Host "2. Copia la URL del repositorio (ej: https://github.com/TU_USUARIO/web-tucolpagos-franquicia.git)" -ForegroundColor White
Write-Host "3. Ejecuta estos comandos:" -ForegroundColor White
Write-Host ""
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Gray
Write-Host "   git remote add origin https://github.com/TU_USUARIO/web-tucolpagos-franquicia.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 O usa GitHub Desktop para hacerlo visualmente" -ForegroundColor Yellow

