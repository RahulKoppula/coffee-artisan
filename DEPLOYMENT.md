# Deployment Guide - Vercel

## Quick Deploy Steps

### 1. Commit and Push to Git

```bash
# Commit all changes
git commit -m "feat: optimize for production and prepare for deployment

- Add code splitting and lazy loading
- Optimize build configuration
- Add SEO meta tags
- Add error boundaries and 404 page
- Remove unused dependencies
- Add Vercel configuration"

# Push to your repository
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will auto-detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts
# For production: vercel --prod
```

### 3. Post-Deployment

After deployment, Vercel will provide:
- A production URL (e.g., `your-app.vercel.app`)
- Automatic HTTPS
- Global CDN
- Automatic deployments on every push to `main`

### 4. Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Configuration Files

- `vercel.json` - Vercel configuration for SPA routing
- `.gitignore` - Excludes build artifacts and dependencies
- `vite.config.ts` - Optimized build configuration

## Build Verification

Before deploying, test locally:

```bash
# Build production bundle
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### If routes don't work:
- Check `vercel.json` has the rewrite rule for SPA routing
- Ensure all routes are defined in `src/App.tsx`

### If build fails:
- Check Node.js version (Vercel uses Node 18+ by default)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### If assets don't load:
- Ensure paths are relative (not absolute)
- Check `vite.config.ts` base path if using subdirectory

## Environment Variables (if needed later)

If you need environment variables:
1. Go to Vercel project settings
2. Navigate to **Environment Variables**
3. Add your variables
4. Redeploy

## Continuous Deployment

Vercel automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before deployment

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

