# Quick Start Guide

Get your jazz portfolio website up and running in minutes!

## Prerequisites

- Node.js 18+ installed
- Basic knowledge of command line
- Text editor (VS Code recommended)

## 5-Minute Setup

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### 3. Add Required Assets

**Minimum to get started:**

1. **Background Image**: Add `/public/images/jazz-club-bg.jpg`
   - Download a jazz club photo from [Unsplash](https://unsplash.com/s/photos/jazz-club)
   
2. **Audio File** (optional): Add `/public/audio/jazz-ambient.mp3`
   - Use royalty-free jazz piano music
   - Or leave out - site works without it!

3. **Project Images**: Add placeholder images
   ```bash
   # Download placeholders or use your own
   # /public/images/project1.jpg
   # /public/images/project2.jpg
   # /public/images/project3.jpg
   ```

### 4. Update Your Information

**Essential files to edit:**

1. **Your Name & Links** - `/components/Hero.tsx`
   - Lines 27-30: Your name and title
   - Lines 60-82: Social media links

2. **Projects** - `/data/projects.ts`
   - Replace with your actual projects

3. **Performances** - `/data/performances.ts`
   - Add your music performances

4. **Contact** - `/app/contact/page.tsx`
   - Lines 58-71: Your contact info

### 5. Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (one command!)
npx vercel
```

## File Structure

```
portfolio/
├── app/                    # Pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── music/             # Music page
│   ├── resume/            # Resume page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Top navigation
│   ├── Hero.tsx          # Landing hero section
│   ├── AudioPlayer.tsx   # Ambient music player
│   ├── ProjectCard.tsx   # Project cards
│   ├── PerformanceCard.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── data/                  # Content data
│   ├── projects.ts       # ⚠️ UPDATE THIS
│   └── performances.ts   # ⚠️ UPDATE THIS
└── public/               # Static assets
    ├── images/           # ⚠️ ADD YOUR IMAGES
    │   └── jazz-club-bg.jpg  # Required!
    └── audio/            # ⚠️ ADD YOUR AUDIO
        └── jazz-ambient.mp3  # Optional
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build locally

# Linting
npm run lint         # Check for issues

# Deployment
npx vercel           # Deploy to Vercel
npx vercel --prod    # Deploy to production
```

## What You Get

✅ **Responsive design** - Works on all devices
✅ **Modern tech stack** - Next.js 14, TypeScript, Tailwind
✅ **Jazz club theme** - Warm, cozy aesthetic
✅ **Smooth animations** - Framer Motion throughout
✅ **Audio player** - Optional background music
✅ **SEO optimized** - Meta tags and proper structure
✅ **Performance** - Fast loading and smooth scrolling

## Pages Included

1. **Home** - Hero section + featured content
2. **Projects** - Showcase your dev work
3. **Music** - Performance history
4. **Resume** - Experience, education, awards
5. **Contact** - Contact form + info

## Customization Priority

### Must Do:
1. ✅ Add jazz club background image
2. ✅ Update your name and title
3. ✅ Add your projects
4. ✅ Update social media links

### Should Do:
6. ⭐ Add ambient audio
7. ⭐ Add project images
8. ⭐ Update resume content
9. ⭐ Add performance details
10. ⭐ Customize colors (optional)

### Nice to Have:
11. 💎 Add profile photo
12. 💎 Connect contact form to email service
13. 💎 Add Google Analytics
14. 💎 Create custom domain

## Troubleshooting

### Build Errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Images Not Loading?
- Ensure images are in `/public/images/`
- Use correct path: `/images/photo.jpg` (not `./images/`)
- Check file extensions match code

### CSS Not Working?
- Restart dev server
- Clear browser cache
- Check Tailwind classes are valid

## Next Steps

1. **Customize Content**: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
2. **Deploy to Vercel**: See [DEPLOYMENT.md](DEPLOYMENT.md)
3. **Optimize**: Add real images, audio, and content

## Resources

- 📖 [Full README](README.md) - Complete documentation
- 🎨 [Customization Guide](CUSTOMIZATION.md) - Personalize your site
- 🚀 [Deployment Guide](DEPLOYMENT.md) - Go live with Vercel
- 🔗 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)

## Support

Need help?
1. Check documentation files (README, CUSTOMIZATION, DEPLOYMENT)
2. Google your error message
3. Search Next.js/React documentation
4. Check GitHub issues for similar problems

## Tips

💡 **Start Simple**: Get basics working, then add features
💡 **Test Often**: Check browser after each change
💡 **Git Commits**: Commit frequently with clear messages
💡 **Mobile First**: Test on mobile regularly
💡 **Performance**: Keep images and audio files small

---

**You're all set! Happy coding! 🎵💻**

Run `npm run dev` and start customizing at [http://localhost:3000](http://localhost:3000)

