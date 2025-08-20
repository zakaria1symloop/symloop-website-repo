import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { 
  X, 
  CheckCircle, 
  Calculator, 
  Sparkles, 
  AlertCircle, 
  Loader2 
} from "lucide-react";

const QuoteModal = ({ isOpen, onClose, services = [] }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const [selectedServices, setSelectedServices] = useState([]);
  const [aiEstimate, setAiEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    budget: "",
    timeline: ""
  });

  const currency = router?.locale === 'ar' ? 'SAR' : 
                  router?.locale === 'en' ? 'USD' : 
                  'EUR';

  const formatCurrency = (amount, currency) => {
    const rates = { 'USD': 400, 'EUR': 450, 'SAR': 100 };
    const converted = Math.round(amount / rates[currency]);
    const symbols = { 'USD': '$', 'EUR': '€', 'SAR': 'SAR ' };
    return `${symbols[currency]}${converted.toLocaleString()}`;
  };

  const calculateAIEstimate = () => {
    if (selectedServices.length === 0) return;
    
    setIsCalculating(true);
    setTimeout(() => {
      let minTotal = 0;
      let maxTotal = 0;
      let timelineWeeks = 0;
      let hasCustomPricing = false;
      
      selectedServices.forEach(serviceId => {
        const service = services.find(s => s.id === serviceId);
        if (service) {
          if (service.customPricing || service.priceMin === null) {
            hasCustomPricing = true;
          } else {
            minTotal += service.priceMin;
            maxTotal += service.priceMax;
          }
          const weeks = parseInt(service.deliveryTime?.split('-')[1]) || 8;
          timelineWeeks = Math.max(timelineWeeks, weeks);
        }
      });

      // Apply discounts for multiple services
      if (selectedServices.length >= 3) {
        minTotal *= 0.85;
        maxTotal *= 0.85;
      } else if (selectedServices.length >= 2) {
        minTotal *= 0.92;
        maxTotal *= 0.92;
      }

      setAiEstimate({
        min: hasCustomPricing ? null : Math.round(minTotal),
        max: hasCustomPricing ? null : Math.round(maxTotal),
        timeline: timelineWeeks,
        discount: selectedServices.length >= 3 ? 15 : (selectedServices.length >= 2 ? 8 : 0),
        hasCustomPricing: hasCustomPricing
      });
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    if (selectedServices.length > 0) {
      calculateAIEstimate();
    } else {
      setAiEstimate(null);
    }
  }, [selectedServices]);

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="sticky top-0 bg-white border-b p-6 rounded-t-2xl z-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t('services.modal.quote.title')}</h2>
                <p className="text-gray-600">{t('services.modal.quote.subtitle')}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services Selection */}
            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {t('services.modal.quote.selectServices')}
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedServices.includes(service.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{service.title}</div>
                        <div className="text-xs text-gray-500">{service.estimatedPrice}</div>
                      </div>
                      {selectedServices.includes(service.id) && (
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Estimate */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-blue-900">{t('services.modal.quote.aiEstimate')}</h3>
                  {isCalculating && <Loader2 className="w-4 h-4 ml-2 animate-spin text-blue-600" />}
                </div>
                {!isCalculating && aiEstimate && (
                  <>
                    <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
                      {aiEstimate.hasCustomPricing ? (
                        t('servicesPage.customPricing')
                      ) : (
                        `${formatCurrency(aiEstimate.min, currency)} - ${formatCurrency(aiEstimate.max, currency)}`
                      )}
                    </div>
                    <div className="text-sm text-blue-700">
                      {t('services.modal.quote.timeline', { weeks: aiEstimate.timeline })}
                      {aiEstimate.hasCustomPricing ? (
                        <div className="mt-2 text-orange-600 font-medium">
                          ⚡ {t('servicesPage.contactUs')}
                        </div>
                      ) : (
                        aiEstimate.discount > 0 && (
                          <span className="ml-2 text-green-600">
                            {t('services.modal.quote.discount', { percent: aiEstimate.discount })}
                          </span>
                        )
                      )}
                    </div>
                    <p className="text-xs text-blue-600 mt-2">
                      <AlertCircle className="w-3 h-3 inline mr-1" />
                      {t('services.modal.quote.disclaimer')}
                    </p>
                  </>
                )}
                {selectedServices.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    {t('services.modal.quote.selectService')}
                  </p>
                )}
              </div>

              {/* Contact Form */}
              {selectedServices.length > 0 && (
                <div className="mt-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder={t('services.modal.quote.form.clientName')}
                      value={formData.clientName}
                      onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder={t('services.modal.quote.form.email')}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder={t('services.modal.quote.form.phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      placeholder={t('services.modal.quote.form.projectDescription')}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
                      {t('services.modal.quote.submit')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteModal;