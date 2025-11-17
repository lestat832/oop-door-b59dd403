# GitHub Pages Setup Instructions

## Manual Configuration Steps

Your Lovable demo is now ready to deploy to GitHub Pages. Follow these steps to enable it:

### Step 1: Navigate to Repository Settings
1. Go to: https://github.com/lestat832/oop-door-b59dd403
2. Click on the **Settings** tab (top right of the repository)

### Step 2: Configure GitHub Pages
1. In the left sidebar, scroll down and click on **Pages**
2. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Click **Save**

### Step 3: Wait for Deployment
- GitHub Pages will take 1-2 minutes to build and deploy
- You'll see a green checkmark when deployment is complete
- A notification will appear at the top of the repository with your site URL

### Step 4: Access Your Site
Once deployed, your site will be available at:
**https://lestat832.github.io/oop-door-b59dd403/**

## What Was Done

✅ **Vite Configuration**: Added base path `/oop-door-b59dd403/` to `vite.config.ts`
✅ **Production Build**: Built with correct base path for GitHub Pages
✅ **Files Deployed**: All built files (index.html, assets/, etc.) are in repository root
✅ **Git Push**: Configuration changes committed and pushed to main branch

## Troubleshooting

If the site doesn't load after configuration:

1. **Check GitHub Actions**: Go to the **Actions** tab to see if there are any build errors
2. **Verify Base Path**: Ensure all asset paths in `index.html` start with `/oop-door-b59dd403/`
3. **Clear Cache**: Try accessing the site in an incognito/private window
4. **Check Settings**: Verify Pages settings show "Your site is live at..."

## Future Updates

To update the site after making changes:
1. Make your changes in Lovable or locally
2. Run `npm run build` to create a new production build
3. Copy `dist/*` to repository root: `cp -r dist/* .`
4. Commit and push: `git add . && git commit -m "Update site" && git push`

---

**Note**: The source `index.html` references `/src/main.tsx` for development. The built version in root has the correct asset paths for production.

