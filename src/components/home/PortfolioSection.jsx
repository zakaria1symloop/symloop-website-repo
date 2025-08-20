import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Award, 
  Users, 
  TrendingUp, 
  Smartphone,
  Globe,
  Database,
  ShoppingCart,
  Building,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'next-i18next';

const categories = ["all", "web", "mobile", "erp", "ecommerce"];

const projects = [
  {
    id: 1,
    title: "ERP SAIDAL Pharmaceutiques",
    subtitle: "Système de Gestion Intégré",
    category: "erp",
    client: "SAIDAL - Groupe Pharmaceutique",
    location: "Alger, Algérie",
    year: "2024",
    duration: "8 mois",
    team: "12 développeurs",
    technologies: ["Java Spring", "Oracle", "Angular", "Docker"],
    description: "ERP complet pour la gestion de production pharmaceutique, conforme aux normes DCI algériennes. Gestion des lots, traçabilité, qualité et distribution nationale.",
    features: [
      "Gestion production pharmaceutique conforme DCI",
      "Traçabilité complète des médicaments", 
      "Distribution 58 wilayas d'Algérie",
      "Interface multilingue AR/FR/EN",
      "Intégration systèmes existants"
    ],
    results: {
      efficiency: "+45%",
      cost: "-30%",
      compliance: "100%"
    },
    image: "/assets/portfolio/saidal-erp.jpg",
    testimonial: {
      text: "L'ERP Symloop a révolutionné notre gestion. La traçabilité des médicaments est maintenant parfaite sur toute l'Algérie.",
      author: "Dr. Farid Benachenhou",
      position: "Directeur IT SAIDAL"
    }
  },
  {
    id: 2,
    title: "Application Mobile CIB Bank",
    subtitle: "Banking Mobile Algeria",
    category: "mobile",
    client: "Crédit Industriel & Commercial",
    location: "Alger, Algérie", 
    year: "2023",
    duration: "6 mois",
    team: "8 développeurs",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "Redis"],
    description: "Application mobile bancaire avec authentification biométrique, virements instantanés et paiement commerçants. Sécurité renforcée conforme Banque d'Algérie.",
    features: [
      "Authentification biométrique sécurisée",
      "Virements instantanés inter-banques", 
      "Paiement QR Code commerçants",
      "Gestion comptes multi-devises",
      "Notifications push temps réel"
    ],
    results: {
      users: "500k+",
      transactions: "2M+/mois", 
      satisfaction: "4.8/5"
    },
    image: "/assets/portfolio/cib-mobile.jpg",
    testimonial: {
      text: "L'app mobile développée par Symloop a dépassé nos attentes. Nos clients adorent l'interface intuitive.",
      author: "Mme Samia Ghoul",
      position: "DSI CIB Bank"
    }
  },
  {
    id: 3,
    title: "Plateforme E-commerce Jumia DZ",
    subtitle: "Marketplace Algeria",
    category: "ecommerce",
    client: "Jumia Algérie",
    location: "Alger, Oran, Constantine",
    year: "2023", 
    duration: "10 mois",
    team: "15 développeurs",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    description: "Plateforme e-commerce complète avec paiement CIB/Edahabia, livraison 58 wilayas, gestion vendeurs multiples et système recommandation IA.",
    features: [
      "Paiement intégré CIB/Edahabia/ePay",
      "Livraison tracking temps réel 58 wilayas",
      "Marketplace multi-vendeurs",
      "Recommandations IA personnalisées", 
      "Mobile-first responsive design"
    ],
    results: {
      gmv: "2.5M$ GMV",
      vendors: "1000+ vendeurs",
      orders: "50k commandes/mois"
    },
    image: "/assets/portfolio/jumia-ecommerce.jpg",
    testimonial: {
      text: "Symloop a créé une plateforme robuste qui gère parfaitement notre croissance explosive en Algérie.",
      author: "M. Yacine Mahieddine", 
      position: "Country Manager Jumia DZ"
    }
  },
  {
    id: 4,
    title: "Système LMS Université Sétif",
    subtitle: "Plateforme E-learning",
    category: "web",
    client: "Université Ferhat Abbas Sétif",
    location: "Sétif, Algérie",
    year: "2022",
    duration: "5 mois", 
    team: "6 développeurs",
    technologies: ["Laravel", "Vue.js", "MySQL", "WebRTC"],
    description: "Learning Management System complet pour 45,000 étudiants. Cours en ligne, examens sécurisés, visioconférence et gestion administrative universitaire.",
    features: [
      "LMS complet 45k étudiants actifs",
      "Examens en ligne anti-triche",
      "Visioconférence HD intégrée",
      "Gestion administrative complète",
      "Mobile app étudiants/professeurs"
    ],
    results: {
      students: "45k étudiants",
      courses: "2500+ cours",
      satisfaction: "92%"
    },
    image: "/assets/portfolio/univ-setif-lms.jpg",
    testimonial: {
      text: "Le LMS Symloop a permis la continuité pédagogique pendant la pandémie. Une solution remarquable.",
      author: "Pr. Abderrazak Bouremana",
      position: "Vice-Recteur Université Sétif"
    }
  },
  {
    id: 5,
    title: "App Mobile Yassir Algeria",
    subtitle: "Super App Transport & Livraison", 
    category: "mobile",
    client: "Yassir Technologies",
    location: "Alger, Oran, Constantine",
    year: "2024",
    duration: "7 mois",
    team: "10 développeurs", 
    technologies: ["React Native", "Node.js", "Redis", "PostgreSQL"],
    description: "Super application mobile transport de personnes, livraison nourriture et courses. Géolocalisation précise, paiement mobile intégré, 300k+ utilisateurs actifs.",
    features: [
      "Transport VTC géolocalisé temps réel",
      "Livraison food & courses 2h",
      "Paiement mobile CIB intégré", 
      "Tracking GPS haute précision",
      "Support multilingue AR/FR"
    ],
    results: {
      users: "300k+ utilisateurs",
      rides: "100k courses/mois",
      cities: "12 villes DZ"
    },
    image: "/assets/portfolio/yassir-app.jpg", 
    testimonial: {
      text: "L'équipe Symloop a livré une app mobile de qualité internationale. Performance exceptionnelle.",
      author: "M. Noureddine Tayebi",
      position: "CTO Yassir Algeria"
    }
  },
  {
    id: 6,
    title: "Site Web Ministère Digitalisation",
    subtitle: "Portail Gouvernemental",
    category: "web", 
    client: "Ministère Digitalisation DZ",
    location: "Alger, Algérie",
    year: "2023",
    duration: "4 mois",
    team: "8 développeurs",
    technologies: ["Next.js", "Strapi", "PostgreSQL", "Nginx"],
    description: "Portail web institutionnel avec services citoyens numériques, authentification gouvernementale, multilangue et accessibilité conforme WCAG 2.1.",
    features: [
      "Services citoyens dématérialisés",
      "Authentification gouvernementale sécurisée",
      "Accessibilité WCAG 2.1 AA",
      "Multilingue AR/FR/EN/Berbère", 
      "Intégration API gouvernementales"
    ],
    results: {
      visits: "2M+ visites/mois",
      services: "50+ services numériques", 
      accessibility: "AA certified"
    },
    image: "/assets/portfolio/ministere-digital.jpg",
    testimonial: {
      text: "Symloop a développé un portail moderne qui facilite l'accès aux services publics pour tous les Algériens.",
      author: "M. Hocine Cherhabil",
      position: "Secrétaire Général Ministère"
    }
  }
];

