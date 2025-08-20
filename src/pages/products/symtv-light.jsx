import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Eye, Settings, Tv, Gamepad2, Monitor, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SymTvLightPage() {
  const { t } = useTranslation('symtv');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const [leftColor, setLeftColor] = useState("#345db3");
  const [rightColor, setRightColor] = useState("#a5d3e6");
  const [bottomColor, setBottomColor] = useState("#9a18b6");
  const [topColor, setTopColor] = useState("#80bfe3");

  useEffect(() => {
    const interval = setInterval(() => {
      const leftVariants = ["#345db3", "#4a6cc7", "#2c4aa1"];
      setLeftColor(leftVariants[Math.floor(Math.random() * leftVariants.length)]);
      const rightVariants = ["#a5d3e6", "#b0e0f2", "#95c5d9"];
      setRightColor(rightVariants[Math.floor(Math.random() * rightVariants.length)]);
      const bottomVariants = ["#9a18b6", "#a42ac0", "#8712a3"];
      setBottomColor(bottomVariants[Math.floor(Math.random() * bottomVariants.length)]);
      const topVariants = ["#80bfe3", "#93d0f0", "#6faed3"];
      setTopColor(topVariants[Math.floor(Math.random() * topVariants.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-black ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-sm font-medium text-gray-700 mb-6"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              {t('hero.badge')}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl font-black mb-6 leading-tight"
            >
              SymTV 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Light
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>
          </div>

          {/* Product Demo with Enhanced Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Enhanced Glow Effects */}
            <div className="absolute inset-0 rounded-3xl z-0 pointer-events-none">
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-32 blur-[120px] -translate-y-8"
                style={{ backgroundColor: topColor }}
              />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-32 blur-[120px] translate-y-8"
                style={{ backgroundColor: bottomColor }}
              />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-[85%] blur-[120px] -translate-x-8"
                style={{ backgroundColor: leftColor }}
              />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.25 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[85%] blur-[120px] translate-x-8"
                style={{ backgroundColor: rightColor }}
              />
            </div>

            {/* TV/Monitor Mockup */}
            <div className="relative z-10 bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div className="bg-black rounded-lg aspect-video relative overflow-hidden">
                <video
                  src="/symtv.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-16 h-2 bg-gray-700 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is SymTV Light */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('whatIs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('whatIs.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t('whatIs.steps', { returnObjects: true }).map((step, index) => {
              const icons = [<Monitor className="w-8 h-8" />, <Zap className="w-8 h-8" />, <Eye className="w-8 h-8" />];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works - Visual Diagram */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('installation.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('installation.description')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Source Device */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <Gamepad2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t('installation.steps.0.title')}</h3>
                <p className="text-sm text-gray-600 text-center">{t('installation.steps.0.description')}</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </motion.div>

              {/* SymTV Light Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 relative">
                  <div className="text-white font-bold text-sm">SymTV Light</div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t('installation.steps.1.title')}</h3>
                <p className="text-sm text-gray-600 text-center">{t('installation.steps.1.description')}</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </motion.div>

              {/* TV with Backlight */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <div className="w-32 h-20 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Tv className="w-12 h-12 text-white" />
                  </div>
                  {/* Simulated backlight */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-sm opacity-60 -z-10" />
                </div>
                <h3 className="font-bold text-lg mb-2 mt-4">{t('installation.steps.2.title')}</h3>
                <p className="text-sm text-gray-600 text-center">{t('installation.steps.2.description')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('benefits.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {t('benefits.items', { returnObjects: true }).map((benefit, index) => {
                  const icons = [
                    <Eye className="w-6 h-6 text-green-600" />,
                    <Zap className="w-6 h-6 text-purple-600" />,
                    <Settings className="w-6 h-6 text-blue-600" />
                  ];
                  const bgColors = ['bg-green-100', 'bg-purple-100', 'bg-blue-100'];
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${bgColors[index]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {icons[index]}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Benefits Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="bg-gray-800 rounded-lg aspect-video relative">
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                </div>
                {/* Simulated ambient lighting */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-3xl blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Compatibility */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('compatibility.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('compatibility.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t('compatibility.devices', { returnObjects: true }).map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-4xl mb-4">{device.icon}</div>
                <h3 className="font-bold">{device.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                {t('cta.demo')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                {t('cta.pricing')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['symtv', 'common'])),
    },
  };
}