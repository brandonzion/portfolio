# Customization Guide

This guide will help you personalize your jazz portfolio website with your own content, style, and branding.

## Quick Start Checklist

- [ ] Update personal information in data files
- [ ] Add your jazz club background image
- [ ] Add ambient audio file
- [ ] Update project information
- [ ] Add performance details
- [ ] Update resume content
- [ ] Add profile and project images
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Update contact information

## 1. Personal Information

### Update Your Name and Title

**File**: `/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Name - Developer & Jazz Pianist",
  description: "Portfolio of Your Name - Full-stack developer and jazz pianist...",
  // ...
};
```

**Files to Update**:
- `/components/Navigation.tsx` (line 28-30)
- `/components/Hero.tsx` (lines 27-34)
- `/components/Footer.tsx` (lines 18-19)

### Social Media Links

Update your social media URLs in these files:

**`/components/Hero.tsx`** (lines 60-82):
```tsx
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
<a href="mailto:YOUR_EMAIL@example.com" ...>
```

**`/components/Footer.tsx`** (lines 37-58)
**`/app/contact/page.tsx`** (lines 46-71, 78-91)

## 2. Content Updates

### Projects

**File**: `/data/projects.ts`

Replace the sample projects with your own:

```typescript
{
  id: "unique-id",
  title: "Your Project Name",
  description: "Short description (2-3 lines)",
  longDescription: "Detailed description",
  technologies: ["React", "Node.js", "etc"],
  liveUrl: "https://your-project.com",  // optional
  githubUrl: "https://github.com/you/project",  // optional
  imageUrl: "/images/your-project.jpg",
  featured: true,  // Featured projects show on home page
}
```

### Performances

**File**: `/data/performances.ts`

Add your real performances:

```typescript
{
  id: "unique-id",
  title: "Performance Title",
  venue: "Venue Name",
  date: "Month Day, Year",
  role: "Your Role (e.g., Piano)",
  description: "Description of the performance",
  imageUrl: "/images/performance.jpg",  // optional
  videoUrl: "https://youtube.com/...",  // optional
  setlist: ["Song 1", "Song 2"],  // optional
}
```

### Resume

**File**: `/app/resume/page.tsx`

Update all sections with your actual experience, education, and awards:
- Experience section (lines 33-109)
- Education section (lines 113-155)
- Awards section (lines 159-192)

## 3. Media Assets

### Jazz Club Background

**Required**: `/public/images/jazz-club-bg.jpg`

- **Dimensions**: 1920x1080 or higher
- **Style**: Atmospheric jazz club photo
- **Tips**: 
  - Slightly dark/muted for text readability
  - Warm lighting (amber/orange tones work well)
  - Can be actual club, piano, or jazz-related scene

