import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { 
  MapPin, 
  Globe2, 
  Phone, 
  Calculator 
} from "lucide-react";

const ServicesHero = ({ 
  stats = [], 
  onConsultationClick, 
  onQuoteClick 
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      
      <div className="relative container mx-auto px-6 py-16 sm:py-24">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 sm:px-6 py-3 mb-6 sm:mb-8 text-sm"
          >
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-blue-900">{t('servicesPage.badge')}</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight px-2">
            {t('servicesPage.heroTitle')}<br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('servicesPage.heroSubtitle')}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {t('servicesPage.heroDescription')}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            {stats.slice(0, 4).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onConsultationClick}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
              {t('servicesPage.consultation')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <Calculator className="w-4 sm:w-5 h-4 sm:h-5" />
              {t('servicesPage.quote')}
            </motion.button>
          </div>

          {/* Location Info */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 px-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{t('servicesPage.heroLocations')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe2 className="w-4 h-4 text-gray-400" />
              <span>{t('servicesPage.heroCoverage')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;