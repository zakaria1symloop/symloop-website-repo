import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo({ 
  title, 
  description, 
  image = '/sym-logo.png',
  keywords = '',
  author = 'Symloop Technology MENA',
  type = 'website',
  twitterCard = 'summary_large_image',
  canonical,
  publishedTime,
  modifiedTime,
  articleTags = [],
  breadcrumbs = [],
  serviceType,
  priceRange,
  aggregateRating
}) {
  const router = useRouter();
  const currentUrl = `https://symloop.com${router.asPath}`;
  const canonicalUrl = canonical || currentUrl;
  
  // Enhanced MENA region keywords with competition analysis
  const competitorKeywords = {
    'fr': 'développement logiciel MENA, entreprise informatique MENA Maroc Tunisie EAU, création site web MENA, application mobile Flutter MENA, solutions IoT Moyen-Orient Afrique du Nord, intelligence artificielle entreprise MENA, cybersécurité PME MENA Maroc EAU, développeur Flutter Dubai Casablanca Riyadh, ERP sur mesure MENA, CRM personnalisé MENA Tunisie EAU, hébergement web MENA, infrastructure réseau entreprise MENA, développement mobile React Native MENA, e-commerce paiement local MENA, transformation digitale Afrique du Nord, consultant IT MENA EAU, base données Oracle MySQL MENA, cloud computing Moyen-Orient, développement web Laravel React MENA, maintenance logiciel région MENA',
    'en': 'software development MENA, IT company MENA Morocco Tunisia UAE Saudi, web development Middle East North Africa, mobile app development MENA region, IoT solutions Middle East, artificial intelligence enterprise MENA, cybersecurity SME MENA Morocco UAE, Flutter developer MENA UAE Dubai Saudi, custom ERP systems MENA, CRM solutions MENA Tunisia UAE, web hosting MENA region, network infrastructure MENA, React Native development Middle East, e-commerce development MENA, digital transformation North Africa, IT consulting MENA UAE Saudi Qatar, Oracle MySQL databases MENA, cloud computing Middle East, Laravel React development MENA, software maintenance MENA region',
    'ar': 'تطوير البرمجيات منطقة الشرق الأوسط وشمال أفريقيا, شركة تكنولوجيا المعلومات مينا المغرب تونس الإمارات, تطوير مواقع الويب الشرق الأوسط, تطوير تطبيقات الهاتف المحمول منطقة مينا, حلول إنترنت الأشياء الشرق الأوسط, الذكاء الاصطناعي للشركات مينا, الأمن السيبراني مينا الإمارات, مطور فلاتر مينا دبي الرياض, أنظمة إدارة الموارد المخصصة مينا, حلول إدارة علاقات العملاء مينا تونس الإمارات, استضافة المواقع منطقة مينا, البنية التحتية للشبكات الشرق الأوسط'
  };
  
  const currentLocale = router.locale || 'fr';
  const localizedKeywords = competitorKeywords[currentLocale] || competitorKeywords['fr'];
  
  const menaKeywords = keywords ? 
    `${keywords}, ${localizedKeywords}` : localizedKeywords;

  // Geographic data for MENA region
  const geoData = {
    'fr': { country: 'MENA Region', region: 'MENA', placename: 'Sétif, région MENA' },
    'en': { country: 'MENA Region', region: 'MENA', placename: 'Setif, MENA region' },
    'ar': { country: 'MENA Region', region: 'MENA', placename: 'سطيف، منطقة مينا' }
  };

  const currentGeo = geoData[currentLocale] || geoData['fr'];

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={menaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced Geographic SEO for MENA region */}
      <meta name="geo.region" content={currentGeo.region} />
      <meta name="geo.country" content={currentGeo.country} />
      <meta name="geo.placename" content={currentGeo.placename} />
      <meta name="ICBM" content="36.1919, 5.4138" />
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.coverage" content="MENA Region" />
      <meta name="DC.language" content={currentLocale} />
      
      {/* Enhanced Hreflang for multilingual MENA */}
      <link rel="alternate" hrefLang="fr" href={`https://symloop.com/fr${router.asPath}`} />
      <link rel="alternate" hrefLang="en" href={`https://symloop.com/en${router.asPath}`} />
      <link rel="alternate" hrefLang="ar" href={`https://symloop.com/ar${router.asPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://symloop.com${router.asPath}`} />
      <link rel="alternate" hrefLang="fr-DZ" href={`https://symloop.com/fr${router.asPath}`} />
      <link rel="alternate" hrefLang="fr-MA" href={`https://symloop.com/fr${router.asPath}`} />
      <link rel="alternate" hrefLang="fr-TN" href={`https://symloop.com/fr${router.asPath}`} />
      <link rel="alternate" hrefLang="ar-SA" href={`https://symloop.com/ar${router.asPath}`} />
      <link rel="alternate" hrefLang="ar-AE" href={`https://symloop.com/ar${router.asPath}`} />
      <link rel="alternate" hrefLang="en-AE" href={`https://symloop.com/en${router.asPath}`} />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://symloop.com${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Symloop Technology MENA" />
      <meta property="og:locale" content={router.locale === 'fr' ? 'fr_DZ' : router.locale === 'ar' ? 'ar_DZ' : 'en_DZ'} />
      <meta property="og:locale:alternate" content="fr_DZ" />
      <meta property="og:locale:alternate" content="en_DZ" />
      <meta property="og:locale:alternate" content="ar_DZ" />
      
      {/* Article metadata for blog posts */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {articleTags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://symloop.com${image}`} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@symloop" />
      <meta name="twitter:creator" content="@symloop" />
      
      {/* Enhanced Business-specific meta tags */}
      <meta name="business:contact_data:phone" content="+213 549 575 512" />
      <meta name="business:contact_data:email" content="contact@symloop.com" />
      <meta name="business:contact_data:locality" content="Sétif" />
      <meta name="business:contact_data:region" content="MENA" />
      <meta name="business:contact_data:country" content="DZ" />
      <meta name="contact" content="contact@symloop.com" />
      <meta name="copyright" content="Symloop Technology" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile and Performance optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      <meta name="format-detection" content="telephone=yes, email=yes, address=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Symloop MENA" />
      
      {/* Performance and caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preload" href={image} as="image" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Enhanced Structured Data for MENA Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService", "TechnologyCompany"],
            "@id": "https://symloop.com",
            "name": "Symloop Technology MENA",
            "alternateName": ["Symloop", "Symloop DZ", "Symloop Tech", "Symloop MENA"],
            "description": description,
            "url": "https://symloop.com",
            "logo": "https://symloop.com/sym-logo.png",
            "image": `https://symloop.com${image}`,
            "telephone": "+213549575512",
            "email": "contact@symloop.com",
            "foundingDate": "2012",
            "founder": {
              "@type": "Person",
              "name": "Symloop Team"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 20,
              "maxValue": 50
            },
            "priceRange": "€150-€7500",
            "paymentAccepted": ["Cash", "Bank Transfer", "Credit Card", "Check"],
            "currenciesAccepted": ["DZD", "EUR", "USD", "SAR", "AED"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sétif Technology Park",
              "addressLocality": "Sétif",
              "addressRegion": "Sétif Province",
              "postalCode": "19000",
              "addressCountry": "DZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.1919",
              "longitude": "5.4138"
            },
            "areaServed": [
              {"@type": "Country", "name": "Algeria (MENA)"},
              {"@type": "Country", "name": "Morocco"},
              {"@type": "Country", "name": "Tunisia"},
              {"@type": "Country", "name": "United Arab Emirates"},
              {"@type": "Country", "name": "Saudi Arabia"},
              {"@type": "Country", "name": "Qatar"},
              {"@type": "Country", "name": "Kuwait"},
              {"@type": "Country", "name": "Lebanon"},
              {"@type": "Country", "name": "Jordan"},
              {"@type": "Country", "name": "Egypt"}
            ],
            "serviceType": "Information Technology Services",
            "industry": "Technology",
            "knowsAbout": [
              "Flutter Development", "React Native", "Software Development", 
              "Mobile App Development", "Web Development", "IoT Solutions",
              "Database Management", "Network Infrastructure", "Cloud Computing",
              "ERP Systems", "CRM Solutions", "E-commerce Development",
              "Cybersecurity", "IT Consulting", "Digital Transformation",
              "Artificial Intelligence", "Machine Learning", "Blockchain"
            ],
            "knowsLanguage": ["French", "Arabic", "English"],
            "slogan": "Excellence Digitale • Symloop MENA",
            "awards": [
              "Top IT Company MENA 2023",
              "Best Flutter Development Company MENA 2023",
              "Excellence in Digital Transformation 2021"
            ],
            "sameAs": [
              "https://www.facebook.com/symloop",
              "https://www.linkedin.com/company/symloop-technology/",
              "https://github.com/symloop",
              "https://twitter.com/symloop"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+213549575512",
              "contactType": "customer service",
              "areaServed": ["DZ", "MA", "TN", "AE", "SA"],
              "availableLanguage": ["French", "Arabic", "English"],
              "contactOption": "TollFree",
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            }, {
              "@type": "ContactPoint",
              "telephone": "+213549575512",
              "contactType": "technical support",
              "areaServed": "MENA",
              "availableLanguage": ["French", "Arabic", "English"],
              "hoursAvailable": "24/7"
            }],
            ...(aggregateRating && {
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": aggregateRating.ratingValue,
                "reviewCount": aggregateRating.reviewCount,
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services IT Professionnels MENA",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Développement Applications Flutter",
                  "description": "Applications mobiles Flutter cross-platform pour iOS et Android dans la région MENA",
                  "serviceType": "Mobile App Development",
                  "provider": {
                    "@type": "Organization",
                    "name": "Symloop Technology MENA"
                  },
                  "areaServed": "MENA Region",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "priceRange": "450-3000"
                  }
                },
                {
                  "@type": "Service", 
                  "name": "Solutions IoT ESP32",
                  "description": "Développement IoT complet avec ESP32, capteurs et objets connectés",
                  "serviceType": "IoT Development",
                  "provider": {
                    "@type": "Organization",
                    "name": "Symloop Technology MENA"
                  },
                  "areaServed": "MENA Region",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "priceRange": "500-5000"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Intelligence Artificielle ChatGPT",
                  "description": "Solutions IA avec ChatGPT, machine learning et vision par ordinateur",
                  "serviceType": "AI Development", 
                  "provider": {
                    "@type": "Organization",
                    "name": "Symloop Technology MENA"
                  },
                  "areaServed": "MENA Region",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "priceRange": "750-7500"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      {breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": `https://symloop.com${crumb.path}`
              }))
            })
          }}
        />
      )}

      {/* Service-specific Schema */}
      {serviceType && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": title,
              "description": description,
              "provider": {
                "@type": "Organization",
                "@id": "https://symloop.com",
                "name": "Symloop Technology MENA"
              },
              "areaServed": "MENA Region",
              "serviceType": serviceType,
              ...(priceRange && {
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "priceRange": priceRange
                }
              })
            })
          }}
        />
      )}
    </Head>
  );
}
