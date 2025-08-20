import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { 
  X, 
  Phone, 
  MessageCircle, 
  PhoneCall 
} from "lucide-react";

const ConsultationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const [selectedMethod, setSelectedMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    time: ""
  });

  const contactMethods = [
    {
      id: "whatsapp",
      name: t('services.modal.consultation.methods.whatsapp'),
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      action: () => window.open("https://wa.me/213549575512", "_blank")
    },
    {
      id: "viber",
      name: t('services.modal.consultation.methods.viber'),
      icon: MessageCircle,
      color: "from-purple-500 to-purple-600",
      action: () => window.open("viber://chat?number=213549575512", "_blank")
    },
    {
      id: "phone",
      name: t('services.modal.consultation.methods.phone'),
      icon: PhoneCall,
      color: "from-blue-500 to-blue-600",
      action: () => window.open("tel:+213549575512", "_blank")
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      alert(t('services.modal.consultation.selectMethod'));
      return;
    }
    
    const method = contactMethods.find(m => m.id === selectedMethod);
    if (method) {
      method.action();
    }
    onClose();
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
          className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{t('services.modal.consultation.title')}</h2>
                <p className="text-gray-600">{t('services.modal.consultation.subtitle')}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Methods */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('contact.chooseMethod')}
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedMethod(method.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} mr-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{method.name}</div>
                            <div className="text-sm text-gray-500">+213 549 57 55 12</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t('services.modal.consultation.form.namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  placeholder={t('services.modal.consultation.form.phonePlaceholder')}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder={t('services.modal.consultation.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder={t('services.modal.consultation.form.companyPlaceholder')}
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('services.modal.consultation.form.timeOptions.choose')}</option>
                  <option value="morning">{t('services.modal.consultation.form.timeOptions.morning')}</option>
                  <option value="afternoon">{t('services.modal.consultation.form.timeOptions.afternoon')}</option>
                  <option value="evening">{t('services.modal.consultation.form.timeOptions.evening')}</option>
                  <option value="anytime">{t('services.modal.consultation.form.timeOptions.anytime')}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t('services.modal.consultation.submit')}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConsultationModal;