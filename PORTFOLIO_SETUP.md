# Manaswita Sahoo - Growth Marketing Portfolio

## Project Setup Complete ✅

This is a Netflix-themed portfolio for **Manaswita Sahoo**, a Growth Marketing Professional with expertise in:
- Performance Marketing (Meta Ads, Google Ads)
- Brand Partnerships & CRM
- Data Analytics
- Growth Strategy

## What's Included

### 📄 Pages
- **/** → Redirects to /browse
- **/browse** → Netflix-style profile selection (Recruiter, Brand/Agency, Manaswita)
- **/profile/recruiter** → Recruiter view
- **/profile/brand-agency** → Marketing/Brand view
- **/skills** → 5 categories of marketing skills
- **/work-experience** → 4 roles + 2 education entries
- **/projects** → Dummy project placeholders (ready for content)
- **/about-me** → 6 fun facts + Instagram embed
- **/contact-me** → WhatsApp, Email, LinkedIn, Instagram
- **/blogs** → Blog infrastructure (empty, ready for posts)

### 💼 Experience Data
1. **Aurm** (Sep 2025–Present) - Growth Marketing Associate
2. **Kapiva** (Jun 2024–Sep 2025) - Brand Partnership Associate
3. **Rapido** (Dec 2023–Jun 2024) - Brand Partnership Executive
4. **Mondelez** (Jun–Jul 2022) - Marketing & Sales Intern
5. **MBA** - KIIT School of Management (2023)
6. **B.Sc** - Unitech Degree College (2020)

### 🎯 Skills (27 total)
- **Advertising & Performance Marketing**: Meta Ads, Google Ads, GA4, Trackier, AppsFlyer
- **Analytics & Data**: Metabase, SQL, Python, R, Semrush, Google Search Console
- **CRM & Marketing Tools**: Zoho CRM, GPay Console, Modash.io, Qoruz
- **AI / LLM**: ChatGPT, Perplexity, DALL-E, Playground.com, Stanford STORM
- **Strategy & Management**: Campaign Planning, Market Research, Revenue Generation, P&L Analysis, etc.

## Tech Stack
- Next.js 15.2 (React 18)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Radix UI components
- React Icons

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the portfolio.

## Customization

### Update Contact Info
- Edit `/src/components/profile/ProfileBanner.tsx`:
  - Resume link (line 108)
  - LinkedIn URL (line 119)
  - Email (line 131)

### Add Projects
- Edit `/src/app/projects/page.tsx`:
  - Replace dummy projects with real ones
  - Add project images to `/public/images/`

### Add Blog Posts
- Edit `/src/app/blogs/[slug]/page.tsx`:
  - Add blog post objects to `blogPosts` record
  - Add matching blog card to `/src/app/blogs/page.tsx`

### Update Logo & Images
- Replace `/src/assets/images/manaswita_logo.png` with actual logo
- Replace `/public/manaswita.webp` with profile photo
- Add project images to `/public/images/`

### Update Instagram Embed
- Edit `/src/app/about-me/page.tsx` to add actual Instagram embed URL

### Update Navigation
- Nav links defined in `/src/components/layout/Navbar.tsx` (lines 88-95)

## Deployment

Deploy to Vercel with one click:
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## Key Files Modified
- `src/app/layout.tsx` - Global metadata
- `src/app/browse/page.tsx` - Profile selection
- `src/components/profile/ProfileBanner.tsx` - Hero section
- `src/app/skills/page.tsx` - Skill categories
- `src/app/work-experience/page.tsx` - Career history
- `src/app/projects/page.tsx` - Projects (placeholder)
- `src/app/about-me/page.tsx` - Fun facts + Instagram
- `src/app/contact-me/page.tsx` - Contact methods
- `src/components/layout/Navbar.tsx` - Navigation
- `public/sitemap.xml` - SEO sitemap

## Build Status
✅ **Build successful** - No errors
✅ **All routes working** - 11 pages compiled
✅ **Zero Apoorv references** - 100% replaced
✅ **TypeScript strict mode** - No type errors

---

Created with ❤️ using Claude Code + Haiku 4.5
