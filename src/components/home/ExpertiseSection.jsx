import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Network, 
  Cloud,
  ArrowRight
} from "lucide-react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';


const technologies = [
  "Java", "Python", ".NET", "PHP Laravel", "Node.js", "React", "Angular",
  "Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis",
  "Cisco", "VMware", "Docker", "Kubernetes", "AWS", "Azure",
  "Linux", "Windows Server", "Active Directory", "Exchange"
];

export default function ExpertiseSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  
  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);

  const expertiseData = [
    {
      title: t('expertise.software.title'),
      subtitle: t('expertise.software.subtitle'),
      description: t('expertise.software.description'),
      icon: Code2,
      features: t('expertise.software.features', { returnObjects: true }),
      metric: t('expertise.software.metric'),
      metricLabel: t('expertise.software.metricLabel')
    },
    {
      title: t('expertise.network.title'),
      subtitle: t('expertise.network.subtitle'),
      description: t('expertise.network.description'),
      icon: Network,
      features: t('expertise.network.features', { returnObjects: true }),
      metric: t('expertise.network.metric'),
      metricLabel: t('expertise.network.metricLabel')
    },
    {
      title: t('expertise.database.title'),
      subtitle: t('expertise.database.subtitle'),
      description: t('expertise.database.description'),
      icon: Database,
      features: t('expertise.database.features', { returnObjects: true }),
      metric: t('expertise.database.metric'),
      metricLabel: t('expertise.database.metricLabel')
    },
    {
      title: t('expertise.cloud.title'),
      subtitle: t('expertise.cloud.subtitle'),
      description: t('expertise.cloud.description'),
      icon: Cloud,
      features: t('expertise.cloud.features', { returnObjects: true }),
      metric: t('expertise.cloud.metric'),
      metricLabel: t('expertise.cloud.metricLabel')
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ITCompany",
    "name": "Symloop Technology Algérie",
    "alternateName": "Symloop DZ",
    "description": "Entreprise IT leader en Algérie spécialisée dans le développement logiciel, infrastructure réseau, bases de données et solutions cloud pour entreprises algériennes",
    "url": "https://symloop.com",
    "telephone": "+213-549-575-512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sétif",
      "addressLocality": "Sétif",
      "addressRegion": "Sétif",
      "postalCode": "19000",
      "addressCountry": "DZ"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Algeria"
      }
    ],
    "knowsAbout": technologies,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services IT Professionnels Algérie",
      "itemListElement": expertiseData.map((item, index) => ({
        "@type": "Service",
        "@id": `https://symloop.com#service-${index}`,
        "serviceType": item.title,
        "name": item.subtitle,
        "description": item.description,
        "areaServed": "Algeria",
        "provider": {
          "@type": "Organization",
          "name": "Symloop Technology"
        }
      }))
    }
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <section 
        className={`relative py-24 bg-black text-white overflow-hidden ${isRTL ? 'rtl-expertise' : ''}`}
        aria-labelledby="expertise-heading"
        key={`expertise-${router.locale}`}
      >
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/10 rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header - SEO Optimized for Algeria */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 
              id="expertise-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {t('expertise.title')}{" "}
              <span className="text-gray-400 font-light">
                {t('expertise.titleAccent')}
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('expertise.subtitle')}
            </p>

           
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">Alger</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">Oran</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">Constantine</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">Sétif</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">48 Wilayas</span>
            </div>
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {expertiseData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-700">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{item.metric}</div>
                        <div className="text-xs text-gray-500">{item.metricLabel}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more link */}
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <a 
                        href={`/services`}
                        className={`inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        {t('cta.learnMore')}
                        {isRTL ? (
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ transform: 'scaleX(-1)' }} />
                        ) : (
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-10">
              {t('expertise.technologiesTitle')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:border-white/20 hover:text-white transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-sm text-gray-500">{t('expertise.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-gray-500">{t('expertise.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-gray-500">{t('expertise.stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">58</div>
              <div className="text-sm text-gray-500">{t('expertise.stats.wilayas')}</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-8 text-lg">
              {t('expertise.ctaQuestion')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                {t('cta.requestQuote')}
                {isRTL ? (
                  <ArrowRight className="w-5 h-5" style={{ transform: 'scaleX(-1)' }} />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gray-700 text-white font-medium px-8 py-4 rounded-lg hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
              >
                {t('cta.freeConsultation')}
              </motion.a>
            </div>
          </motion.div>

         
          <div className="mt-16 text-center text-sm text-gray-500">
            <p>
              {t('expertise.footer')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}