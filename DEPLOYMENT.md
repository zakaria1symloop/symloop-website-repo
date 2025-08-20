# 🚀 Symloop Website Deployment Guide

Complete deployment guide for the Symloop Technology website across different hosting platforms.

## 🌟 Quick Start

### Prerequisites
- Node.js 18+
- Git repository access
- Domain name configured
- SSL certificate (recommended)

### Build Commands
```bash
# Install dependencies
npm ci

# Build for production
npm run build

# Test build locally
npm start
```

## 🏗️ Deployment Options

### 1. 🟢 Vercel (Recommended for Next.js)

**Pros**: 
- Zero-config deployment
- Automatic HTTPS
- Edge network
- Preview deployments
- Built for Next.js

**Steps**:
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard
# - NEXT_PUBLIC_API_URL
# - NEXT_PUBLIC_OPENAI_API_KEY
# - etc.
```

**Custom Domain**:
1. Go to Vercel dashboard
2. Add domain: `symloop.com`
3. Configure DNS records as instructed

---

### 2. 🔵 Netlify

**Pros**:
- Git-based deployments
- Form handling
- Branch previews
- Built-in CDN

**Steps**:
```bash
# Build settings in Netlify
Build command: npm run build
Publish directory: .next

# Environment variables (same as Vercel)
```

**Deploy**:
1. Connect GitHub repository
2. Set build settings
3. Configure environment variables
4. Deploy

---

### 3. 🟠 Hostinger (VPS/Cloud)

**Pros**:
- Full server control
- Custom backend hosting
- Cost-effective
- Laravel backend support

**Requirements**:
- Hostinger Cloud/VPS plan
- Node.js 18+ support
- PM2 process manager

**Steps**:
```bash
# SSH into server
ssh user@your-server-ip

# Clone repository
git clone <your-repo-url>
cd symloop-website

# Install dependencies
npm ci

# Install PM2
npm install -g pm2

# Build project
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

**Nginx Configuration** (`/etc/nginx/sites-available/symloop.com`):
```nginx
server {
    listen 80;
    server_name symloop.com www.symloop.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name symloop.com www.symloop.com;

    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### 4. 🔴 DigitalOcean App Platform

**Pros**:
- Managed hosting
- Auto-scaling
- GitHub integration
- Database options

**Steps**:
1. Create app in DigitalOcean
2. Connect GitHub repository
3. Set build commands:
   - Build: `npm run build`
   - Run: `npm start`
4. Configure environment variables
5. Deploy

---

### 5. 🟡 AWS (S3 + CloudFront)

**For Static Export Only**:
```bash
# Build static version
npm run export

# Upload to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Note**: This loses server-side features like API routes.

---

## 🔧 Environment Variables Setup

Create these in your hosting platform:

### Required Variables
```env
NEXT_PUBLIC_API_URL=https://api.symloop.com
NEXT_PUBLIC_SITE_URL=https://symloop.com
NEXT_PUBLIC_PHONE_NUMBER=+213549575512
NEXT_PUBLIC_EMAIL=contact@symloop.com
```

### Optional but Recommended
```env
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_WHATSAPP_NUMBER=213549575512
```

## 📱 Backend Deployment (Laravel)

### Hostinger/VPS Setup
```bash
# In backend directory
cd symloop-backend/symloop-backend

# Install dependencies
composer install --optimize-autoloader --no-dev

# Copy environment
cp .env.example .env

# Generate key
php artisan key:generate

# Run migrations
php artisan migrate --force

# Optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Backend Environment (.env)
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://api.symloop.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=symloop_db
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

OPENAI_API_KEY=your_openai_key
```

## 🔐 SSL/HTTPS Setup

### Let's Encrypt (Free)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d symloop.com -d www.symloop.com

# Auto-renewal (cron job)
0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Performance Optimization

### Next.js Config (`next.config.js`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 300,
  },
};

module.exports = nextConfig;
```

### PM2 Ecosystem (`ecosystem.config.js`)
```javascript
module.exports = {
  apps: [
    {
      name: 'symloop-website',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/symloop-website',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ],
};
```

## 🎯 Deployment Checklist

### Pre-Deployment
- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] SSL certificate ready
- [ ] Domain DNS configured
- [ ] Build tested locally
- [ ] Performance audit completed

### Post-Deployment
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Forms working (contact, consultation)
- [ ] ChatGPT integration functional
- [ ] Multi-language switching working
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Analytics tracking active

## 🚨 Troubleshooting

### Common Issues

**Build Fails**:
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**API Connection Issues**:
- Check `NEXT_PUBLIC_API_URL` variable
- Verify CORS settings in backend
- Test API endpoints directly

**Environment Variables Not Loading**:
- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Restart deployment after adding variables
- Check platform-specific variable syntax

**Performance Issues**:
```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer
# Add to next.config.js: withBundleAnalyzer({})
```

## 📞 Support

For deployment issues:
- Email: contact@symloop.com
- Phone: +213 549 575 512
- Check platform-specific documentation
- Review deployment logs

---

## 🎉 Go Live!

1. Choose your platform (Vercel recommended)
2. Configure environment variables
3. Deploy following platform steps
4. Verify functionality
5. Set up monitoring and analytics
6. Announce launch!

**Your Symloop Technology website is ready for the world! 🌍**