#!/bin/bash

# Azure Deployment Script for CODEBYTE
# This script automates the deployment process to Azure Static Web Apps

set -e  # Exit on error

echo "🚀 Starting Azure Deployment for CODEBYTE..."

# Configuration
RESOURCE_GROUP="codebyte-rg"
APP_NAME="codebyte-website"
LOCATION="eastus"
BRANCH="main"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check prerequisites
check_prerequisites() {
    print_info "Checking prerequisites..."
    
    if ! command -v az &> /dev/null; then
        print_error "Azure CLI is not installed. Please install from: https://docs.microsoft.com/cli/azure/install-azure-cli"
        exit 1
    fi
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install Node.js and npm."
        exit 1
    fi
    
    print_success "Prerequisites check passed"
}

# Login to Azure
azure_login() {
    print_info "Logging in to Azure..."
    az login --use-device-code
    print_success "Azure login successful"
}

# Create resource group if not exists
create_resource_group() {
    print_info "Creating/checking resource group: $RESOURCE_GROUP..."
    az group create --name $RESOURCE_GROUP --location $LOCATION > /dev/null 2>&1 || true
    print_success "Resource group ready"
}

# Install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    npm ci
    print_success "Dependencies installed"
}

# Build application
build_app() {
    print_info "Building application for production..."
    npm run build
    print_success "Build completed successfully"
}

# Deploy to Azure Static Web Apps
deploy_to_azure() {
    print_info "Deploying to Azure Static Web Apps..."
    
    # Check if staticwebapp extension is installed
    az extension show --name staticwebapp > /dev/null 2>&1 || az extension add --name staticwebapp
    
    # Deploy
    az staticwebapp create \
        --name $APP_NAME \
        --resource-group $RESOURCE_GROUP \
        --source . \
        --location $LOCATION \
        --branch $BRANCH \
        --app-location "/" \
        --api-location "" \
        --output-location "dist" \
        --skip-app-build false
    
    print_success "Deployment completed!"
}

# Main execution
main() {
    echo ""
    echo "=========================================="
    echo "  CODEBYTE Azure Deployment Script"
    echo "=========================================="
    echo ""
    
    check_prerequisites
    azure_login
    create_resource_group
    install_dependencies
    build_app
    deploy_to_azure
    
    echo ""
    echo "=========================================="
    print_success "Deployment Complete! 🎉"
    echo "=========================================="
    echo ""
    print_info "Your application is now live on Azure!"
    print_info "Check the Azure Portal for your app URL and status."
    echo ""
}

# Run main function
main
