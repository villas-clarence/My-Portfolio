# Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio website for free using either GitHub Pages or Vercel.

---

## Option 1: GitHub Pages (Recommended for Beginners)

### Prerequisites
- GitHub account
- Git installed on your computer

### Steps

#### 1. Create a GitHub Repository
```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - Portfolio website"
```

#### 2. Create Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Name it: `your-username.github.io` (e.g., `villas-clarence.github.io`)
   - OR use any name like `portfolio`
4. Keep it **Public**
5. Don't initialize with README (you already have files)
6. Click **Create repository**

#### 3. Push Your Code to GitHub
```bash
# Add remote repository (replace with your URL)
git remote add origin https://github.com/villas-clarence/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

#### 5. Access Your Website
Your site will be live at:
- If repo name is `your-username.github.io`: `https://your-username.github.io`
- If repo name is `portfolio`: `https://your-username.github.io/portfolio`

**Your URL:** `https://villas-clarence.github.io/portfolio`

---

## Option 2: Vercel (Faster & More Features)

### Prerequisites
- GitHub account (or GitLab/Bitbucket)
- Your code pushed to GitHub

### Steps

#### 1. Push Code to GitHub (if not done)
Follow steps 1-3 from GitHub Pages section above.

#### 2. Sign Up for Vercel
1. Go to [Vercel](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub

#### 3. Import Your Project
1. Click **Add New...** → **Project**
2. Find your portfolio repository
3. Click **Import**

#### 4. Configure Project
1. **Project Name**: Leave as is or customize
2. **Framework Preset**: Select **Other** (it's a static site)
3. **Root Directory**: Leave as `./`
4. Click **Deploy**

#### 5. Wait for Deployment
- Vercel will build and deploy your site (takes 30-60 seconds)
- You'll see a success screen with your live URL

#### 6. Access Your Website
Your site will be live at:
- `https://your-project-name.vercel.app`
- Example: `https://portfolio-villas-clarence.vercel.app`

#### 7. (Optional) Add Custom Domain
1. Go to your project dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain (if you have one)

---

## Updating Your Website

### For GitHub Pages
```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Update portfolio"
git push
```
Changes will appear in 1-2 minutes.

### For Vercel
```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Update portfolio"
git push
```
Vercel automatically rebuilds and deploys (takes 30 seconds).

---

## Troubleshooting

### GitHub Pages Not Working?
- Check if GitHub Pages is enabled in Settings → Pages
- Make sure `index.html` is in the root directory
- Wait a few minutes after enabling
- Check repository is Public

### Vercel Not Working?
- Check build logs in Vercel dashboard
- Make sure all files are committed and pushed
- Verify `index.html` exists in root

### Links Not Working?
- Make sure all links use relative paths
- Check that Font Awesome CDN is loading
- Verify Tailwind CSS CDN is loading

---

## Comparison: GitHub Pages vs Vercel

| Feature | GitHub Pages | Vercel |
|---------|-------------|--------|
| **Speed** | Good | Excellent |
| **Setup** | Easy | Very Easy |
| **Auto Deploy** | Yes (on push) | Yes (on push) |
| **Custom Domain** | Yes (free) | Yes (free) |
| **SSL/HTTPS** | Yes | Yes |
| **Build Time** | 1-2 minutes | 30 seconds |
| **Analytics** | No | Yes (free tier) |
| **Best For** | Simple sites | All sites |

---

## Recommended Choice

**For your portfolio:** Use **Vercel**
- Faster deployment
- Better performance
- Automatic HTTPS
- Built-in analytics
- Easier to manage

**Use GitHub Pages if:**
- You want everything in one place (GitHub)
- You prefer simpler setup
- You don't need analytics

---

## Next Steps After Deployment

1. ✅ Test all links (LinkedIn, GitHub, Email)
2. ✅ Check mobile responsiveness
3. ✅ Verify GitHub projects are loading
4. ✅ Share your portfolio URL!
5. ✅ Add portfolio link to your GitHub profile
6. ✅ Add portfolio link to your LinkedIn

---

## Need Help?

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Vercel Docs:** https://vercel.com/docs
- **Git Tutorial:** https://git-scm.com/docs/gittutorial

Good luck with your deployment! 🚀
