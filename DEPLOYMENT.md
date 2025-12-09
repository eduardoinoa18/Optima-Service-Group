# Optima Service Group - Complete Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] GitHub account
- [ ] Vercel account (sign up with GitHub)
- [ ] Database setup (Supabase/Neon/Vercel Postgres)
- [ ] Resend API key for emails
- [ ] Custom domain (optional)

---

## 🗄️ Step 1: Set Up Database

### Option A: Supabase (Recommended - Free Tier Available)

1. **Create Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up with GitHub

2. **Create Project**
   - Click "New Project"
   - Choose organization
   - Enter project name: `optima-service-group`
   - Set strong database password (save it!)
   - Select region closest to your users
   - Click "Create new project"

3. **Get Connection String**
   - Go to Project Settings → Database
   - Find "Connection string" section
   - Select "Session" mode
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your database password

4. **Save for Later**
   ```
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```

### Option B: Neon (Serverless PostgreSQL)

1. Go to [neon.tech](https://neon.tech)
2. Sign up and create new project
3. Copy connection string
4. Save for later

### Option C: Vercel Postgres

1. Will be set up automatically in Vercel dashboard
2. Skip to Step 2

---

## 📧 Step 2: Set Up Email (Resend)

1. **Create Account**
   - Go to [resend.com](https://resend.com)
   - Sign up (free tier: 3,000 emails/month)

2. **Verify Domain (Recommended) OR Use Test Domain**
   
   **Option A: Verify Your Domain (for production)**
   - Go to Domains → Add Domain
   - Enter your domain (e.g., `optimaservicegroup.com`)
   - Add DNS records provided by Resend to your domain registrar
   - Wait for verification
   
   **Option B: Use Test Domain (for development)**
   - Use `onboarding@resend.dev` as sender
   - Limited to 100 emails/day

3. **Get API Key**
   - Go to API Keys
   - Click "Create API Key"
   - Name it: "Optima Website"
   - Copy the key (starts with `re_`)
   - **Save this key - you won't see it again!**

4. **Save for Later**
   ```
   RESEND_API_KEY="re_your_api_key_here"
   ```

---

## 🔐 Step 3: Generate NextAuth Secret

### On Mac/Linux:
```bash
openssl rand -base64 32
```

### On Windows (PowerShell):
```powershell
$bytes = New-Object byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
[Convert]::ToBase64String($bytes)
```

### Or Use Online Generator:
- Visit [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)

**Save the output:**
```
NEXTAUTH_SECRET="your_generated_secret_here"
```

---

## 🐙 Step 4: Push to GitHub

1. **Create GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name: `optima-service-group`
   - Make it Private
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push Code to GitHub**
   ```bash
   cd optima-service-group
   git init
   git add .
   git commit -m "Initial commit - Optima Service Group website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/optima-service-group.git
   git push -u origin main
   ```

---

## 🚀 Step 5: Deploy to Vercel

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose `optima-service-group`
   - Click "Import"

2. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./ (leave as is)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** .next (default)

3. **Add Environment Variables**
   Click "Environment Variables" and add:

   ```env
   DATABASE_URL
   postgresql://postgres:[PASSWORD]@db.[REF].supabase.co:5432/postgres

   NEXTAUTH_URL
   https://optima-service-group.vercel.app (Vercel will provide this URL)

   NEXTAUTH_SECRET
   [Your generated secret from Step 3]

   RESEND_API_KEY
   [Your Resend API key from Step 2]

   CONTACT_EMAIL
   inoaserv@gmail.com
   ```

4. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `optima-service-group.vercel.app`

---

## 🌐 Step 6: Add Custom Domain (Optional)

1. **Purchase Domain**
   - Use Namecheap, GoDaddy, or Google Domains
   - Suggested: `optimaservicegroup.com`

2. **Add Domain in Vercel**
   - Go to your project dashboard
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain: `optimaservicegroup.com`
   - Also add: `www.optimaservicegroup.com`

3. **Update DNS Records**
   - Vercel will show you the DNS records to add
   - Log in to your domain registrar
   - Add the A record and CNAME record as shown
   - Wait 24-48 hours for DNS propagation

4. **Update Environment Variable**
   - In Vercel → Settings → Environment Variables
   - Edit `NEXTAUTH_URL`
   - Change to: `https://optimaservicegroup.com`
   - Redeploy

---

## ✅ Step 7: Initialize Database

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Link Project**
   ```bash
   cd optima-service-group
   vercel link
   ```

4. **Pull Environment Variables**
   ```bash
   vercel env pull
   ```

5. **Run Database Migration**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

---

## 🧪 Step 8: Test Your Site

### Test These Features:

1. **Homepage**
   - ✅ Logo animation works
   - ✅ Service tiles are clickable
   - ✅ WhatsApp button opens correctly
   - ✅ Mobile sticky bottom bar appears

2. **Service Pages**
   - ✅ All 6 service pages load
   - ✅ Back button works
   - ✅ Content displays correctly
   - ✅ CTAs are functional

3. **Contact Form**
   - ✅ Form submits successfully
   - ✅ Email arrives at `inoaserv@gmail.com`
   - ✅ Thank you message appears
   - ✅ Form validation works

4. **Navigation**
   - ✅ All menu links work
   - ✅ Mobile menu opens/closes
   - ✅ Footer links work

5. **Mobile Experience**
   - ✅ Site is responsive
   - ✅ Touch targets are adequate
   - ✅ No horizontal scrolling

---

## 🔄 Step 9: Future Updates

### To Update the Website:

1. **Make Changes Locally**
   ```bash
   # Edit files
   npm run dev  # Test locally
   ```

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. **Automatic Deployment**
   - Vercel automatically detects the push
   - Builds and deploys new version
   - Takes 2-3 minutes
   - Live at your URL!

---

## 🎯 Next Phase: Client Portal & Admin Dashboard

### What's Left to Build:

1. **Client Portal**
   - User registration and login
   - Dashboard showing service requests
   - Document upload functionality
   - Message center
   - Profile settings

2. **Admin Dashboard**
   - Admin login
   - View all client submissions
   - Manage service requests
   - Document review system
   - Client management

3. **File Upload System**
   - Secure file storage (AWS S3 or Supabase)
   - File type validation
   - Virus scanning
   - Download functionality

4. **Additional Features**
   - Spanish language toggle
   - Appointment booking integration (Calendly)
   - Payment processing (Stripe)
   - Email automation
   - SMS notifications

---

## 📊 Step 10: Set Up Analytics (Optional)

### Google Analytics 4:

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Vercel**
   - Go to Vercel → Environment Variables
   - Add: `NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"`
   - Redeploy

3. **Add Tracking Code**
   - Edit `src/app/layout.tsx`
   - Add Google Analytics script (see documentation)

---

## 🆘 Troubleshooting

### Build Failed in Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Database Connection Error
- Verify `DATABASE_URL` is correct
- Check if database is active (Supabase/Neon dashboard)
- Ensure IP allowlist includes Vercel IPs (if applicable)

### Emails Not Sending
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for logs
- Ensure sender domain is verified (if using custom domain)
- Check spam folder

### 404 Errors
- Clear Vercel cache and redeploy
- Check file paths are correct
- Verify pages are in correct directories

---

## 📞 Support

If you need help:
- 📧 Email: inoaserv@gmail.com
- 📱 Phone: (978) 705-5509
- 💬 WhatsApp: [Chat with us](https://wa.me/19787055509)

---

## ✨ You're Live!

Congratulations! Your Optima Service Group website is now live and professional. 

**Next Steps:**
1. Share the URL with your team
2. Test all functionality
3. Start planning Phase 2 (Client Portal & Admin)
4. Monitor analytics and gather feedback

---

**Need ongoing development support? Contact the development team through the channels above.**
