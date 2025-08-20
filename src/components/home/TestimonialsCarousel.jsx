import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Building,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  ExternalLink,
  PlayCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    position: "Directeur Général",
    company: "CEVITAL Group",
    location: "région MENA",
    avatar: "/avatars/ahmed-benali.jpg",
    rating: 5,
    date: "Janvier 2024",
    project: "ERP Intégré & Supply Chain",
    duration: "8 mois",
    team_size: "12 développeurs",
    testimonial: "Symloop a transformé notre gestion d'entreprise avec un ERP sur mesure exceptionnel. L'équipe comprend parfaitement les défis des grandes entreprises MENA. Gain d'efficacité de 45% en 6 mois.",
    results: {
      efficiency: "+45%",
      cost_reduction: "-30%",
      time_saved: "15h/semaine"
    },
    industry: "Agroalimentaire",
    company_size: "5000+ employés",
    technologies: ["Java Spring", "Oracle", "Angular"],
    video_testimonial: true,
    long_testimonial: "Nous cherchions une solution ERP adaptée aux spécificités du marché MENA. L'équipe Symloop a livré bien au-delà de nos attentes. Leur expertise technique combinée à leur connaissance du contexte local a fait la différence. Le système gère maintenant toute notre chaîne d'approvisionnement sur 12 région MENA."
  },
  {
    id: 2, 
    name: "Fatima Zahra Khelifi",
    position: "CEO & Fondatrice",
    company: "TechStart MENA",
    location: "région MENA", 
    avatar: "/avatars/fatima-khelifi.jpg",
    rating: 5,
    date: "Mars 2024",
    project: "Application Mobile E-commerce",
    duration: "4 mois",
    team_size: "6 développeurs",
    testimonial: "Notre marketplace mobile génère maintenant 2M DA/mois grâce au travail exceptionnel de Symloop. L'intégration des paiements CIB/Edahabia est parfaite. Une équipe professionnelle qui respecte les délais.",
    results: {
      revenue: "2M DA/mois",
      users: "50k+ utilisateurs",
      conversion: "+35%"
    },
    industry: "E-commerce",
    company_size: "25 employés",
    technologies: ["React Native", "Node.js", "MongoDB"],
    video_testimonial: false,
    long_testimonial: "En tant que startup MENA, nous avions besoin d'un partenaire technologique fiable. Symloop a développé notre application e-commerce mobile avec une qualité internationale. Leur compréhension des spécificités du marché MENA, notamment l'intégration des solutions de paiement locales, a été cruciale pour notre succès."
  },
  {
    id: 3,
    name: "Dr. Karim Mansouri", 
    position: "CTO",
    company: "MENA Telecom",
    location: "région MENA",
    avatar: "/avatars/karim-mansouri.jpg",
    rating: 5,
    date: "Février 2024",
    project: "Infrastructure Réseau & Cloud",
    duration: "6 mois",
    team_size: "8 ingénieurs",
    testimonial: "L'infrastructure cloud hybride mise en place par Symloop supporte maintenant 2M+ d'abonnés sans interruption. Leur expertise technique et support 24/7 sont exceptionnels. Un partenaire de confiance.",
    results: {
      uptime: "99.95%",
      performance: "+60%", 
      scalability: "2M+ users"
    },
    industry: "Télécommunications",
    company_size: "10000+ employés", 
    technologies: ["AWS", "Kubernetes", "Docker"],
    video_testimonial: true,
    long_testimonial: "La migration de notre infrastructure vers le cloud était critique pour notre croissance. L'équipe Symloop a orchestré une transition parfaite sans interruption de service. Leur approche méthodique et leur expertise en architecture cloud nous ont permis de scaler pour supporter la croissance massive de nos services."
  },
  {
    id: 4,
    name: "Amina Boudaoud",
    position: "Directrice IT", 
    company: "Banque BNA",
    location: "région MENA",
    avatar: "/avatars/amina-boudaoud.jpg",
    rating: 5,
    date: "Décembre 2023",
    project: "Système Bancaire Core Banking",
    duration: "12 mois",
    team_size: "15 développeurs",
    testimonial: "Le nouveau système bancaire développé par Symloop traite 100k+ transactions/jour en toute sécurité. Conformité totale aux standards bancaires MENA. Une réalisation remarquable.",
    results: {
      transactions: "100k+/jour",
      security: "100% conforme",
      availability: "99.99%"
    },
    industry: "Services Financiers",
    company_size: "3000+ employés",
    technologies: [".NET Core", "SQL Server", "Angular"],
    video_testimonial: false,
    long_testimonial: "Le secteur bancaire exige une sécurité et une fiabilité absolues. Symloop a développé notre nouveau système core banking avec une attention particulière aux régulations MENA. Leur expertise en sécurité financière et leur respect des standards internationaux nous ont donné une solution robuste qui traite nos volumes de transactions croissants."
  },
  {
    id: 5,
    name: "Yacine Brahimi",
    position: "Responsable Digital",
    company: "Sonatrach Services", 
    location: "région MENA",
    avatar: "/avatars/yacine-brahimi.jpg",
    rating: 5,
    date: "Octobre 2023",
    project: "Plateforme IoT Industrielle",
    duration: "10 mois", 
    team_size: "10 ingénieurs",
    testimonial: "La plateforme IoT industrie 4.0 de Symloop monitore maintenant 500+ équipements pétroliers en temps réel. Réduction des pannes de 40% et optimisation maintenance prédictive exceptionnelle.",
    results: {
      equipment: "500+ équipements",
      downtime: "-40%",
      efficiency: "+25%"
    },
    industry: "Energie & Pétrole",
    company_size: "50000+ employés",
    technologies: ["Python", "InfluxDB", "Grafana"], 
    video_testimonial: true,
    long_testimonial: "L'industrie pétrolière requiert des solutions technologiques spécialisées. Symloop a créé notre plateforme IoT industrielle qui révolutionne notre approche de la maintenance prédictive. Leur expertise en systèmes temps réel et analyse de données nous permet d'optimiser nos opérations dans la région MENA."
  },
  {
    id: 6,
    name: "Sarah Meziani",
    position: "Directrice Académique",
    company: "Université de Sétif", 
    location: "région MENA",
    avatar: "/avatars/sarah-meziani.jpg",
    rating: 5,
    date: "Septembre 2023",
    project: "Plateforme E-learning Universitaire",
    duration: "5 mois",
    team_size: "7 développeurs",
    testimonial: "45,000 étudiants utilisent quotidiennement notre plateforme e-learning développée par Symloop. Interface intuitive, performance excellente, support multilingue AR/FR parfait.",
    results: {
      students: "45k étudiants",
      courses: "2500+ cours",
      satisfaction: "92%"
    },
    industry: "Education",
    company_size: "5000+ employés",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    video_testimonial: false,
    long_testimonial: "La digitalisation de l'enseignement supérieur était un défi majeur. Symloop a développé notre LMS universitaire avec une approche pédagogique remarquable. Leur compréhension des besoins spécifiques de l'enseignement MENA et le support multilingue ont rendu possible l'adoption massive par nos étudiants et enseignants."
  }
];

