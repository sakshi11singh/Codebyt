@echo off
REM Azure Deployment Script for CODEBYT (Windows PowerShell compatible)
REM This script automates the deployment process to Azure Static Web Apps

echo ==========================================
echo   CODEBYT Azure Deployment Script
echo ==========================================
echo.

REM Configuration
set RESOURCE_GROUP=codebyte-rg
set APP_NAME=codebyte-website
set LOCATION=eastus
set BRANCH=main

echo [INFO] Checking prerequisites...

REM Check if Azure CLI is installed
where az >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Azure CLI is not installed.
    echo Please install from: https://docs.microsoft.com/cli/azure/install-azure-cli
    pause
    exit /b 1
)

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js 18+
    pause
    exit /b 1
)

echo [SUCCESS] Prerequisites check passed
echo.

echo [INFO] Logging in to Azure...
call az login --use-device-code
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Azure login failed
    pause
    exit /b 1
)
echo [SUCCESS] Azure login successful
echo.

echo [INFO] Creating/checking resource group: %RESOURCE_GROUP%...
call az group create --name %RESOURCE_GROUP% --location %LOCATION% >nul 2>&1
echo [SUCCESS] Resource group ready
echo.

echo [INFO] Installing dependencies...
call npm ci
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Dependencies installation failed
    pause
    exit /b 1
)
echo [SUCCESS] Dependencies installed
echo.

echo [INFO] Building application for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
echo [SUCCESS] Build completed successfully
echo.

echo [INFO] Deploying to Azure Static Web Apps...

REM Check if staticwebapp extension is installed
az extension show --name staticwebapp >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Installing staticwebapp extension...
    call az extension add --name staticwebapp
)

REM Deploy
call az staticwebapp create ^
    --name %APP_NAME% ^
    --resource-group %RESOURCE_GROUP% ^
    --source . ^
    --location %LOCATION% ^
    --branch %BRANCH% ^
    --app-location "/" ^
    --api-location "" ^
    --output-location "dist" ^
    --skip-app-build false

if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Deployment failed
    pause
    exit /b 1
)

echo.
echo ==========================================
echo [SUCCESS] Deployment Complete!
echo ==========================================
echo.
echo Your application is now live on Azure!
echo Check the Azure Portal for your app URL and status.
echo.

pause
