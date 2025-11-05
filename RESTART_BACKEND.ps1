Write-Host "========================================" -ForegroundColor Cyan
Write-Host "RESTARTING BACKEND SERVER" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Stopping any running node processes..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "Starting backend server with NEW code..." -ForegroundColor Green
Set-Location -Path "backend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Backend server restarted!" -ForegroundColor Green
Write-Host "Check the new window for server status" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Now test the feature:" -ForegroundColor Yellow
Write-Host "1. Go to http://localhost:3000"
Write-Host "2. Book a doctor at 5:00 PM (First booking)"
Write-Host "3. Try to book SAME doctor at 5:00 PM again"
Write-Host "4. You will see: 'Doctor is busy at this time'" -ForegroundColor Green
Write-Host ""
