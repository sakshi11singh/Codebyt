# Azure Deployment Guide for CODEBYTE

This guide provides step-by-step instructions for deploying the CODEBYTE website to Microsoft Azure.

## 📋 Prerequisites

- Azure Account (create free account at https://azure.microsoft.com/free)
- Node.js 18+ installed
- Azure CLI installed ([Download](https://docs.microsoft.com/cli/azure/install-azure-cli))
- Git installed

## 🔧 Preparation Steps

### 1. Install Required Dependencies

```bash
npm install -g serve
npm install serve --save-dev
```

### 2. Build and Test Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production build locally
npm run preview
```

## 🚀 Deployment Options

### Option 1: Azure Static Web Apps (Recommended)

**Best for**: Simple static sites, free tier available, automatic deployments from Git

#### Steps:

1. **Login to Azure CLI**
   ```bash
   az login
   ```

2. **Install Static Web Apps Extension**
   ```bash
   az extension add --name staticwebapp
   ```

3. **Create Static Web App**
   ```bash
   az staticwebapp create \
     --name codebyte-website \
     --resource-group codebyte-rg \
     --source . \
     --location eastus \
     --branch main \
     --repo <YOUR_GIT_REPO_URL> \
     --token <GITHUB_TOKEN> \
     --app-location "/" \
     --api-location "" \
     --output-location "dist" \
     --skip-app-build false
   ```

4. **Configure Build Settings**
   The `staticwebapp.config.json` file is already configured with:
   - Build command: `npm run build`
   - Output location: `dist`
   - SPA routing support
   - Security headers
   - Caching policies

5. **Deploy**
   ```bash
   # If using GitHub Actions, push to main branch
   git push origin main
   
   # Or deploy directly
   az staticwebapp deploy --name codebyte-website --token <GITHUB_TOKEN>
   ```

---

### Option 2: Azure App Service (Web App for Linux)

**Best for**: Full control, custom domains, SSL, scaling options

#### Steps:

1. **Login to Azure**
   ```bash
   az login
   az account set --subscription "<YOUR_SUBSCRIPTION_ID>"
   ```

2. **Create Resource Group**
   ```bash
   az group create --name codebyte-rg --location eastus
   ```

3. **Create App Service Plan**
   ```bash
   az appservice plan create \
     --name codebyte-plan \
     --resource-group codebyte-rg \
     --sku B1 \
     --is-linux
   ```

4. **Create Web App**
   ```bash
   az webapp create \
     --resource-group codebyte-rg \
     --plan codebyte-plan \
     --name codebyte-webapp \
     --runtime "NODE|18-lts" \
     --deployment-local-git
   ```

5. **Configure Build Settings**
   ```bash
   az webapp config appsettings set \
     --resource-group codebyte-rg \
     --name codebyte-webapp \
     --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true
   ```

6. **Build and Deploy**
   ```bash
   # Build locally
   npm install
   npm run build
   
   # Deploy using ZIP
   zip -r dist.zip dist/
   az webapp deployment source config-zip \
     --resource-group codebyte-rg \
     --name codebyte-webapp \
     --src dist.zip
   ```

7. **Or Deploy via Git**
   ```bash
   # Add remote
   git remote add azure <DEPLOYMENT_GIT_URL>
   
   # Push to deploy
   git push azure main
   ```

---

### Option 3: Azure Storage Static Website

**Best for**: Simple hosting, low cost, CDN integration

#### Steps:

1. **Create Storage Account**
   ```bash
   az storage account create \
     --name codebytesite \
     --resource-group codebyte-rg \
     --location eastus \
     --sku Standard_LRS \
     --kind StorageV2
   ```

2. **Enable Static Website**
   ```bash
   az storage blob service-properties update \
     --account-name codebytesite \
     --static-website \
     --index-document index.html \
     --404-document index.html
   ```

3. **Build and Upload**
   ```bash
   npm install
   npm run build
   
   # Upload files
   az storage blob upload-batch \
     --account-name codebytesite \
     --destination '$web' \
     --source dist \
     --overwrite true
   ```

4. **Configure CDN (Optional)**
   ```bash
   az cdn profile create \
     --name codebyte-cdn \
     --resource-group codebyte-rg \
     --sku Standard_Microsoft
   
   az cdn endpoint create \
     --name codebyte \
     --profile-name codebyte-cdn \
     --resource-group codebyte-rg \
     --origin codebytesite.z13.web.core.windows.net \
     --origin-host-header codebytesite.z13.web.core.windows.net
   ```

---

## 🔐 Custom Domain Configuration

### For Static Web Apps:

1. Go to Azure Portal → Static Web App → Custom domains
2. Add your domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provisioned

### For App Service:

1. Go to Azure Portal → App Service → Custom domains
2. Add your domain
3. Upload SSL certificate or use App Service Managed Certificate
4. Configure DNS A record and TXT record

---

## 🌍 Environment Variables

Create environment-specific configurations:

### Production (.env.production)
```env
VITE_API_URL=https://api.codebyte.com
VITE_FORMSPREE_URL=https://formspree.io/f/maqpbrbk
VITE_SITE_URL=https://codebyte.com
```

### Staging (.env.staging)
```env
VITE_API_URL=https://api-staging.codebyte.com
VITE_FORMSPREE_URL=https://formspree.io/f/maqpbrbk
VITE_SITE_URL=https://staging.codebyte.com
```

Set in Azure:
```bash
az webapp config appsettings set \
  --resource-group codebyte-rg \
  --name codebyte-webapp \
  --settings VITE_API_URL="https://api.codebyte.com"
```

---

## 📊 Monitoring & Diagnostics

### Enable Application Insights

```bash
az monitor app-insights component create \
  --app codebyte-insights \
  --location eastus \
  --resource-group codebyte-rg \
  --application-type web
```

Configure in App Service:
```bash
az webapp config appsettings set \
  --resource-group codebyte-rg \
  --name codebyte-webapp \
  --settings APPINSIGHTS_INSTRUMENTATIONKEY=<YOUR_KEY>
```

---

## 🔄 CI/CD with GitHub Actions

Create `.github/workflows/azure-deploy.yml`:

```yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_FORMSPREE_URL: ${{ secrets.FORMSPREE_URL }}
    
    - name: Deploy to Azure
      uses: Azure/webapps-deploy@v2
      with:
        app-name: codebyte-webapp
        publish-profile: ${{ secrets.AZURE_PUBLISH_PROFILE }}
        package: ./dist
```

---

## 💰 Cost Estimation

### Free Tier (Static Web Apps)
- ✅ Free for personal projects
- ✅ Includes SSL
- ✅ Automatic deployments
- ❌ Limited to 3 environments

### Basic Tier (App Service B1)
- ~$13/month
- ✅ Custom domains
- ✅ SSL included
- ✅ 100GB bandwidth
- ✅ Auto-scaling up to 3 instances

### Production (App Service S1/S2)
- S1: ~$95/month
- S2: ~$190/month
- ✅ Higher performance
- ✅ More bandwidth
- ✅ Deployment slots
- ✅ Daily backups

---

## ✅ Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test all routes/pages
- [ ] Check mobile responsiveness
- [ ] Test contact form submission
- [ ] Verify images load properly
- [ ] Check browser console for errors
- [ ] Test with Lighthouse (target score: 90+)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure CDN (if needed)
- [ ] Set up monitoring
- [ ] Configure backup strategy
- [ ] Document deployment process

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Check Node version
node --version

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Return 404
Ensure `web.config` (for Windows) or `staticwebapp.config.json` is present for SPA routing.

### Assets Not Loading
Check that paths are relative and `vite.config.ts` has correct base path if deploying to subdirectory.

---

## 📞 Support Resources

- [Azure Documentation](https://docs.microsoft.com/azure/)
- [Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- [App Service Docs](https://docs.microsoft.com/azure/app-service/)
- [Azure CLI Reference](https://docs.microsoft.com/cli/azure/)

---

**Need Help?** Contact the CODEBYTE team at Codebytdigital@gmail.com
