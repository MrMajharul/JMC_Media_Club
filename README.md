# JMC Media Club - Official Website

Modern, premium, and responsive website for **JMC Media Club** at the Department of Journalism and Media Communication, Green University of Bangladesh.

## 🎯 Features

- **Modern Design**: Clean, professional, and elegant UI with glassmorphism effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode Support**: Built-in light and dark theme support
- **Dynamic Content**: Powered by Supabase for real-time updates
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Fast Performance**: Next.js 15 with optimized images and lazy loading
- **Interactive Animations**: Smooth animations with Framer Motion
- **Admin Dashboard**: Manage events, gallery, and content

## 🏗️ Tech Stack

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Shadcn/UI** - Component library

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Database

### Deployment
- **Vercel** - Hosting platform

## 📖 Pages

- **Home** - Hero section, stats, featured events, committee preview
- **About** - Club history, vision, mission, achievements
- **Events** - Upcoming, ongoing, and past events
- **Gallery** - Photo gallery with filtering
- **Committee** - Executive members profiles
- **Blog** - News and articles
- **Membership** - Join the club
- **Contact** - Contact form and information
- **Admin Dashboard** - Content management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MrMajharul/JMC_Media_Club.git
cd JMC_Media_Club
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update environment variables with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

5. Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📦 Project Structure

```
JMC_Media_Club/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   ├── committee/         # Committee page
│   ├── blog/              # Blog page
│   ├── membership/        # Membership page
│   ├── contact/           # Contact page
│   └── admin/             # Admin dashboard
├── components/            # React components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Footer
│   ├── sections/          # Page sections
│   └── theme-provider.tsx # Theme configuration
├── lib/                   # Utility functions
│   └── supabase.ts        # Supabase client
├── public/                # Static files
├── styles/                # Global styles
└── types/                 # TypeScript types
```

## 🎨 Brand Colors

- **Green**: #8BCF00 (Primary)
- **Orange**: #FF8A3D (Accent)
- **Navy**: #081420 (Dark)
- **White**: #FFFFFF (Light)

## 🔧 Configuration

### Tailwind CSS
Customize theme in `tailwind.config.ts`:
- Colors, fonts, and animations
- Glass morphism effects
- Custom utilities

### Next.js
Configure in `next.config.ts`:
- Image optimization
- Security headers
- API routes

## 📝 Database Schema

The website uses PostgreSQL via Supabase with the following tables:
- `events` - Event information
- `gallery_images` - Photo gallery
- `committee_members` - Executive board
- `blog_posts` - Articles and news
- `membership_applications` - Member requests

## 🔐 Security

- Environment variables for sensitive data
- Secure form submissions
- CORS configuration
- Input validation and sanitization

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🚢 Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, contact:
- Email: contact@jmc.green.edu.bd
- Phone: +880 1700-000000

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and create feature branches for new changes.

---

**JMC Media Club** © 2024 - Green University of Bangladesh
