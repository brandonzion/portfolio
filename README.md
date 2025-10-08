# Jazz Portfolio Website

A modern Next.js portfolio website with a jazz-themed aesthetic, featuring ambient audio, smooth animations, and a cozy jazz club atmosphere.

## Features

- 🎵 **Jazz Club Aesthetic**: Warm color palette inspired by jazz clubs with amber and deep blue tones
- 🎹 **Ambient Audio Player**: Background jazz piano music with volume controls
- ✨ **Smooth Animations**: Framer Motion animations throughout
- 📱 **Responsive Design**: Fully responsive on all devices
- 🎨 **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- 🚀 **Performance Optimized**: Fast loading and smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Content

### 1. Jazz Club Background Image

Add your jazz club background image to `/public/images/jazz-club-bg.jpg`. For best results:
- Use a high-quality image (1920x1080 or higher)
- Choose an image with warm, atmospheric lighting
- Consider a slightly blurred or darkened image for better text readability

### 2. Ambient Audio

Add your ambient jazz audio file to `/public/audio/jazz-ambient.mp3`. You can:
- Record your own jazz piano playing
- Use royalty-free jazz music
- Generate ambient chatter using ElevenLabs or similar services
- Mix piano music with subtle background chatter for authenticity

**Tip**: Keep the audio file size reasonable (under 5MB) for faster loading.

### 3. Project Images

Add project images to `/public/images/` and update the `imageUrl` fields in `/data/projects.ts`

### 4. Performance Images

Add performance photos to `/public/images/` and update the `imageUrl` fields in `/data/performances.ts`

### 5. Resume PDF

Add your resume PDF to `/public/resume.pdf`

### 6. Update Personal Information

Edit the following files with your information:

- `/data/projects.ts` - Your projects
- `/data/performances.ts` - Your performances
- Update social media links in:
  - `/components/Hero.tsx`
  - `/components/Footer.tsx`
  - `/app/contact/page.tsx`

## Customization

### Colors

The jazz-inspired color palette is defined in `/app/globals.css`. Customize the amber and slate color values to match your preferences.

### Fonts

The website uses:
- **Playfair Display** (serif) for headings
- **Inter** (sans-serif) for body text

You can change these in `/app/layout.tsx`.

### Content Sections

Edit the page content in:
- `/app/page.tsx` - Home page
- `/app/projects/page.tsx` - Projects page
- `/app/music/page.tsx` - Music page
- `/app/resume/page.tsx` - Resume page
- `/app/contact/page.tsx` - Contact page

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Custom Domain Setup

1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow the instructions to configure DNS records
5. Wait for DNS propagation (usually 24-48 hours)

## Build for Production

```bash
npm run build
```

## Environment Variables

If you implement a contact form with backend functionality, create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

## Performance Tips

1. Optimize images using Next.js Image component
2. Keep audio file sizes reasonable
3. Use lazy loading for images below the fold
4. Test performance with Lighthouse

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## Support

For questions or issues, please open an issue in the repository or contact via the website contact form.
