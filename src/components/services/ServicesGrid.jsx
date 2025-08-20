import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { 
  ArrowRight, 
  Clock, 
  DollarSign,
  MessageCircle 
} from "lucide-react";

const ServicesGrid = ({ 
  services = [], 
  selectedCategory, 
  setSelectedCategory,
  onConsultationClick 
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  const categories = ["tous", "développement", "mobile", "web", "infrastructure", "support"];
  
  const filteredServices = selectedCategory === "tous" 
    ? services 
    : services.filter(s => s.category?.toLowerCase() === selectedCategory);

  const handleServiceClick = (service) => {
    router.push(`/services/${service.slug}`);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">
            {t('servicesPage.servicesTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t('servicesPage.servicesSubtitle')}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t(`servicesPage.categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                {/* Service Header */}
                <div className={`p-6 sm:p-8 bg-gradient-to-r ${service.color} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                        <IconComponent className="w-6 sm:w-8 h-6 sm:h-8" />
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  {(() => {
                    const features = service.features;
                    const featureArray = Array.isArray(features) ? features : 
                                        (typeof features === 'object' && features !== null) ? Object.values(features) :
                                        [];
                    
                    return featureArray.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {featureArray.slice(0, 3).map((feature, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full"
                            >
                              {typeof feature === 'string' ? feature : feature?.toString() || ''}
                            </span>
                          ))}
                          {featureArray.length > 3 && (
                            <span className="text-xs text-gray-500 px-3 py-1">
                              +{featureArray.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Pricing and Timeline */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-500">{t('services.pricing')}</p>
                      <p className="text-sm sm:text-lg font-bold text-gray-900">{service.estimatedPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{t('services.duration')}</p>
                      <p className="text-sm font-medium text-gray-700">{service.deliveryTime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="text-lg text-gray-600 mb-6">
            {t('servicesPage.ctaNotFound')}
          </p>
          <button
            onClick={onConsultationClick}
            className="inline-flex items-center gap-3 bg-black text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
          >
            <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
            {t('servicesPage.ctaTalk')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;