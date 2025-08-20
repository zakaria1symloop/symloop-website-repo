# Symloop Technology - Official Website 🌍

A modern, multilingual technology company website built with Next.js, featuring advanced animations, AI chat integration, and comprehensive business solutions showcase for the MENA region.

![Symloop Technology](./public/sym-logo.png)

## 🚀 Features

### Core Features
- **🌐 Multilingual Support**: English, French, and Arabic with RTL support
- **🎨 Modern UI/UX**: Premium animations with Framer Motion
- **🤖 AI Chat Integration**: ChatGPT-powered business assistant
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Performance Optimized**: Next.js with static generation
- **🔍 SEO Optimized**: Complete meta tags, structured data, and sitemaps

### Business Features
- **💼 Services Showcase**: Web development, mobile apps, ERP/CRM solutions
- **📊 Interactive Portfolio**: Dynamic project displays with filtering
- **💬 Contact Integration**: WhatsApp, Viber, and phone contact modals
- **📈 Pricing Calculator**: Dynamic quote generation for services
- **🎓 Learning Platform**: Educational content and resources
- **👥 Recruitment Portal**: Job applications and team showcase

### Technical Features
- **🔐 Backend Integration**: Laravel-based API for contact forms and chat
- **📧 Email Automation**: Automated quote and consultation requests
- **📱 PWA Support**: Progressive Web App capabilities
- **🌟 Animation System**: Advanced micro-interactions and page transitions
- **🎯 Analytics Ready**: Google Analytics and conversion tracking setup

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.3+
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 12.9+
- **Icons**: Lucide React 0.503+
- **Internationalization**: next-i18next 15.4+

### Backend
- **API**: Laravel 10+ (in symloop-backend/)
- **Database**: MySQL with migrations
- **Authentication**: Sanctum for API security
- **Email**: Laravel Mail with queue support

### Development
- **Package Manager**: npm
- **Code Quality**: ESLint configuration
- **Build Tool**: Next.js built-in
- **Version Control**: Git

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- PHP 8.1+ and Composer (for backend)
- MySQL database

### Frontend Setup
```bash
# Clone the repository
git clone <repository-url>
cd symloop-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup (Laravel API)
```bash
# Navigate to backend directory
cd symloop-backend/symloop-backend

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env file
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=symloop_website
# DB_USERNAME=your_username
# DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Start Laravel development server
php artisan serve
```

## 🖥️ Available Scripts

### Frontend Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Static export
npm run export

# Run tests
npm test
```

### Backend Scripts
```bash
# Start Laravel server
php artisan serve

# Run migrations
php artisan migrate

# Clear cache
php artisan cache:clear

# Generate optimized class loader
composer dump-autoload
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SITE_URL=https://symloop.com

# ChatGPT Integration
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key

# Contact Information
NEXT_PUBLIC_PHONE_NUMBER=+213549575512
NEXT_PUBLIC_EMAIL=contact@symloop.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📁 Project Structure

```
symloop-website/
├── public/                 # Static assets
│   ├── assets/            # Images and media
│   ├── locales/           # Translation files
│   │   ├── en/           # English translations
│   │   ├── fr/           # French translations
│   │   └── ar/           # Arabic translations
│   ├── products/          # Product images
│   └── sym-logo.png      # Main logo
├── src/
│   ├── components/        # React components
│   │   ├── home/         # Homepage components
│   │   ├── layout/       # Layout components
│   │   ├── services/     # Service components
│   │   └── ui/           # UI components
│   ├── pages/            # Next.js pages
│   ├── services/         # API services
│   └── utils/            # Utility functions
├── styles/               # Global styles
├── symloop-backend/      # Laravel backend
└── deployment files     # Deployment documentation
```

## 🎨 Key Components

### HeroSection.jsx
Main landing section with:
- Animated service selector
- AI chat integration
- Contact modal system
- Multi-language support

### Header.jsx
Navigation with:
- Language switcher
- Responsive menu
- Scroll effects

### ChatBotModal.jsx
AI-powered chat with:
- ChatGPT integration
- Contextual responses
- Quick reply suggestions
- Session management

## 🌐 Multilingual Support

### Supported Languages
- **English (en)**: Default language
- **French (fr)**: Secondary language
- **Arabic (ar)**: RTL support enabled

### Translation Files
Located in `/public/locales/{lang}/`:
- `common.json`: General translations
- `asa.json`: ASA product translations
- `symtv.json`: SymTV product translations

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first Tailwind CSS approach
- **Touch Interactions**: Optimized for mobile gestures
- **Performance**: Optimized images and lazy loading
- **PWA Features**: Service worker and manifest.json

## 🚀 Deployment

### Hostinger Deployment
See `HOSTINGER-DEPLOYMENT.md` for detailed instructions.

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment
```bash
# Build the project
npm run build

# Upload build files to your hosting provider
# Configure web server to serve from build directory
```

## 📊 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media sharing optimization
- **Performance**: Core Web Vitals optimization

## 🤖 AI Chat Integration

### Features
- OpenAI GPT integration
- Contextual business responses
- Multi-language support
- Session persistence
- Quick reply suggestions

### Configuration
Update ChatGPT settings in `src/services/apiService.js`

## 📞 Contact Integration

### Available Contact Methods
- **WhatsApp**: Direct WhatsApp integration
- **Phone**: Click-to-call functionality
- **Viber**: Viber contact support
- **Email**: Contact form integration

## 🎯 Business Features

### Services Offered
- Web Development
- Mobile App Development
- ERP/CRM Solutions
- Cloud Infrastructure
- Digital Marketing
- IT Consulting

### Target Market
- MENA Region focus
- Arabic language support
- Local business compliance
- Regional pricing

## 🔧 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow Next.js best practices
- Maintain consistent naming conventions
- Document complex functions

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature
```

## 📈 Analytics & Monitoring

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Hotjar for user behavior
- Performance monitoring with Vercel

## 🆘 Troubleshooting

### Common Issues
1. **Build Errors**: Check Node.js version compatibility
2. **Translation Missing**: Verify translation keys in locale files
3. **API Connection**: Check backend server status
4. **Deployment Issues**: Review environment variables

### Support
- Email: contact@symloop.com
- Phone: +213 549 575 512
- Documentation: Check CLAUDE.md for development notes

## 📄 License

This project is proprietary software owned by Symloop Technology.

## 🤝 Contributing

This is a private project. For internal development:
1. Follow the git workflow above
2. Test thoroughly before commits
3. Update documentation as needed
4. Review with team before deployment

---

**Symloop Technology** - Driving Digital Transformation in the MENA Region 🚀

For more information, visit: [symloop.com](https://symloop.com)