export default function TestimonialsCarousel() {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // SEO Schema for Testimonials
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Symloop Technology MENA",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MENA",
        "addressLocality": "région MENA"
      }
    },
    "reviewRating": {
      "@type": "Rating", 
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": currentTestimonial.name
    },
    "reviewBody": currentTestimonial.testimonial,
    "publisher": {
      "@type": "Organization",
      "name": currentTestimonial.company
    }
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Quote className="w-4 h-4" />
              Témoignages Clients
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ce que Disent <span className="text-gray-600">Nos Clients</span>{" "}
              <span className="block">Leaders MENA</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La satisfaction client au cœur de notre mission. Découvrez les témoignages 
              des entreprises MENA qui nous font confiance.
            </p>
          </motion.div>

          {/* Main Testimonial Display */}
          <div className="relative">
            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Side - Testimonial Content */}
                  <div className="p-8 lg:p-12">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {currentTestimonial.rating}/5 • {currentTestimonial.date}
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-8">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                      <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed pl-6">
                        {showFullTestimonial ? currentTestimonial.long_testimonial : currentTestimonial.testimonial}
                      </blockquote>
                      <button
                        onClick={() => setShowFullTestimonial(!showFullTestimonial)}
                        className="text-sm text-blue-600 hover:text-blue-800 mt-2 font-medium"
                      >
                        {showFullTestimonial ? "Voir moins" : "Lire plus"}
                      </button>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-900">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {currentTestimonial.position}
                        </div>
                        <div className="text-gray-500">
                          {currentTestimonial.company}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                          <MapPin className="w-4 h-4" />
                          {currentTestimonial.location}
                        </div>
                      </div>
                      {currentTestimonial.video_testimonial && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                        >
                          <PlayCircle className="w-4 h-4" />
                          Vidéo
                        </motion.button>
                      )}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(currentTestimonial.results).map(([key, value]) => (
                        <div key={key} className="text-center bg-gray-50 rounded-xl p-4">
                          <div className="text-xl font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Project Details */}
                  <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 lg:p-12">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">Détails du Projet</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Building className="w-5 h-5 text-gray-400 mt-1" />
                          <div>
                            <div className="text-sm text-gray-400">Projet</div>
                            <div className="font-medium">{currentTestimonial.project}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                          <div>
                            <div className="text-sm text-gray-400">Durée</div>
                            <div className="font-medium">{currentTestimonial.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-gray-400 mt-1" />
                          <div>
                            <div className="text-sm text-gray-400">Équipe</div>
                            <div className="font-medium">{currentTestimonial.team_size}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-gray-400 mt-1" />
                          <div>
                            <div className="text-sm text-gray-400">Secteur</div>
                            <div className="font-medium">{currentTestimonial.industry}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-gray-300">Technologies Utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentTestimonial.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <span className="font-semibold">Entreprise Cliente</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Secteur</span>
                          <span>{currentTestimonial.industry}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Taille</span>
                          <span>{currentTestimonial.company_size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Localisation</span>
                          <span>{currentTestimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-12 mb-16">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-black scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-2xl p-12 mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Satisfaction Client Garantie</h3>
              <p className="text-gray-400 text-lg">
                Des résultats concrets pour les leaders de l'économie MENA
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-400">Satisfaction Client</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-gray-400">Clients Satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-400">Projets Réussis</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">58</div>
                <div className="text-gray-400">Wilayas Couvertes</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Rejoignez Nos Clients Satisfaits
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Faites confiance à l'expertise qui a fait le succès de centaines d'entreprises MENA. 
              Votre projet mérite la même excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5" />
                Commencer Mon Projet
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gray-300 text-black font-medium px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Voir Plus de Témoignages
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}