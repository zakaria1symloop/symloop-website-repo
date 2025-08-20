import React, { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Components
import ServicesHero from '../../components/services/ServicesHero';
import ServicesGrid from '../../components/services/ServicesGrid';
import QuoteModal from '../../components/services/QuoteModal';
import ConsultationModal from '../../components/services/ConsultationModal';

// Data
import { getServicesData, getStatsData } from '../../components/services/ServicesData';

export default function SymloopITServicesPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("tous");

  // RTL setup
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);

  // Get data with translations
  const services = getServicesData(t, router);
  const stats = getStatsData(t);

  return (
    <>
      <Head>
        <title>{t('servicesPage.title')}</title>
        <meta name="description" content={t('servicesPage.description')} />
        <meta name="keywords" content={t('servicesPage.keywords')} />
        <meta property="og:title" content={t('servicesPage.title')} />
        <meta property="og:description" content={t('servicesPage.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com${router.asPath}`} />
        <meta property="og:image" content="https://symloop.com/assets/symloop-mena-services.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('servicesPage.title')} />
        <meta name="twitter:description" content={t('servicesPage.description')} />
        <link rel="canonical" href={`https://symloop.com${router.asPath}`} />
        
        {/* Enhanced Hreflang for Services */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/services" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Symloop",
              "url": "https://symloop.com",
              "description": t('servicesPage.description'),
              "serviceArea": {
                "@type": "Place",
                "name": "MENA"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": t('services.catalog.name'),
                "itemListElement": services.slice(0, 5).map(service => ({
                  "@type": "Offer",
                  "name": service.title,
                  "description": service.description,
                  "price": service.estimatedPrice,
                  "priceCurrency": router.locale === 'ar' ? 'SAR' : router.locale === 'en' ? 'USD' : 'EUR'
                }))
              }
            })
          }}
        />
      </Head>

      <div className={`min-h-screen bg-white ${isRTL ? 'font-arabic' : ''}`}>
        {/* Hero Section */}
        <ServicesHero 
          stats={stats}
          onConsultationClick={() => setConsultationModalOpen(true)}
          onQuoteClick={() => setQuoteModalOpen(true)}
        />

        {/* Services Grid */}
        <ServicesGrid 
          services={services}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onConsultationClick={() => setConsultationModalOpen(true)}
        />

        {/* Footer CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white py-16 sm:py-24">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                {t('services.finalCta.title')}
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
                {t('services.finalCta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
                <button
                  onClick={() => setConsultationModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
                >
                  {t('servicesPage.consultation')}
                </button>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
                >
                  {t('servicesPage.quote')}
                </button>
              </div>
              
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-400">
                <p className="text-sm sm:text-base text-blue-100">
                  {t('services.finalCta.footer')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modals */}
        <ConsultationModal 
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
        />
        
        <QuoteModal 
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          services={services}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}