@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

where python >nul 2>&1
if %errorlevel%==0 (
  python "%~dp0setup-jornada.py"
  goto :done
)

where py >nul 2>&1
if %errorlevel%==0 (
  py "%~dp0setup-jornada.py"
  goto :done
)

echo Nao achei Python neste computador.
echo Instale Python ou rode: py setup-jornada.py
exit /b 1

:done
echo.
echo Pasta: %USERPROFILE%\Desktop\AI-First-Operations-Leadership-Jornada
pause
