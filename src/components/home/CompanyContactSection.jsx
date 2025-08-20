"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft, Building2, Briefcase, MessageSquare, Phone, Mail, Loader2 } from "lucide-react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import apiService from "../../services/apiService";

export default function CompanyContactSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    sector: "",
    need: "",
    phone: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);
  
  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
      
      // Force re-render of animations and layouts
      const elements = document.querySelectorAll('[data-framer-appear-id]');
      elements.forEach(el => {
        el.style.transform = '';
        el.style.opacity = '1';
      });
    }
  }, [isRTL, router.locale]);

  // Force component re-render when language changes
  React.useEffect(() => {
    // This ensures that all conditional RTL classes are re-evaluated
    const timeoutId = setTimeout(() => {
      // Small delay to ensure DOM is updated
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [router.locale]);

  const steps = [
    { icon: Building2, title: t('companyContact.steps.company.title'), subtitle: t('companyContact.steps.company.subtitle') },
    { icon: Briefcase, title: t('companyContact.steps.sector.title'), subtitle: t('companyContact.steps.sector.subtitle') },
    { icon: MessageSquare, title: t('companyContact.steps.need.title'), subtitle: t('companyContact.steps.need.subtitle') },
    { icon: Phone, title: t('companyContact.steps.contact.title'), subtitle: t('companyContact.steps.contact.subtitle') },
    { icon: Mail, title: t('companyContact.steps.email.title'), subtitle: t('companyContact.steps.email.subtitle') }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitError("");
  };

  const validateStep = () => {
    const currentField = Object.keys(formData)[step];
    return formData[currentField]?.trim() !== "";
  };

  const handleSubmit = async () => {
    if (!validateStep()) {
      setSubmitError(t('companyContact.errors.requiredField'));
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const contactData = {
        company_name: formData.company.trim(),
        sector: formData.sector.trim(),
        need_description: formData.need.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        contact_type: 'company_inquiry'
      };

      const response = await apiService.submitCompanyContact(contactData);
      
      if (response.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setStep(0);
          setFormData({
            company: "",
            sector: "",
            need: "",
            phone: "",
            email: "",
          });
        }, 3000);
      } else {
        setSubmitError(response.message || t('companyContact.errors.submitError'));
      }

    } catch (error) {
      console.error('Contact submission error:', error);
      
      // Handle different types of errors
      if (error.message.includes('409')) {
        setSubmitError(t('companyContact.errors.duplicateEmail'));
      } else if (error.message.includes('422')) {
        setSubmitError(t('companyContact.errors.invalidData'));
      } else if (error.message.includes('Network')) {
        setSubmitError(t('companyContact.errors.networkError'));
      } else {
        setSubmitError(error.message || t('companyContact.errors.generalError'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: isRTL ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isRTL ? 50 : -50 }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { width: `${((step + 1) / steps.length) * 100}%` }
  };

  return (
    <section id="company-contact-section" className={`py-24 bg-black text-white relative overflow-hidden ${isRTL ? 'company-contact-header' : ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className={`inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Building2 className={`w-4 h-4 ${isRTL ? 'ml-2 order-2' : 'mr-2 order-1'}`} />
            <span className={isRTL ? 'order-1' : 'order-2'}>{t('companyContact.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {t('companyContact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('companyContact.description')}
          </p>
        </motion.div>

        {/* Enhanced Form Card */}
        <motion.div
          key={`form-${router.locale}`} // Force re-render on language change
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          {/* Success Animation */}
          <AnimatePresence>
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center space-y-6 py-12"
              >
                <div className="relative">
                  <CheckCircle size={80} className="text-green-400" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-green-400/20"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{t('companyContact.success.title')}</h3>
                  <p className="text-gray-300">{t('companyContact.success.message')}</p>
                </div>
              </motion.div>
            ) : (
              <div className={`${isRTL ? 'text-right form-rtl' : 'text-left'}`}>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-300">
                      {t('companyContact.progress.step', { current: step + 1, total: steps.length })}
                    </span>
                    <span className="text-sm text-gray-400">
                      {Math.round(((step + 1) / steps.length) * 100)}% {t('companyContact.progress.completed')}
                    </span>
                  </div>
                  <div className={`w-full bg-white/10 rounded-full h-2 overflow-hidden ${isRTL ? 'progress-rtl' : ''}`}>
                    <motion.div
                      variants={progressVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full"
                    />
                  </div>
                </div>

                {/* Step Header */}
                <div className={`flex items-center mb-8 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className={`flex items-center justify-center w-12 h-12 bg-white/10 rounded-full ${isRTL ? 'ml-4 order-2' : 'mr-4 order-1'}`}>
                    {React.createElement(steps[step].icon, { size: 24, className: "text-white" })}
                  </div>
                  <div className={`${isRTL ? 'order-1 text-right' : 'order-2 text-left'}`}>
                    <h3 className="text-xl font-bold">{steps[step].title}</h3>
                    <p className="text-gray-300 text-sm">{steps[step].subtitle}</p>
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
                  >
                    {submitError}
                  </motion.div>
                )}

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {step === 0 && (
                      <div>
                        <label className="block">
                          <span className="text-sm font-semibold mb-2 block">{t('companyContact.form.companyName.label')}</span>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
                            placeholder={t('companyContact.form.companyName.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </label>
                      </div>
                    )}

                    {step === 1 && (
                      <div>
                        <label className="block">
                          <span className="text-sm font-semibold mb-2 block">{t('companyContact.form.sector.label')}</span>
                          <select
                            name="sector"
                            value={formData.sector}
                            onChange={handleChange}
                            className={`w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          >
                            <option value="" className="bg-gray-800">{t('companyContact.form.sector.placeholder')}</option>
                            <option value="industrie" className="bg-gray-800">{t('companyContact.form.sector.options.industry')}</option>
                            <option value="commerce" className="bg-gray-800">{t('companyContact.form.sector.options.commerce')}</option>
                            <option value="services" className="bg-gray-800">{t('companyContact.form.sector.options.services')}</option>
                            <option value="sante" className="bg-gray-800">{t('companyContact.form.sector.options.health')}</option>
                            <option value="education" className="bg-gray-800">{t('companyContact.form.sector.options.education')}</option>
                            <option value="finance" className="bg-gray-800">{t('companyContact.form.sector.options.finance')}</option>
                            <option value="immobilier" className="bg-gray-800">{t('companyContact.form.sector.options.realEstate')}</option>
                            <option value="transport" className="bg-gray-800">{t('companyContact.form.sector.options.transport')}</option>
                            <option value="autre" className="bg-gray-800">{t('companyContact.form.sector.options.other')}</option>
                          </select>
                        </label>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <label className="block">
                          <span className="text-sm font-semibold mb-2 block">{t('companyContact.form.need.label')}</span>
                          <textarea
                            name="need"
                            value={formData.need}
                            onChange={handleChange}
                            rows="5"
                            className={`w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none ${isRTL ? 'text-right' : ''}`}
                            placeholder={t('companyContact.form.need.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </label>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <label className="block">
                          <span className="text-sm font-semibold mb-2 block">{t('companyContact.form.phone.label')}</span>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
                            placeholder={t('companyContact.form.phone.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </label>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <label className="block">
                          <span className="text-sm font-semibold mb-2 block">{t('companyContact.form.email.label')}</span>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
                            placeholder={t('companyContact.form.email.placeholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </label>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className={`flex items-center justify-between pt-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        disabled={step === 0}
                        className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          step === 0
                            ? 'opacity-50 cursor-not-allowed bg-white/5'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }`}
                        whileHover={step > 0 ? { scale: 1.02 } : {}}
                        whileTap={step > 0 ? { scale: 0.98 } : {}}
                      >
                        {isRTL ? (
                          <>
                            <ArrowRight className="w-4 h-4 ml-2 order-2" />
                            <span className="order-1">{t('companyContact.form.navigation.previous')}</span>
                          </>
                        ) : (
                          <>
                            <ArrowLeft className="w-4 h-4 mr-2 order-1" />
                            <span className="order-2">{t('companyContact.form.navigation.previous')}</span>
                          </>
                        )}
                      </motion.button>

                      {step < steps.length - 1 ? (
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          disabled={!validateStep()}
                          className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                            validateStep()
                              ? 'bg-white hover:bg-gray-200 text-black'
                              : 'opacity-50 cursor-not-allowed bg-white/20 text-gray-400'
                          }`}
                          whileHover={validateStep() ? { scale: 1.02 } : {}}
                          whileTap={validateStep() ? { scale: 0.98 } : {}}
                        >
                          {isRTL ? (
                            <>
                              <ArrowLeft className="w-4 h-4 mr-2 order-2" />
                              <span className="order-1">{t('companyContact.form.navigation.next')}</span>
                            </>
                          ) : (
                            <>
                              <span className="order-1">{t('companyContact.form.navigation.next')}</span>
                              <ArrowRight className="w-4 h-4 ml-2 order-2" />
                            </>
                          )}
                        </motion.button>
                      ) : (
                        <motion.button
                          type="button"
                          onClick={handleSubmit}
                          disabled={!validateStep() || isSubmitting}
                          className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                            validateStep() && !isSubmitting
                              ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg'
                              : 'opacity-50 cursor-not-allowed bg-gray-600 text-gray-400'
                          }`}
                          whileHover={validateStep() && !isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={validateStep() && !isSubmitting ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            isRTL ? (
                              <>
                                <Loader2 className="w-4 h-4 ml-2 animate-spin order-2" />
                                <span className="order-1">{t('companyContact.form.navigation.submitting')}</span>
                              </>
                            ) : (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin order-1" />
                                <span className="order-2">{t('companyContact.form.navigation.submitting')}</span>
                              </>
                            )
                          ) : (
                            isRTL ? (
                              <>
                                <ArrowLeft className="w-4 h-4 mr-2 order-2" />
                                <span className="order-1">{t('companyContact.form.navigation.submit')}</span>
                              </>
                            ) : (
                              <>
                                <span className="order-1">{t('companyContact.form.navigation.submit')}</span>
                                <ArrowRight className="w-4 h-4 ml-2 order-2" />
                              </>
                            )
                          )}
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { 
              icon: "⚡", 
              title: t('companyContact.trustIndicators.quickResponse.title'), 
              desc: t('companyContact.trustIndicators.quickResponse.desc') 
            },
            { 
              icon: "🔒", 
              title: t('companyContact.trustIndicators.secureData.title'), 
              desc: t('companyContact.trustIndicators.secureData.desc') 
            },
            { 
              icon: "🎯", 
              title: t('companyContact.trustIndicators.customSolutions.title'), 
              desc: t('companyContact.trustIndicators.customSolutions.desc') 
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="text-2xl">{item.icon}</div>
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}