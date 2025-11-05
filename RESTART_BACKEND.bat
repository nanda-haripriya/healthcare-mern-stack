@echo off
echo ========================================
echo RESTARTING BACKEND SERVER
echo ========================================
echo.
echo Stopping any running backend server...
taskkill /F /IM node.exe /FI "WINDOWTITLE eq *backend*" 2>nul
timeout /t 2 /nobreak >nul
echo.
echo Starting backend server with NEW code...
cd backend
start "Backend Server" cmd /k "npm start"
echo.
echo ========================================
echo Backend server restarted!
echo Check the new window for server status
echo ========================================
echo.
echo Now test the feature:
echo 1. Go to http://localhost:3000
echo 2. Book a doctor at 5:00 PM (First booking)
echo 3. Try to book SAME doctor at 5:00 PM again
echo 4. You will see: "Doctor is busy at this time"
echo.
pause
