# 🚀 Quick Start: Deploy CODEBYTE to Azure

This is a simplified, step-by-step guide to get your CODEBYTE website deployed to Azure in under 10 minutes.

## ⚡ Fastest Method (Azure Static Web Apps)

### Step 1: Install Required Tools

```bash
# Install Azure CLI (if not already installed)
# Windows users can run this in PowerShell:
winget install Microsoft.AzureCLI

# Or download from: https://docs.microsoft.com/cli/azure/install-azure-cli
```

### Step 2: Login to Azure

```bash
az login
```

This will open a browser window for authentication.

### Step 3: Build Your Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

You should see a `dist` folder created with your production files.

### Step 4: Deploy to Azure

**Option A: Use the Automated Script (Easiest)**

For Windows:
```bash
deploy-azure.bat
```

For Linux/Mac:
```bash
chmod +x deploy-azure.sh
./deploy-azure.sh
```

**Option B: Manual Deployment**

```bash
# Install Static Web Apps extension
az extension add --name staticwebapp

# Create and deploy in one command
az staticwebapp create \
  --name codebyte-website \
  --resource-group codebyte-rg \
  --source . \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --skip-app-build false
```

### Step 5: Get Your Live URL

After deployment completes, you'll see output like:

```
{
  "hostname": "https://codebyte-website.azurewebsites.net",
  ...
}
```

Your site is now live! 🎉

Visit the URL to see your deployed website.

---

## 🔧 Alternative Methods

### Method 2: Azure App Service (More Control)

```bash
# 1. Create resource group
az group create --name codebyte-rg --location eastus

# 2. Create App Service Plan
az appservice plan create \
  --name codebyte-plan \
  --resource-group codebyte-rg \
  --sku B1 \
  --is-linux

# 3. Create Web App
az webapp create \
  --resource-group codebyte-rg \
  --plan codebyte-plan \
  --name codebyte-webapp \
  --runtime "NODE|18-lts" \
  --deployment-local-git

# 4. Configure build settings
az webapp config appsettings set \
  --resource-group codebyte-rg \
  --name codebyte-webapp \
  --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true

# 5. Deploy
git remote add azure <DEPLOYMENT_URL_FROM_STEP_3>
git push azure main
```

### Method 3: Drag & Drop (Azure Storage)

1. Go to [Azure Portal](https://portal.azure.com)
2. Create a Storage Account
3. Enable "Static website" in settings
4. Upload contents of `dist` folder to `$web` container
5. Access via the provided endpoint URL

---

## ✅ Verify Deployment

Checklist after deployment:

- [ ] Site loads without errors
- [ ] All pages are accessible (/, /about, /services, etc.)
- [ ] Images load properly
- [ ] Contact form works
- [ ] Mobile view looks good
- [ ] No console errors

---

## 🆘 Troubleshooting

### Issue: "az: command not found"

**Solution:** Azure CLI is not installed or not in PATH. Install it from [official site](https://docs.microsoft.com/cli/azure/install-azure-cli).

### Issue: Build fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: 404 on page refresh

**Solution:** This is normal for SPAs. Ensure `staticwebapp.config.json` or `web.config` is present in your project. These files handle routing.

### Issue: Assets not loading

**Solution:** Check that all asset paths are relative. The build process should handle this automatically.

---

## 💰 Cost Estimate

**Azure Static Web Apps (Free Tier):**
- ✅ FREE for personal projects
- ✅ Includes SSL certificate
- ✅ Automatic deployments from Git
- ✅ Custom domains supported
- ❌ Limited to 3 environments

**Azure App Service (B1 Basic):**
- ~$13/month
- ✅ More control and flexibility
- ✅ Auto-scaling
- ✅ Deployment slots

---

## 📝 Next Steps After Deployment

1. **Add Custom Domain** (Optional)
   - Go to Azure Portal → Your Static Web App → Custom domains
   - Follow instructions to add your domain

2. **Set Up CI/CD** (Recommended)
   - Connect your GitHub repository for automatic deployments
   - Every push to `main` will trigger a deployment

3. **Enable Application Insights** (Optional)
   - Monitor performance and errors
   - Track user analytics

4. **Configure Environment Variables**
   - Add API keys and other secrets in Azure Portal

---

## 📞 Need Help?

- **Detailed Guide**: See `AZURE_DEPLOYMENT_GUIDE.md`
- **Azure Docs**: https://docs.microsoft.com/azure/static-web-apps/
- **Contact**: Codebytdigital@gmail.com

---

**Congratulations!** Your CODEBYTE website is now live on Azure! 🎊