export default function PortfolioSection() {
  const { t } = useTranslation('common');
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryLabel = (category) => {
    const labels = {
      all: "Tous les Projets",
      web: "Sites Web",
      mobile: "Applications Mobiles", 
      erp: "ERP & Logiciels Métiers",
      ecommerce: "E-commerce"
    };
    return labels[category];
  };

  const getCategoryIcon = (category) => {
    const icons = {
      web: Globe,
      mobile: Smartphone,
      erp: Building, 
      ecommerce: ShoppingCart
    };
    return icons[category];
  };

  // SEO Schema for Portfolio
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Portfolio Symloop Technology Algérie",
    "description": "Projets réalisés par Symloop : ERP, applications mobiles, sites e-commerce, solutions IT pour entreprises algériennes",
    "creator": {
      "@type": "Organization",
      "name": "Symloop Technology Algérie",
      "url": "https://symloop.com"
    },
    "about": "Développement logiciel Algérie",
    "locationCreated": "Algeria",
    "workExample": projects.slice(0, 3).map(project => ({
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "applicationCategory": project.category === "mobile" ? "MobileApplication" : "WebApplication",
      "operatingSystem": project.category === "mobile" ? "iOS, Android" : "Web",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "DZD",
        "availability": "https://schema.org/InStock"
      },
      "creator": {
        "@type": "Organization", 
        "name": "Symloop Technology"
      }
    }))
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative py-24 bg-white text-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-10 w-64 h-64 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gray-100"></div>
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
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Portfolio & Réalisations
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nos <span className="text-gray-600">Succès</span>{" "}
              <span className="block">Client par Client</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Plus de 500 projets réalisés pour des entreprises algériennes leaders. 
              Découvrez comment nous transformons les idées en solutions digitales performantes.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-gray-500">Projets Livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">200+</div>
                <div className="text-gray-500">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">98%</div>
                <div className="text-gray-500">Taux de Réussite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">12+</div>
                <div className="text-gray-500">Années d'Expertise</div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {getCategoryLabel(category)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        {CategoryIcon && <CategoryIcon className="w-8 h-8 text-white bg-black/20 backdrop-blur-sm rounded-lg p-2" />}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                        {project.year}
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Project Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">{project.subtitle}</p>
                        <p className="text-sm text-gray-500">{project.client}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Results Preview */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                        {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-lg font-bold text-black">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>

                      {/* View Details */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-black group-hover:text-gray-700 transition-colors">
                          Voir détails
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-2xl p-12 mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Résultats Mesurables</h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Nos projets génèrent des impacts concrets pour nos clients algériens
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2.5M$</div>
                <div className="text-gray-400">CA généré clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">45%</div>
                <div className="text-gray-400">Gain efficacité moyen</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">800k+</div>
                <div className="text-gray-400">Utilisateurs touchés</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-400">Projets livrés à temps</div>
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
              Prêt à Créer Votre Prochain Succès ?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les 200+ entreprises algériennes qui nous font confiance. 
              Discutons de votre projet dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Démarrer Votre Projet
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gray-300 text-black font-medium px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Portfolio Complet
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal (if selectedProject) */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Localisation</div>
                    <div className="font-medium">{selectedProject.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Durée</div>
                    <div className="font-medium">{selectedProject.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Équipe</div>
                    <div className="font-medium">{selectedProject.team}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Description du Projet</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Fonctionnalités Clés</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Résultats Obtenus</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedProject.results).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-black">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedProject.testimonial && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Témoignage Client</h4>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{selectedProject.testimonial.text}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-medium">{selectedProject.testimonial.author}</div>
                    <div className="text-gray-500">{selectedProject.testimonial.position}</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}