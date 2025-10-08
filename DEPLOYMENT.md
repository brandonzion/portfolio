# Deployment Guide

This guide will walk you through deploying your jazz portfolio website to Vercel with a custom domain.

## Prerequisites

- GitHub account (or GitLab/Bitbucket)
- Vercel account (free tier available at [vercel.com](https://vercel.com))
- Custom domain (optional, but recommended)

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Jazz portfolio website"
```

### 1.2 Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it something like `portfolio` or `jazz-portfolio`
3. Don't initialize with README (we already have one)

### 1.3 Push Your Code

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended for beginners)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Click "Deploy"
6. Wait 2-3 minutes for the first deployment

### Option B: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Answer the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Accept default or customize
   - In which directory is your code located? **.**

5. Deploy to production:
```bash
vercel --prod
```

## Step 3: Configure Custom Domain

### 3.1 Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Enter your custom domain (e.g., `brandonsun.com`)
4. Click "Add"

### 3.2 Configure DNS

Vercel will provide DNS configuration options. Choose one:

#### Option A: Use Vercel Nameservers (Easiest)

1. Vercel will provide nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Update nameservers to Vercel's nameservers
4. Wait 24-48 hours for DNS propagation

#### Option B: Use A Record (More Control)

1. Go to your domain registrar's DNS settings
2. Add an A record:
   - **Type**: A
   - **Name**: @ (or leave blank for root domain)
   - **Value**: `76.76.21.21` (Vercel's IP)
   - **TTL**: 3600 (or default)
3. For www subdomain, add a CNAME record:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 3600

#### Option C: Use CNAME (For Subdomain)

If using a subdomain like `portfolio.yourdomain.com`:
1. Add a CNAME record:
   - **Type**: CNAME
   - **Name**: portfolio (or your subdomain)
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 3600

### 3.3 Enable SSL

Vercel automatically provisions SSL certificates via Let's Encrypt. This happens automatically after DNS is configured correctly.

## Step 4: Configure Environment Variables (if needed)

If you have environment variables (e.g., for contact form services):

1. Go to **Settings** → **Environment Variables** in Vercel
2. Add each variable:
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_EMAILJS_SERVICE_ID`)
   - **Value**: Your value
   - **Environments**: Select Production, Preview, Development
3. Click "Save"
4. Redeploy your project for changes to take effect

## Step 5: Verify Deployment

### 5.1 Check Vercel URL

1. Your site is immediately available at: `your-project.vercel.app`
2. Visit the URL to verify everything works

### 5.2 Check Custom Domain

1. Once DNS propagates (24-48 hours), visit your custom domain
2. Verify SSL certificate is active (🔒 in browser)
3. Test all pages and features

## Step 6: Set Up Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Production Deployment**: Push to `main` branch
2. **Preview Deployment**: Push to any other branch or open a PR

```bash
# Make changes
git add .
git commit -m "Update about page"
git push

# Vercel automatically deploys in ~2 minutes
```

## Common Issues & Solutions

### Issue 1: DNS Not Resolving

**Problem**: Domain not showing website after 48 hours

**Solution**:
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify DNS records are correct
- Try clearing browser cache
- Try different browser or incognito mode

### Issue 2: SSL Certificate Error

**Problem**: SSL certificate not provisioning

**Solution**:
- Ensure DNS records are correct
- Wait up to 48 hours for initial SSL provisioning
- Try removing and re-adding domain in Vercel
- Contact Vercel support if issue persists

### Issue 3: Build Failures

**Problem**: Deployment fails with build errors

**Solution**:
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Check for TypeScript/ESLint errors
- Verify all dependencies are in `package.json`

### Issue 4: Images/Assets Not Loading

**Problem**: Images show broken or don't load

**Solution**:
- Ensure images are in `/public` directory
- Use correct paths (e.g., `/images/photo.jpg` not `./images/photo.jpg`)
- Check image file extensions match code
- Verify images are committed to Git

### Issue 5: Audio Not Playing

**Problem**: Background music doesn't play

**Solution**:
- Ensure audio file is in `/public/audio/`
- Check browser console for errors
- Some browsers block autoplay; user interaction required
- Verify audio file format (MP3 is most compatible)

## Performance Optimization

### After Deployment:

1. **Test Performance**:
   - Use [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)

2. **Optimize Images**:
   - Compress images before uploading
   - Use WebP format where possible
   - Consider using Next.js Image component for optimization

3. **Monitor Analytics**:
   - Enable Vercel Analytics (free tier available)
   - Add Google Analytics if desired

4. **Set Up Error Monitoring** (Optional):
   - Consider Sentry or similar service
   - Track errors in production

## Updating Your Site

### Regular Updates:

```bash
# Make your changes locally
git add .
git commit -m "Description of changes"
git push

# Vercel deploys automatically
```

### Rollback if Needed:

1. Go to Vercel Dashboard → Deployments
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

## Custom Domain Examples

Here are example configurations for popular registrars:

### GoDaddy
1. Go to DNS Management
2. Add A record: @ → `76.76.21.21`
3. Add CNAME: www → `cname.vercel-dns.com`

### Namecheap
1. Go to Advanced DNS
2. Add A record: @ → `76.76.21.21`
3. Add CNAME: www → `cname.vercel-dns.com`

### Google Domains
1. Go to DNS settings
2. Add Custom resource records:
   - A: @ → `76.76.21.21`
   - CNAME: www → `cname.vercel-dns.com`

## Support & Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

## Maintenance Checklist

### Monthly:
- [ ] Update dependencies (`npm outdated` → `npm update`)
- [ ] Check for security updates
- [ ] Review analytics and performance

### Quarterly:
- [ ] Update content (projects, performances)
- [ ] Refresh resume
- [ ] Update profile images if needed
- [ ] Test all forms and functionality

### Annually:
- [ ] Renew domain registration
- [ ] Review and update design if desired
- [ ] Audit and optimize performance

---

**Congratulations! Your jazz portfolio is now live! 🎉🎵**

