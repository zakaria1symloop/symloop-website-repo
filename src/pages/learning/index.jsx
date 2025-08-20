import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import apiService from "../../services/apiService";

export default function LearningPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    motivation: "",
    courseId: ""
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const courses = [
    {
      id: "flutter-basics",
      title: "Flutter Development",
      subtitle: "Créez des apps mobiles multiplateformes",
      category: "mobile",
      level: "Débutant",
      duration: "8 semaines",
      price: "Gratuit",
      isPaid: false,
      icon: "📱",
      color: "blue",
      description: "Maîtrisez Flutter et développez des applications mobiles iOS et Android avec un seul code.",
      features: ["Dart Programming", "Widget Development", "State Management", "API Integration"]
    },
    {
      id: "react-advanced",
      title: "React.js Avancé",
      subtitle: "Développement web moderne",
      category: "web",
      level: "Intermédiaire",
      duration: "10 semaines",
      price: "15,000 DA",
      isPaid: true,
      icon: "⚛️",
      color: "cyan",
      description: "Approfondissez React avec hooks avancés, Context API, et les meilleures pratiques.",
      features: ["Advanced Hooks", "Context & Redux", "Performance Optimization", "Testing"]
    },
    {
      id: "laravel-api",
      title: "Laravel API Development",
      subtitle: "Backend robuste et sécurisé",
      category: "backend",
      level: "Intermédiaire",
      duration: "12 semaines",
      price: "25,000 DA",
      isPaid: true,
      icon: "🐘",
      color: "red",
      description: "Construisez des APIs REST performantes avec Laravel, authentification et tests.",
      features: ["RESTful APIs", "Authentication", "Database Design", "Testing & Security"]
    },
    {
      id: "iot-basics",
      title: "Internet of Things",
      subtitle: "Connectez le monde physique",
      category: "iot",
      level: "Débutant",
      duration: "6 semaines",
      price: "Gratuit",
      isPaid: false,
      icon: "🌐",
      color: "green",
      description: "Découvrez l'IoT avec Arduino, capteurs et communication sans fil.",
      features: ["Arduino Programming", "Sensor Integration", "WiFi Communication", "Data Visualization"]
    },
    {
      id: "nodejs-express",
      title: "Node.js & Express",
      subtitle: "JavaScript côté serveur",
      category: "backend",
      level: "Intermédiaire",
      duration: "8 semaines",
      price: "18,000 DA",
      isPaid: true,
      icon: "🟢",
      color: "emerald",
      description: "Maîtrisez le développement backend avec Node.js et créez des APIs performantes.",
      features: ["Express.js Framework", "MongoDB Integration", "Authentication", "Real-time Apps"]
    },
    {
      id: "python-ai",
      title: "Python & IA",
      subtitle: "Intelligence artificielle accessible",
      category: "ai",
      level: "Intermédiaire",
      duration: "14 semaines",
      price: "30,000 DA",
      isPaid: true,
      icon: "🤖",
      color: "purple",
      description: "Explorez l'IA avec Python, machine learning et deep learning pratique.",
      features: ["Machine Learning", "Deep Learning", "Data Analysis", "AI Applications"]
    }
  ];

  const categories = [
    { id: "all", name: t('learning.categories.all'), icon: "📚" },
    { id: "web", name: t('learning.categories.web'), icon: "🌐" },
    { id: "mobile", name: t('learning.categories.mobile'), icon: "📱" },
    { id: "backend", name: t('learning.categories.backend'), icon: "⚙️" },
    { id: "iot", name: t('learning.categories.iot'), icon: "🔗" },
    { id: "ai", name: t('learning.categories.ai'), icon: "🤖" }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setFormData({ 
      ...formData, 
      courseId: course.id,
      courseTitle: course.title,
      isPaidCourse: course.isPaid,
      coursePrice: course.price
    });
    setShowEnrollForm(true);
    setSubmitError("");
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    // Basic validation
    if (!formData.fullName.trim()) {
      setSubmitError(t('learning.enrollment.errors.nameRequired'));
      return;
    }

    if (!formData.email.trim()) {
      setSubmitError(t('learning.enrollment.errors.emailRequired'));
      return;
    }

    if (!formData.phone.trim()) {
      setSubmitError(t('learning.enrollment.errors.phoneRequired'));
      return;
    }

    if (!formData.city) {
      setSubmitError(t('learning.enrollment.errors.cityRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      const enrollmentData = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        city: formData.city,
        course_id: formData.courseId,
        course_title: selectedCourse.title,
        experience: formData.experience || null,
        motivation: formData.motivation.trim() || null,
        is_paid_course: selectedCourse.isPaid,
        course_price: selectedCourse.price
      };

      const response = await apiService.submitEnrollment(enrollmentData);

      if (response.success) {
        setSubmitSuccess(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
        }, 3000);
      } else {
        setSubmitError(response.message || t('learning.enrollment.errors.genericError'));
      }

    } catch (error) {
      console.error('Enrollment error:', error);
      
      // Handle different types of errors
      if (error.message.includes('409')) {
        setSubmitError(t('learning.enrollment.errors.alreadyEnrolled'));
      } else if (error.message.includes('422')) {
        setSubmitError(t('learning.enrollment.errors.invalidData'));
      } else if (error.message.includes('Network')) {
        setSubmitError(t('learning.enrollment.errors.networkError'));
      } else {
        setSubmitError(error.message || t('learning.enrollment.errors.genericError'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowEnrollForm(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      experience: "",
      motivation: "",
      courseId: ""
    });
    setSubmitError("");
    setSubmitSuccess(false);
    setSelectedCourse(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
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

      <div className="relative z-10 py-20 px-6 space-y-32">
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
              🎓 {t('learning.title')}
            </motion.div>
            
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              {t('learning.hero.title')}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide">
              {t('learning.hero.subtitle')}
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('learning.hero.description')}
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: t('learning.stats.students'), icon: "👨‍🎓" },
              { number: "12", label: t('learning.stats.courses'), icon: "📚" },
              { number: "95%", label: t('learning.stats.satisfaction'), icon: "⭐" },
              { number: "6 mois", label: t('learning.stats.support'), icon: "🤝" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.section 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t('learning.sections.courses')}</h2>
            <p className="text-xl text-gray-600">{t('learning.sections.coursesSubtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Courses Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className={`p-8 rounded-3xl bg-gradient-to-br from-${course.color}-50 to-${course.color}-100 border border-${course.color}-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{course.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      course.isPaid 
                        ? "bg-orange-500 text-white" 
                        : "bg-green-500 text-white"
                    }`}>
                      {course.price}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-700 font-medium mb-4">{course.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>{t('learning.course.level')}:</strong> {course.level}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>{t('learning.course.duration')}:</strong> {course.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">{t('learning.course.whatYouLearn')}:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    onClick={() => handleEnroll(course)}
                    className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-${course.color}-500 to-${course.color}-600 hover:from-${course.color}-600 hover:to-${course.color}-700 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('learning.course.enroll')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          className="max-w-6xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-black text-gray-900">{t('learning.sections.whyUs')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('learning.sections.whyUsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {[
              { 
                icon: "👨‍💻", 
                title: t('learning.benefits.experts.title'), 
                desc: t('learning.benefits.experts.description'),
                color: "blue"
              },
              { 
                icon: "🛠️", 
                title: t('learning.benefits.practical.title'), 
                desc: t('learning.benefits.practical.description'),
                color: "green"
              },
              { 
                icon: "🤝", 
                title: t('learning.benefits.support.title'), 
                desc: t('learning.benefits.support.description'),
                color: "purple"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-2xl bg-gradient-to-br from-${benefit.color}-50 to-${benefit.color}-100 hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-black text-gray-900 text-xl mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Enrollment Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-screen overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-black text-gray-900">{t('learning.enrollment.title')}</h3>
                <p className="text-gray-600 mt-2">
                  {selectedCourse?.title} - {selectedCourse?.price}
                </p>
              </div>
              <motion.button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isSubmitting}
              >
                ✕
              </motion.button>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                <div className="text-2xl mb-2">🎉</div>
                <div className="font-semibold">{t('learning.enrollment.success')}</div>
                <div className="text-sm mt-1">{t('learning.enrollment.successDesc')}</div>
              </div>
            )}

            {/* Error Message */}
            {submitError && !submitSuccess && (
              <div className="mb-6 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                {submitError}
              </div>
            )}

            {!submitSuccess && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t('learning.enrollment.fullName')} {t('learning.enrollment.required')}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50"
                      placeholder={t('learning.enrollment.fullName')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t('learning.enrollment.email')} {t('learning.enrollment.required')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t('learning.enrollment.phone')} {t('learning.enrollment.required')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50"
                      placeholder="0555 xx xx xx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t('learning.enrollment.city')} {t('learning.enrollment.required')}
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50"
                    >
                      <option value="">{t('learning.enrollment.selectCity')}</option>
                      <option value="alger">{t('learning.enrollment.cities.alger')}</option>
                      <option value="oran">{t('learning.enrollment.cities.oran')}</option>
                      <option value="constantine">{t('learning.enrollment.cities.constantine')}</option>
                      <option value="setif">{t('learning.enrollment.cities.setif')}</option>
                      <option value="annaba">{t('learning.enrollment.cities.annaba')}</option>
                      <option value="blida">{t('learning.enrollment.cities.blida')}</option>
                      <option value="batna">{t('learning.enrollment.cities.batna')}</option>
                      <option value="other">{t('learning.enrollment.cities.other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t('learning.enrollment.experience')}
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">{t('learning.enrollment.selectExperience')}</option>
                    <option value="beginner">{t('learning.enrollment.levels.beginner')}</option>
                    <option value="intermediate">{t('learning.enrollment.levels.intermediate')}</option>
                    <option value="advanced">{t('learning.enrollment.levels.advanced')}</option>
                    <option value="expert">{t('learning.enrollment.levels.expert')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t('learning.enrollment.motivation')}
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows="4"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder={t('learning.enrollment.motivationPlaceholder')}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('learning.enrollment.cancel')}
                  </motion.button>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('learning.enrollment.submitting')}
                      </span>
                    ) : (
                      t('learning.enrollment.confirm')
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
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