**Free Sources**:
- [Unsplash](https://unsplash.com/s/photos/jazz-club)
- [Pexels](https://www.pexels.com/search/jazz/)
- [Pixabay](https://pixabay.com/images/search/jazz-club/)

### Ambient Audio

**Required**: `/public/audio/jazz-ambient.mp3`

- **Duration**: 2-5 minutes (loops automatically)
- **Size**: Keep under 5MB
- **Content**: Jazz piano + optional ambient chatter

**How to Create**:

1. **Record yourself playing** (recommended for authenticity)
2. **Use ElevenLabs** for ambient chatter generation
3. **Mix audio** in DAW (Audacity, GarageBand, Logic Pro)
4. **Export** as MP3, 128kbps is sufficient for background

**Free Music Sources** (if not recording yourself):
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [Pixabay Music](https://pixabay.com/music/)

**⚠️ Important**: Ensure you have rights to use any audio!

### Project Images

**Files**: `/public/images/project1.jpg`, `project2.jpg`, etc.

- **Dimensions**: 800x600 or 1200x900
- **Format**: JPG or PNG
- **Content**: Screenshots, mockups, or representative images

### Performance Images

**Files**: `/public/images/performance1.jpg`, `performance2.jpg`, etc.

- **Dimensions**: 1200x800 or similar
- **Format**: JPG or PNG
- **Content**: Performance photos, venue shots, or promotional images

### Resume PDF

**File**: `/public/resume.pdf`

- Upload your actual resume as PDF
- Link is in resume page (download button)
- Keep file size reasonable (under 2MB)

## 4. Color Customization

### Color Palette

**File**: `/app/globals.css`

Current jazz club theme:
- **Primary**: Amber (warm gold tones)
- **Background**: Deep slate/navy blues
- **Accents**: Amber highlights

To customize:

```css
@theme inline {
  /* Update these color values */
  --color-amber-600: #d4a574;  /* Main amber */
  --color-amber-500: #e0b886;  /* Light amber */
  --color-slate-900: #0f0f1a;  /* Dark bg */
  /* ... etc */
}
```

### Alternative Color Schemes

**Classic Jazz** (current):
- Amber gold + deep blue

**Modern Jazz**:
- Teal (#14b8a6) + charcoal (#1f2937)

**Vintage Jazz**:
- Sepia browns (#92400e) + cream (#fef3c7)

**Blue Note**:
- Bright blue (#3b82f6) + navy (#1e293b)

## 5. Typography

### Fonts

**File**: `/app/layout.tsx`

Current fonts:
- **Playfair Display** (serif) - Headings
- **Inter** (sans-serif) - Body

To change:

```typescript
import { Your_Font, Another_Font } from "next/font/google";

const serif = Your_Font({
  variable: "--font-serif",
  subsets: ["latin"],
});
```

**Popular Alternatives**:
- **Serif**: Merriweather, Lora, Crimson Text
- **Sans-serif**: Open Sans, Roboto, Poppins
- **Jazz Style**: Bebas Neue, Oswald, Montserrat

Browse: [Google Fonts](https://fonts.google.com/)

## 6. Contact Information

### Email and Location

**File**: `/app/contact/page.tsx`

Update lines 46-71:

```tsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
// ...
<p className="text-slate-200">Your City, State</p>
```

### Contact Form

The current form is a frontend-only demo. To make it functional:

**Option 1: Email Service (EmailJS)**

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `/components/ContactForm.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    setStatus('success');
  } catch (error) {
    setStatus('error');
  }
};
```

**Option 2: Formspree**

1. Sign up at [Formspree](https://formspree.io/)
2. Update form action:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: Vercel Serverless Function**

Create `/api/contact/route.ts` and implement email sending logic.

## 7. Advanced Customization

### Add New Page

1. Create: `/app/your-page/page.tsx`
2. Add to navigation: `/components/Navigation.tsx`
3. Add to footer: `/components/Footer.tsx`

Example:
```tsx
// /app/blog/page.tsx
export default function BlogPage() {
  return <div>Your blog content</div>;
}
```

### Modify Animations

**File**: Various component files

Framer Motion is used throughout. To adjust:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}  // Adjust speed
>
```

### Change Layout

- **Navigation**: `/components/Navigation.tsx`
- **Footer**: `/components/Footer.tsx`
- **Page Structure**: `/app/layout.tsx`

### Mobile Responsiveness

The site is responsive by default using Tailwind's responsive classes:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* sm: mobile, md: tablet, lg: desktop */}
</div>
```

## 8. SEO Optimization

### Metadata

**File**: `/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Title",
  description: "Your description for search engines",
  keywords: ["your", "keywords"],
  authors: [{ name: "Your Name" }],
  // Add Open Graph for social sharing
  openGraph: {
    title: "Your Name",
    description: "Your description",
    images: ["/og-image.jpg"],
  },
};
```

### Individual Page Metadata

Add to each page:

```typescript
export const metadata = {
  title: "Projects | Your Name",
  description: "View my development projects",
};
```

## 9. Testing Your Changes

### Local Testing

```bash
npm run dev
```

Visit `http://localhost:3000` to preview.

### Build Testing

```bash
npm run build
npm start
```

Tests production build locally.

### Browser Testing

Test in multiple browsers:
- Chrome
- Firefox
- Safari
- Edge

### Mobile Testing

- Use browser dev tools (F12 → Device toolbar)
- Test on actual mobile devices
- Check touch interactions

## 10. Content Tips

### Writing

- **Keep it concise**: Web readers scan quickly
- **Use active voice**: "I built..." vs "Was built by..."
- **Show personality**: This is YOUR portfolio
- **Proofread**: Check spelling and grammar

### Images

- **Optimize file size**: Use compression tools
- **Consistent style**: Maintain visual cohesion
- **Alt text**: Add for accessibility
- **High quality**: Use professional-looking images

### Projects

- **Focus on impact**: What did you achieve?
- **Be specific**: Use numbers/metrics where possible
- **Include links**: Live demos and GitHub repos
- **Show variety**: Display range of skills

### Performances

- **Recent first**: Newest performances at top
- **Key details**: Date, venue, role
- **Multimedia**: Add videos/audio if possible
- **Networking value**: Show prestigious venues

## Need Help?

- Check the main [README.md](README.md)
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Search [Next.js docs](https://nextjs.org/docs)
- Check [Tailwind docs](https://tailwindcss.com/docs)

---

**Happy customizing! Make this portfolio truly yours! 🎵✨**

