// src/pages/products/asa.jsx

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AsaPage() {
  const { t } = useTranslation('asa');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className={`min-h-screen bg-white text-black relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-30 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-full opacity-25 blur-3xl"
          animate={{
            x: -mousePosition.x * 0.015,
            y: -mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="relative z-10 py-20 px-6 space-y-40">
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-gray-700 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {t('hero.badge')}
            </motion.div>
            
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              ASA
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide">
              {t('hero.subtitle')}
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')} <span className="font-bold text-blue-600">Sym-D1</span>.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              {t('hero.cta.demo')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-black text-black rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              {t('hero.cta.learnMore')}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          style={{ y: y1 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image 
              src="/products/asa.png"
              alt="ASA Algerian Smart Administration"
              width={1200}
              height={700}
              className="rounded-3xl shadow-2xl border border-gray-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.section 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {t('stats', { returnObjects: true }).map((stat, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Problem & Solution */}
        <section className="max-w-7xl mx-auto space-y-32">
          {/* Problem */}
          <motion.div 
            className="grid md:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-8"
              style={{ y: y2 }}
            >
              <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                {t('problem.badge')}
              </div>
              <h2 className="text-5xl font-black text-gray-900 leading-tight">
                {t('problem.title')} 
                <span className="text-red-600"> {t('problem.titleAccent')}</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('problem.description1')}
                </p>
                <p>
                  {t('problem.description2')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                {t('problem.issues', { returnObjects: true }).map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image 
                src="/illustrations/problem.svg" 
                alt="Problem Illustration" 
                width={500}
                height={500}
                className="mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Solution */}
          <motion.div 
            className="grid md:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative order-2 md:order-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image 
                src="/illustrations/ai-assistant.svg" 
                alt="AI Assistant Illustration" 
                width={500}
                height={500}
                className="mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div 
              className="space-y-8 order-1 md:order-2"
              style={{ y: y2 }}
            >
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                {t('solution.badge')}
              </div>
              <h2 className="text-5xl font-black text-gray-900 leading-tight">
                {t('solution.title')}
                <span className="text-green-600"> {t('solution.titleAccent')}</span> {t('solution.titleEnd')}
              </h2>
              
              <div className="space-y-6">
                {t('solution.steps', { returnObjects: true }).map((item, i) => (
                  <motion.div
                    key={i}
                    className={`p-6 rounded-xl bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 border-l-4 border-${item.color}-500`}
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${item.color}-500 text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                      <div className="text-3xl ml-auto">{item.icon}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Sym-D1 Technology */}
        <motion.section 
          className="max-w-6xl mx-auto text-center space-y-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <motion.div
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-semibold text-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              {t('symd1.badge')}
            </motion.div>
            
            <h2 className="text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('symd1.title')}
            </h2>
            
            <h3 className="text-3xl font-bold text-gray-800">
              {t('symd1.subtitle')}
            </h3>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('symd1.description')}
            </p>
          </div>

          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image 
              src="/illustrations/cloud-ai.svg"
              alt="Sym-D1 AI Cloud"
              width={800}
              height={500}
              className="rounded-2xl mx-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-2xl" />
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {t('symd1.features', { returnObjects: true }).map((feature, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-purple-50 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Versions Timeline */}
        <motion.section 
          className="max-w-5xl mx-auto space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-gray-900">
              Évolution continue d'ASA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment ASA évolue pour mieux servir les citoyens algériens
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {[
              { 
                version: "v1.0", 
                title: "Lancement initial", 
                desc: "Base solide pour accompagner les démarches les plus courantes avec une interface intuitive.",
                date: "Janvier 2024",
                color: "blue"
              },
              { 
                version: "v1.1", 
                title: "Optimisation du moteur IA", 
                desc: "Analyse contextuelle plus précise pour des réponses plus pertinentes et personnalisées.",
                date: "Mars 2024",
                color: "green"
              },
              { 
                version: "v1.2", 
                title: "Support multilingue étendu", 
                desc: "Prise en charge complète de l'arabe, du français et du tamazight pour tous les citoyens.",
                date: "Mai 2024",
                color: "purple"
              },
              { 
                version: "v2.0", 
                title: "Apprentissage automatique avancé", 
                desc: "Sym-D1 améliore son raisonnement et sa précision à chaque interaction citoyenne.",
                date: "Juillet 2024",
                color: "orange"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative flex items-center mb-16 ml-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`absolute -left-20 w-8 h-8 bg-${item.color}-500 border-4 border-white rounded-full shadow-lg z-10`}
                  whileHover={{ scale: 1.3 }}
                  animate={{ 
                    boxShadow: i === 3 ? ["0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 10px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0)"] : "0 0 0 0 rgba(59, 130, 246, 0)"
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: i === 3 ? Infinity : 0,
                    repeatType: "loop"
                  }}
                />
                
                <motion.div
                  className={`p-8 rounded-2xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 border border-${item.color}-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-block px-4 py-2 bg-${item.color}-500 text-white rounded-full font-bold text-lg`}>
                      {item.version}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="max-w-6xl mx-auto text-center space-y-12 py-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <motion.div
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-semibold text-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              {t('cta.badge')}
            </motion.div>
            
            <h3 className="text-6xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              {t('cta.title')}<br />{t('cta.titleBreak')}
            </h3>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {t('cta.demo')}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-3 border-gray-800 text-gray-800 rounded-full font-bold text-xl hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              {t('cta.contact')}
            </motion.button>
          </div>

          <motion.div
            className="pt-12 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('cta.footer')}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['asa', 'common'])),
    },
  };
}