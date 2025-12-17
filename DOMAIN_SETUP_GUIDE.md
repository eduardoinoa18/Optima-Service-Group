# Domain Setup Guide for optimaservicegroup.com

## ✅ What's Already Configured

### 1. Custom Domain Metadata
- All metadata URLs updated to `https://www.optimaservicegroup.com`
- OpenGraph and Twitter Card images optimized
- Schema.org structured data using custom domain
- Language alternates configured

### 2. Favicon & Icons
- ✅ `favicon.ico` (32x32) - Browser tab icon
- ✅ `icon-16.png` (16x16) - Small favicon
- ✅ `icon-32.png` (32x32) - Standard favicon
- ✅ `icon-192.png` (192x192) - Android icon
- ✅ `icon-512.png` (512x512) - Android splash
- ✅ `apple-touch-icon.png` (180x180) - iOS home screen
- ✅ `og-image.png` (1200x630) - Social media preview
- ✅ `twitter-image.png` (1200x630) - Twitter card

All icons generated from your `Logo.png` with brand navy background.

## 🚀 Vercel Domain Configuration Steps

### Step 1: Add Domain in Vercel Dashboard
1. Go to https://vercel.com/[your-project]/settings/domains
2. Click "Add Domain"
3. Enter `optimaservicegroup.com`
4. Also add `www.optimaservicegroup.com`
5. Vercel will show you DNS records to configure

### Step 2: DNS Configuration
Since you purchased through Vercel, DNS should be automatically configured. Verify:

1. Go to your Vercel domain settings
2. Check that both domains show as "Valid Configuration"
3. Wait 24-48 hours for full DNS propagation

**Expected DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: SSL/HTTPS Configuration
- Vercel automatically provisions SSL certificates
- Should be ready within a few minutes of domain verification
- Check status in Vercel dashboard under Domains

### Step 4: Redirect Configuration
Set up these redirects in Vercel:
1. `optimaservicegroup.com` → `www.optimaservicegroup.com` (recommended)
2. Or vice versa (your preference)

Add to `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "optimaservicegroup.com"
        }
      ],
      "destination": "https://www.optimaservicegroup.com/:path*",
      "permanent": true
    }
  ]
}
```

## 🔍 SEO Verification Checklist

### Google Search Console
1. Visit https://search.google.com/search-console
2. Add property: `https://www.optimaservicegroup.com`
3. Verify using HTML file method or DNS TXT record
4. Submit sitemap: `https://www.optimaservicegroup.com/sitemap.xml`

### Rich Results Test
1. Visit https://search.google.com/test/rich-results
2. Test your homepage URL
3. Verify Organization schema is detected

### Social Media Preview Testing
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

Test URLs:
- Homepage: `https://www.optimaservicegroup.com`
- Services: `https://www.optimaservicegroup.com/services`
- About: `https://www.optimaservicegroup.com/about`

## 📊 Expected SEO Improvements

### Before (Vercel Default Domain)
- Generic `.vercel.app` domain (low trust)
- No brand recognition in URL
- Limited social media preview

### After (Custom Domain)
- ✅ Professional brand domain
- ✅ Improved click-through rates
- ✅ Better social media presence
- ✅ Enhanced trust signals
- ✅ Memorable URL for customers
- ✅ Custom branded favicon in all browsers
- ✅ High-quality OG images (1200x630)
- ✅ Optimized meta descriptions
- ✅ Structured data for rich snippets

## 🎨 Icon Generation

If you ever need to regenerate icons:
```bash
npm install --save-dev sharp
node scripts/generate-icons.js
```

## 🔄 Future Updates

### Update Domain References
If you need to change the domain in the future:
1. Update `metadataBase` in `src/app/layout.tsx`
2. Update schema.org URLs in layout
3. Update `alternates.languages` URLs
4. Regenerate sitemap if needed

### Performance Tips
- ✅ Images are optimized (PNG with transparency)
- ✅ Multiple icon sizes for different contexts
- ✅ OG image uses brand colors
- ✅ Lazy loading configured
- ✅ Next.js Image optimization enabled

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify DNS propagation: https://dnschecker.org
3. Test SSL certificate: https://www.ssllabs.com/ssltest/
4. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

---

**Last Updated**: December 17, 2025
**Domain**: optimaservicegroup.com
**Status**: Ready for production ✅
