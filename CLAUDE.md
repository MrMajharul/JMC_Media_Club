# JMC Media Club Website - Project Documentation

## Project Overview

A modern, premium, and responsive website for **JMC Media Club** - the official student organization of the Department of Journalism and Media Communication at Green University of Bangladesh.

**Status**: MVP Complete - Core pages and components implemented
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Supabase
**Deployment**: Ready for Vercel

---

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## Project Structure

```
/app                    # Next.js App Router
  ├── page.tsx         # Homepage
  ├── layout.tsx       # Root layout with theme provider
  ├── globals.css      # Global styles and animations
  ├── about/           # About page
  ├── events/          # Events listing
  ├── gallery/         # Photo gallery
  ├── committee/       # Executive committee
  ├── blog/            # News and articles
  ├── membership/      # Join application
  ├── contact/         # Contact form
  └── admin/           # Admin dashboard (placeholder)

/components
  ├── header.tsx       # Navigation (sticky, responsive)
  ├── footer.tsx       # Footer with contact info
  ├── theme-provider.tsx
  └── sections/
      ├── hero.tsx           # Homepage hero
      ├── stats.tsx          # Statistics section
      ├── about.tsx          # Values and mission
      ├── featured-events.tsx
      └── committee.tsx

/lib
  ├── supabase.ts      # Supabase client initialization

/types
  # Type definitions (to be created as needed)

/public
  # Static assets
```

---

## Brand Identity

| Element | Value |
|---------|-------|
| Primary Color | #8BCF00 (Green) |
| Accent Color | #FF8A3D (Orange) |
| Dark Color | #081420 (Navy) |
| Primary Font | Poppins |
| Secondary Font | Montserrat |

---

## Implemented Features

### ✅ Homepage
- Animated hero section with gradient background
- Statistics showcase (Members, Events, Projects, Achievements)
- About section with vision/mission
- Featured events carousel
- Executive committee preview
- Call-to-action buttons

### ✅ About Page
- Club history and overview
- Vision and mission statements
- Major achievements list

### ✅ Events Page
- Upcoming events listing
- Event details (date, time, venue)
- Category filtering (Workshop, Seminar, Competition)
- Registration buttons
- Responsive grid layout

### ✅ Gallery Page
- Photo gallery grid with lazy loading
- Category filtering (Events, Workshops, Competitions, Activities)
- Hover effects and lightbox preparation

### ✅ Committee Page
- Executive member profiles
- Professional photos (avatars)
- Bio and role display
- Contact information icons

### ✅ Blog Page
- Featured blog post section
- Recent posts sidebar
- Author and date information
- Category tagging

### ✅ Membership Page
- Benefits showcase
- Membership requirements
- Online application form
- Multi-field form with validation
- Quick facts section

### ✅ Contact Page
- Contact information cards
- Contact form with email, phone, address
- Social media links (placeholder)
- Map integration ready

### ✅ Design System
- Dark/Light mode toggle
- Responsive design (mobile, tablet, desktop)
- Glass morphism effects
- Smooth animations (Framer Motion)
- Gradient overlays and backgrounds
- Custom animations (fade-in, slide-in)

---

## Supabase Setup Required

Create the following tables in Supabase PostgreSQL:

### `events`
```sql
CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP NOT NULL,
  venue TEXT,
  category TEXT,
  status TEXT DEFAULT 'upcoming',
  image_url TEXT,
  max_attendees INT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `gallery_images`
```sql
CREATE TABLE gallery_images (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT,
  image_url TEXT NOT NULL,
  uploaded_at TIMESTAMP DEFAULT NOW()
);
```

### `committee_members`
```sql
CREATE TABLE committee_members (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  batch TEXT,
  email TEXT,
  social_links JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `blog_posts`
```sql
CREATE TABLE blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT,
  category TEXT,
  image_url TEXT,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `membership_applications`
```sql
CREATE TABLE membership_applications (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  department TEXT,
  batch TEXT,
  phone TEXT,
  email TEXT,
  skills TEXT,
  portfolio_url TEXT,
  status TEXT DEFAULT 'pending',
  applied_at TIMESTAMP DEFAULT NOW()
);
```

---

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App Config
NEXT_PUBLIC_APP_NAME=JMC Media Club
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@jmc.green.edu.bd
```

---

## Key Components & Utilities

### Header Component
- Sticky navigation with logo
- Mobile hamburger menu
- Links to all main pages
- "Join Us" CTA button
- Responsive design

### Footer Component
- Quick links section
- Contact information
- Social media links
- About section
- Terms and privacy links

### Hero Section
- Animated gradient background
- Scroll indicator
- CTA buttons (Join/Explore)
- Responsive layout with image placeholder

### Stats Section
- 4-column grid showing key metrics
- Hover animations
- Icons from Lucide React

---

## Available Scripts

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
```

---

## Design Tokens

### Colors
```css
--jmc-green: #8BCF00;
--jmc-orange: #FF8A3D;
--jmc-navy: #081420;
```

### Animations
- `animate-pulse` - Pulsing effect
- `animate-gradient` - Gradient animation
- `animate-slide-in-left/right/top` - Slide animations
- `animate-fade-in-up` - Fade and move up

### Spacing & Typography
- Font families: Poppins (primary), Montserrat (display)
- Consistent spacing scale via Tailwind
- Responsive text sizes

---

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ Lazy loading for images and components
- ✅ CSS-in-JS with Tailwind (no runtime)
- ✅ Font optimization with next/font/google
- ✅ Metadata for SEO

---

## Known Limitations & TODOs

- [ ] Connect forms to Supabase
- [ ] Implement admin dashboard
- [ ] Add image upload functionality
- [ ] Implement search functionality
- [ ] Add email notifications
- [ ] Real image gallery (currently placeholders)
- [ ] Event registration system
- [ ] Analytics integration
- [ ] Accessibility audit (WCAG)

---

## Deployment Checklist

- [ ] Set up Supabase project
- [ ] Configure environment variables
- [ ] Test all forms and submissions
- [ ] Verify images load correctly
- [ ] Test dark mode switching
- [ ] Mobile responsiveness check
- [ ] SEO metadata verification
- [ ] Lighthouse performance audit
- [ ] Deploy to Vercel
- [ ] Set up domain name

---

## Contribution Guidelines

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make changes following the existing code style
3. Run tests and linting: `npm run lint`
4. Commit with clear messages: `git commit -m "feat: description"`
5. Push and create a pull request

---

## Support & Questions

For issues or questions about the project setup, please refer to:
- Project README: `/README.md`
- Next.js Docs: https://nextjs.org
- Supabase Docs: https://supabase.io/docs
- Tailwind Docs: https://tailwindcss.com

---

**Last Updated**: June 18, 2024
**Maintained By**: JMC Media Club Development Team
