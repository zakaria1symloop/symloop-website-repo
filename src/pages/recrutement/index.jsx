// src/pages/recrutement/index.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import apiService from "../../services/apiService";

const jobs = [
  {
    title: "Développeur Web Fullstack",
    image: "/logos/nodejs.png",
    description: "Développez des plateformes web modernes avec Next.js et Laravel.",
    salary: "80,000 DZD / mois",
  },
  {
    title: "Développeur Mobile Flutter",
    image: "/logos/flutter.png",
    description: "Concevez des applications mobiles performantes sur Android et iOS.",
    salary: "120,000 DZD / mois",
  },
  {
    title: "Chef de Projet Digital",
    image: "/jobs/manager.png",
    description: "Gérez des projets tech innovants avec une équipe agile.",
    salary: "180,000 DZD / mois",
  },
  {
    title: "Designer UI/UX",
    image: "/logos/css.png",
    description: "Créez des interfaces élégantes et des expériences utilisateurs fluides.",
    salary: "40,000 DZD / mois",
  },
];

export default function RecrutementPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", cv: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);
    
    // Basic validation
    if (!formData.name.trim()) {
      setSubmitError(t('recruitment.application.errors.nameRequired'));
      return;
    }
    
    if (!formData.email.trim()) {
      setSubmitError(t('recruitment.application.errors.emailRequired'));
      return;
    }
    
    if (!formData.cv) {
      setSubmitError(t('recruitment.application.errors.cvRequired'));
      return;
    }

    setIsSubmitting(true);
    
    try {
      const applicationData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        jobTitle: selectedJob.title,
        cv: formData.cv
      };

      const response = await apiService.submitApplication(applicationData);
      
      if (response.success) {
        setSubmitSuccess(true);
        // Reset form after 2 seconds
        setTimeout(() => {
          setSelectedJob(null);
          setFormData({ name: "", email: "", cv: null });
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setSubmitError(response.message || t('recruitment.application.errors.genericError'));
      }
      
    } catch (error) {
      console.error('Submission error:', error);
      
      // Handle different types of errors
      if (error.message.includes('422')) {
        setSubmitError(t('recruitment.application.errors.invalidData'));
      } else if (error.message.includes('413')) {
        setSubmitError(t('recruitment.application.errors.fileTooLarge'));
      } else if (error.message.includes('Network')) {
        setSubmitError(t('recruitment.application.errors.networkError'));
      } else {
        setSubmitError(error.message || t('recruitment.application.errors.genericError'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitError(t('recruitment.application.errors.invalidFormat'));
        e.target.value = "";
        return;
      }
      
      // Check file size (5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setSubmitError(t('recruitment.application.errors.fileTooLarge'));
        e.target.value = "";
        return;
      }
      
      setSubmitError("");
      setFormData({ ...formData, cv: file });
    }
  };

  const resetForm = () => {
    setSelectedJob(null);
    setFormData({ name: "", email: "", cv: null });
    setSubmitError("");
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          {t('recruitment.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          {t('recruitment.subtitle')}
        </motion.p>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 border border-gray-300 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition"
            >
              <div className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center overflow-hidden shadow">
                <Image
                  src={job.image}
                  alt={job.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{job.description}</p>
              <div className="text-sm font-semibold text-gray-800 mb-4">{job.salary}</div>
              <button
                onClick={() => setSelectedJob(job)}
                className="px-4 py-2 mt-auto rounded-full bg-black hover:bg-gray-800 text-white font-semibold transition"
              >
                {t('recruitment.apply')}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Dialog */}
        {selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white text-black rounded-xl p-8 max-w-md w-full relative mx-4">
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                disabled={isSubmitting}
              >
                ✖
              </button>
              
              <h2 className="text-2xl font-bold mb-4 text-center">
                {t('recruitment.applyFor')} {selectedJob.title}
              </h2>
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="font-semibold">{t('recruitment.application.success')}</div>
                  <div className="text-sm mt-1">{t('recruitment.application.successDesc')}</div>
                </div>
              )}
              
              {/* Error Message */}
              {submitError && !submitSuccess && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                  {submitError}
                </div>
              )}
              
              {!submitSuccess && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder={t('recruitment.application.name')}
                    value={formData.name}
                    required
                    disabled={isSubmitting}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  />
                  
                  <input
                    type="email"
                    placeholder={t('recruitment.application.email')}
                    value={formData.email}
                    required
                    disabled={isSubmitting}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  />
                  
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      disabled={isSubmitting}
                      onChange={handleFileChange}
                      className="border border-gray-300 rounded-lg px-4 py-2 bg-white w-full disabled:opacity-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {t('recruitment.application.fileFormats')}
                    </p>
                    {formData.cv && (
                      <p className="text-xs text-green-600 mt-1">
                        ✓ {formData.cv.name} ({(formData.cv.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('recruitment.application.submitting')}
                      </span>
                    ) : (
                      t('recruitment.application.submit')
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}