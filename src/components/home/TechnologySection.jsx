import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

const technologies = [
  { 
    name: "Flutter", 
    src: "/logos/flutter.png", 
    desc: "Framework Mobile", 
    category: "Mobile",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-400/40"
  },
  { 
    name: "Laravel", 
    src: "/logos/laravel.png", 
    desc: "Framework Web PHP", 
    category: "Backend",
    color: "from-red-400 to-orange-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    hoverColor: "hover:border-red-400/40"
  },
  { 
    name: "Node.js", 
    src: "/logos/nodejs.png", 
    desc: "Serveur JavaScript", 
    category: "Backend",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-400/40"
  },
  { 
    name: "Next.js", 
    src: "/logos/nextjs.png", 
    desc: "Framework React Fullstack", 
    category: "Frontend",
    color: "from-gray-300 to-white",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    hoverColor: "hover:border-gray-400/40"
  },
  { 
    name: "TailwindCSS", 
    src: "/logos/Tailwind.png", 
    desc: "Framework CSS Moderne", 
    category: "Frontend",
    color: "from-cyan-400 to-teal-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    hoverColor: "hover:border-cyan-400/40"
  },
  { 
    name: "React", 
    src: "/logos/react.png", 
    desc: "Librairie UI Frontend", 
    category: "Frontend",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-400/40"
  },
  { 
    name: "Oracle", 
    src: "/logos/oracle.png", 
    desc: "Base de Données Cloud", 
    category: "Database",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    hoverColor: "hover:border-red-400/40"
  },
  { 
    name: "PHP", 
    src: "/logos/php.png", 
    desc: "Langage Web Back-end", 
    category: "Backend",
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-400/40"
  },
  { 
    name: "Dart", 
    src: "/logos/Dart.png", 
    desc: "Langage Mobile Flutter", 
    category: "Mobile",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-400/40"
  },
  { 
    name: "PHPMyAdmin", 
    src: "/logos/PhpMyAdmin.png", 
    desc: "Gestionnaire de Bases MySQL", 
    category: "Database",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-400/40"
  },
  { 
    name: "MySQL", 
    src: "/logos/Mysql.png", 
    desc: "Base de Données Open-Source", 
    category: "Database",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-400/40"
  },
  { 
    name: "MongoDB", 
    src: "/logos/Mongodb.png", 
    desc: "Base NoSQL Flexible", 
    category: "Database",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-400/40"
  },
  { 
    name: "Redis", 
    src: "/logos/redis.png", 
    desc: "Cache & Database Rapide", 
    category: "Database",
    color: "from-red-400 to-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    hoverColor: "hover:border-red-400/40"
  },
];

const categories = ["Toutes", "Frontend", "Backend", "Mobile", "Database"];

// Enhanced SEO Schema.org structured data for MENA region - will be dynamic based on translation
const getSchemaData = (t) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": t('technologies.title') + ' ' + t('technologies.titleAccent'),
  "description": t('technologies.description'),
  "author": {
    "@type": "Organization",
    "name": "Symloop Technology",
    "url": "https://symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DZ",
      "addressRegion": "MENA"
    }
  },
  "about": technologies.map(tech => ({
    "@type": "SoftwareApplication",
    "name": tech.name,
    "description": `${tech.desc} - Solution technologique MENA`,
    "applicationCategory": tech.category,
    "operatingSystem": "Cross-platform",
    "softwareVersion": "Latest"
  })),
  "keywords": "développement web MENA, technologies modernes Moyen-Orient, stack technique Afrique du Nord, React Algérie, Next.js Maroc, Laravel Tunisie, Flutter Émirats, Node.js Qatar, MongoDB Arabie Saoudite, Python machine learning MENA",
  "inLanguage": ["fr", "ar", "en"],
  "audience": {
    "@type": "Audience",
    "geographicArea": ["Algeria", "Morocco", "Tunisia", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Lebanon", "Jordan", "Egypt"]
  }
});

export default function TechnologySection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [hoveredTech, setHoveredTech] = useState(null);
  
  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);

  const filteredTechnologies = activeCategory === "Toutes" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <>
      {/* SEO Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaData(t)) }}
      />
      
      <section 
        className={`relative py-32 bg-black text-white overflow-hidden ${isRTL ? 'rtl-technology' : ''}`}
        aria-labelledby="technology-heading"
        key={`technology-${router.locale}`}
      >

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Premium Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm border border-white/20 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium text-white/90">{t('technologies.badge')}</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">🌍</span>
            </motion.div>
            
            <h2 
              id="technology-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white"
            >
              {t('technologies.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-normal mt-2">
                {t('technologies.titleAccent')}
              </span>
            </h2>
            
            <h3 className="text-xl lg:text-2xl font-light mb-6 text-gray-400">
              {t('technologies.subtitle')}
            </h3>
            
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-6">
              {t('technologies.description')}
            </p>

            <p className="text-sm text-gray-400 max-w-3xl mx-auto font-light">
              {t('technologies.techList')}
            </p>

            {/* Premium Category Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mt-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isRTL ? 'rtl-btn' : ''} ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Premium Technologies Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-16"
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  layout: { duration: 0.3 },
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -2,
                  x: isRTL ? 2 : 0,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <article className={`relative p-6 rounded-xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 overflow-hidden ${isRTL ? 'rtl-tech-card' : ''}`}>

                  <div className="relative flex flex-col items-center space-y-4">
                    {/* Premium Logo container */}
                    <div className="relative w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={tech.src}
                        alt={`${tech.name} - Technologie MENA`}
                        width={32}
                        height={32}
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Premium Content */}
                    <div className={`space-y-2 ${isRTL ? 'text-center' : 'text-center'}`}>
                      <h3 className="font-medium text-white group-hover:text-white transition-colors duration-300 text-sm leading-tight">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-tight font-light">
                        {tech.desc}
                      </p>
                      
                      {/* Minimal Category badge */}
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  {/* Minimal Hover indicator */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10"
              >
                <div className="text-2xl font-light text-white">
                  {technologies.length}+
                </div>
                <div className="text-gray-400 text-sm font-light">{t('technologies.stats.technologies')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10"
              >
                <div className="text-2xl font-light text-white">
                  100%
                </div>
                <div className="text-gray-400 text-sm font-light">{t('technologies.stats.solutions')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10"
              >
                <div className="text-2xl font-light text-white">
                  10+
                </div>
                <div className="text-gray-400 text-sm font-light">{t('technologies.stats.countries')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10"
              >
                <div className="text-2xl font-light text-white">
                  24/7
                </div>
                <div className="text-gray-400 text-sm font-light">{t('technologies.stats.support')}</div>
              </motion.div>
            </div>

            {/* MENA Countries SEO Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {t('technologies.seoText')}
              </p>
            </motion.div>
          </motion.div>

          {/* Premium Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="mb-8">
              <p className="text-gray-400 mb-4 text-lg font-light">
                {t('technologies.ctaDescription')}
              </p>
              <p className="text-sm text-gray-500 font-light">
                {t('technologies.ctaSubtext')}
              </p>
            </div>

            <Link href="/services">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('technologies.cta')}
                {isRTL ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.828-.46l-2.396.758.758-2.396A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.828-.46l-2.396.758.758-2.396A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                )}
              </motion.button>
            </Link>
            
            <p className="text-xs text-gray-600 mt-4 font-light">
              {t('technologies.footer')}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}