# Optima Service Group Website

**Your Solution, All in One Place** — A modern, mobile-first website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

✅ **Modern App-Like Design** - Linktree/Popl-style landing page  
✅ **Mobile-First & Responsive** - Perfect on all devices  
✅ **Animated Logo** - Smooth transitions and hover effects  
✅ **Full Service Pages** - Dedicated pages for each service  
✅ **Contact Form** - With email integration via Resend  
✅ **WhatsApp Integration** - Direct chat functionality  
✅ **SEO Optimized** - Complete metadata and Open Graph tags  
✅ **Accessibility Compliant** - WCAG AA standards  
✅ **Bilingual Ready** - English/Spanish support structure  
✅ **Database Ready** - Prisma + PostgreSQL setup  

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd optima-service-group
npm install
```

### 2. Set Up Environment Variables
Create `.env` file in the root:
```env
# Database (use Supabase, Neon, or local PostgreSQL)
DATABASE_URL="postgresql://user:password@host:5432/database"

# NextAuth (generate secret with: openssl rand -base64 32)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-secret-here"

# Email (get free API key from resend.com)
RESEND_API_KEY="re_your_api_key"
CONTACT_EMAIL="inoaserv@gmail.com"
```

### 3. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## 📦 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | PostgreSQL + Prisma ORM |
| **Auth** | NextAuth.js |
| **Email** | Resend |
| **Forms** | React Hook Form + Zod |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

## 📁 Project Structure

```
optima-service-group/
├── prisma/
│   └── schema.prisma          # Database models
├── src/
│   ├── app/
│   │   ├── (pages)/          # Public pages
│   │   ├── api/              # API routes
│   │   ├── portal/           # Client portal (to complete)
│   │   ├── services/[slug]/  # Dynamic service pages
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/           # Reusable components
│   └── lib/
│       ├── services-data.ts  # Service content
│       └── utils.ts          # Helper functions
├── .env                      # Environment variables
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies
```

## 🎨 Branding

### Colors
- **Navy (Primary):** `#0A2942`
- **Gold (Secondary):** `#D4AF37`

### Fonts
- **Headings:** Montserrat Bold
- **Body:** Inter Regular

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/optima-service-group.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Add environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (use your Vercel domain)
   - `NEXTAUTH_SECRET`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
5. Click **Deploy** 🚀

### Step 3: Custom Domain (Optional)
1. In Vercel → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 📧 Email Setup (Resend)

1. Create account at [resend.com](https://resend.com) (free tier available)
2. Verify your domain OR use their test domain for development
3. Get API key from dashboard
4. Add to `.env` as `RESEND_API_KEY`
5. Update sender email in `src/app/api/contact/route.ts`

## 🗄️ Database Options

### Option 1: Supabase (Recommended - Free Tier)
1. Create project at [supabase.com](https://supabase.com)
2. Go to Settings → Database
3. Copy connection string (Session mode)
4. Add to `.env` as `DATABASE_URL`

### Option 2: Neon (Serverless PostgreSQL)
1. Create project at [neon.tech](https://neon.tech)
2. Copy connection string
3. Add to `.env`

### Option 3: Vercel Postgres
1. Add Postgres in Vercel dashboard
2. Environment variable automatically added

## 🔐 Generate NextAuth Secret

```bash
openssl rand -base64 32
```
Copy output to `.env` as `NEXTAUTH_SECRET`

## 📱 Pages Included

✅ **Home** - App-style landing with service tiles  
✅ **About Us** - Company mission, values, founders  
✅ **Services** - Overview of all services  
✅ **Service Detail Pages** (6 pages):
   - Tax Preparation
   - Immigration Form Assistance
   - Notary Public Services
   - Credit Repair
   - Document Preparation
   - Business Support Services  
✅ **Contact** - Contact form with WhatsApp integration  
✅ **FAQ** - Comprehensive FAQ by category  

## 🔜 To Complete (Phase 2)

### Client Portal
- [ ] User registration & login
- [ ] Dashboard with service status
- [ ] Secure document upload
- [ ] Message center
- [ ] Profile management

### Admin Dashboard
- [ ] Admin authentication
- [ ] Client management system
- [ ] Service request tracking
- [ ] Document review interface
- [ ] Analytics dashboard

### Additional Features
- [ ] Spanish language version (i18n)
- [ ] Appointment booking (Calendly integration)
- [ ] File upload system (AWS S3 or Supabase)
- [ ] Payment processing (Stripe)
- [ ] SMS notifications
- [ ] Email automation

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Prisma Issues
```bash
# Regenerate Prisma client
npx prisma generate
```

### Database Connection Failed
- Check `DATABASE_URL` format
- Ensure database is running
- Verify credentials

## 📊 Adding Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env`:
```env
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```
4. Add tracking code to `layout.tsx` (see full README for code)

## 📞 Support

**Optima Service Group**  
📧 Email: inoaserv@gmail.com  
📱 Phone: (978) 705-5509  
💬 WhatsApp: [Chat with us](https://wa.me/19787055509)

**Business Hours:**  
Mon-Fri: 9am-6pm  
Sat: By appointment  
Sun: Closed

## 📄 License

© 2024 Optima Service Group. All rights reserved.

---

**Built with ❤️ for Optima Service Group**
