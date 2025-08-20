import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Server, 
  Globe,
  Layers,
  Zap,
  Shield,
  Cpu,
  HardDrive,
  Monitor,
  GitBranch,
  Package,
  Workflow,
  Settings,
  Terminal,
  Binary,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';

const techCategories = [
  {
    id: "frontend",
    name: "Frontend & Mobile",
    icon: Monitor,
    color: "from-blue-500 to-blue-700",
    description: "Interfaces utilisateur modernes et responsive",
    technologies: [
      {
        name: "React.js",
        level: 95,
        experience: "8+ ans",
        projects: "200+ projets",
        description: "Bibliothèque JavaScript leader pour interfaces dynamiques",
        logo: "/icons/react.svg",
        type: "library"
      },
      {
        name: "Next.js",
        level: 92,
        experience: "5+ ans", 
        projects: "150+ projets",
        description: "Framework React full-stack avec SSR et performance optimisée",
        logo: "/icons/nextjs.svg",
        type: "framework"
      },
      {
        name: "React Native",
        level: 90,
        experience: "6+ ans",
        projects: "80+ apps",
        description: "Développement mobile cross-platform natif",
        logo: "/icons/react-native.svg",
        type: "mobile"
      },
      {
        name: "Flutter",
        level: 88,
        experience: "4+ ans",
        projects: "60+ apps",
        description: "SDK Google pour apps natives iOS/Android performantes",
        logo: "/icons/flutter.svg", 
        type: "mobile"
      },
      {
        name: "Vue.js",
        level: 85,
        experience: "5+ ans",
        projects: "120+ projets",
        description: "Framework progressif pour SPA et applications complexes",
        logo: "/icons/vue.svg",
        type: "framework"
      },
      {
        name: "Angular",
        level: 82,
        experience: "6+ ans",
        projects: "90+ projets",
        description: "Framework entreprise pour applications large échelle",
        logo: "/icons/angular.svg",
        type: "framework"
      },
      {
        name: "TypeScript",
        level: 94,
        experience: "7+ ans",
        projects: "250+ projets",
        description: "JavaScript typé pour code maintenable et sécurisé",
        logo: "/icons/typescript.svg",
        type: "language"
      },
      {
        name: "Tailwind CSS",
        level: 96,
        experience: "4+ ans",
        projects: "180+ projets", 
        description: "Framework CSS utility-first pour design rapide",
        logo: "/icons/tailwind.svg",
        type: "styling"
      }
    ]
  },
  {
    id: "backend", 
    name: "Backend & APIs",
    icon: Server,
    color: "from-green-500 to-green-700",
    description: "Architecture serveur robuste et scalable",
    technologies: [
      {
        name: "Node.js",
        level: 94,
        experience: "8+ ans",
        projects: "220+ projets",
        description: "Runtime JavaScript serveur haute performance",
        logo: "/icons/nodejs.svg",
        type: "runtime"
      },
      {
        name: "Java Spring",
        level: 91,
        experience: "10+ ans", 
        projects: "160+ projets",
        description: "Framework entreprise Java pour applications robustes",
        logo: "/icons/spring.svg",
        type: "framework"
      },
      {
        name: "PHP Laravel",
        level: 89,
        experience: "9+ ans",
        projects: "180+ projets",
        description: "Framework PHP élégant pour développement rapide",
        logo: "/icons/laravel.svg",
        type: "framework"
      },
      {
        name: "Python Django",
        level: 87,
        experience: "7+ ans",
        projects: "100+ projets",
        description: "Framework Python pour développement web sécurisé",
        logo: "/icons/django.svg",
        type: "framework"
      },
      {
        name: ".NET Core",
        level: 85,
        experience: "8+ ans",
        projects: "90+ projets",
        description: "Framework Microsoft cross-platform performant",
        logo: "/icons/dotnet.svg",
        type: "framework"
      },
      {
        name: "Express.js",
        level: 93,
        experience: "7+ ans",
        projects: "200+ projets",
        description: "Framework Node.js minimaliste pour APIs REST",
        logo: "/icons/express.svg",
        type: "framework"
      },
      {
        name: "GraphQL",
        level: 78,
        experience: "3+ ans",
        projects: "40+ projets",
        description: "Langage requête pour APIs flexibles et efficaces",
        logo: "/icons/graphql.svg",
        type: "query"
      },
      {
        name: "REST APIs",
        level: 96,
        experience: "10+ ans",
        projects: "300+ projets",
        description: "Architecture APIs standards pour intégrations",
        logo: "/icons/api.svg",
        type: "architecture"
      }
    ]
  },
  {
    id: "database",
    name: "Bases de Données",
    icon: Database,
    color: "from-red-500 to-red-700", 
    description: "Stockage et gestion de données optimisée",
    technologies: [
      {
        name: "Oracle Database",
        level: 92,
        experience: "12+ ans",
        projects: "80+ projets",
        description: "SGBD entreprise leader pour applications critiques",
        logo: "/icons/oracle.svg",
        type: "relational"
      },
      {
        name: "MySQL",
        level: 95,
        experience: "11+ ans",
        projects: "250+ projets", 
        description: "Base données relationnelle open-source populaire",
        logo: "/icons/mysql.svg",
        type: "relational"
      },
      {
        name: "PostgreSQL",
        level: 89,
        experience: "8+ ans",
        projects: "120+ projets",
        description: "SGBD objet-relationnel avancé et extensible",
        logo: "/icons/postgresql.svg",
        type: "relational"
      },
      {
        name: "MongoDB",
        level: 86,
        experience: "6+ ans",
        projects: "90+ projets",
        description: "Base NoSQL document-orientée flexible",
        logo: "/icons/mongodb.svg",
        type: "nosql"
      },
      {
        name: "Redis",
        level: 88,
        experience: "7+ ans",
        projects: "150+ projets",
        description: "Cache in-memory haute performance",
        logo: "/icons/redis.svg",
        type: "cache"
      },
      {
        name: "Elasticsearch",
        level: 82,
        experience: "5+ ans",
        projects: "60+ projets",
        description: "Moteur recherche et analyse temps réel",
        logo: "/icons/elasticsearch.svg",
        type: "search"
      },
      {
        name: "SQL Server",
        level: 85,
        experience: "9+ ans",
        projects: "70+ projets",
        description: "SGBD Microsoft pour environnements entreprise",
        logo: "/icons/sqlserver.svg", 
        type: "relational"
      },
      {
        name: "Firebase",
        level: 78,
        experience: "4+ ans",
        projects: "50+ projets",
        description: "Backend-as-a-Service Google temps réel",
        logo: "/icons/firebase.svg",
        type: "baas"
      }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-purple-700",
    description: "Infrastructure cloud et déploiement automatisé",
    technologies: [
      {
        name: "Amazon AWS",
        level: 91,
        experience: "8+ ans", 
        projects: "120+ projets",
        description: "Plateforme cloud leader mondiale complète",
        logo: "/icons/aws.svg",
        type: "cloud"
      },
      {
        name: "Microsoft Azure",
        level: 87,
        experience: "6+ ans",
        projects: "80+ projets",
        description: "Cloud Microsoft pour solutions entreprise",
        logo: "/icons/azure.svg",
        type: "cloud"
      },
      {
        name: "Docker",
        level: 93,
        experience: "7+ ans",
        projects: "180+ projets",
        description: "Conteneurisation pour déploiements reproductibles",
        logo: "/icons/docker.svg",
        type: "container"
      },
      {
        name: "Kubernetes",
        level: 85,
        experience: "5+ ans",
        projects: "60+ projets",
        description: "Orchestration containers à grande échelle",
        logo: "/icons/kubernetes.svg",
        type: "orchestration"
      },
      {
        name: "Jenkins",
        level: 82,
        experience: "6+ ans",
        projects: "100+ projets",
        description: "Serveur CI/CD automation et intégration",
        logo: "/icons/jenkins.svg",
        type: "cicd"
      },
      {
        name: "GitLab CI/CD",
        level: 88,
        experience: "5+ ans",
        projects: "90+ projets",
        description: "Plateforme DevOps complète intégrée",
        logo: "/icons/gitlab.svg",
        type: "cicd"
      },
      {
        name: "Terraform",
        level: 79,
        experience: "4+ ans", 
        projects: "45+ projets",
        description: "Infrastructure as Code multi-cloud",
        logo: "/icons/terraform.svg",
        type: "iac"
      },
      {
        name: "Nginx",
        level: 90,
        experience: "9+ ans",
        projects: "200+ projets",
        description: "Serveur web et reverse proxy performant",
        logo: "/icons/nginx.svg",
        type: "server"
      }
    ]
  }
];

const certifications = [
  {
    name: "AWS Solutions Architect", 
    provider: "Amazon",
    level: "Professional",
    year: "2023"
  },
  {
    name: "Oracle Certified Professional",
    provider: "Oracle",
    level: "Expert", 
    year: "2022"
  },
  {
    name: "Microsoft Azure Developer",
    provider: "Microsoft",
    level: "Associate",
    year: "2023"
  },
  {
    name: "Google Cloud Professional",
    provider: "Google",
    level: "Professional", 
    year: "2023"
  }
];

export default function TechStack() {
  const { t } = useTranslation('common');
  const [activeCategory, setActiveCategory] = useState(techCategories[0]);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [animationIndex, setAnimationIndex] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex(prev => (prev + 1) % activeCategory.technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeCategory]);

  // SEO Schema for Technologies
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Stack Technologique Symloop Algérie - Technologies Développement IT",
    "description": "Technologies maîtrisées par Symloop : React, Node.js, Java, Oracle, AWS, Docker pour développement logiciel entreprise en Algérie",
    "author": {
      "@type": "Organization",
      "name": "Symloop Technology Algérie"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Symloop Technology Algérie",
      "url": "https://symloop.com"
    },
    "about": [
      "Software Development Algeria",
      "React Development Algérie", 
      "Java Spring Développement",
      "Oracle Database Algérie",
      "AWS Cloud Solutions"
    ],
    "keywords": "développement react algérie, java spring alger, oracle database oran, aws cloud constantine, node.js développement sétif, technologies it algérie",
    "inLanguage": "fr-DZ",
    "locationCreated": {
      "@type": "Place",
      "name": "Algeria"
    }
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative py-24 bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-500 to-blue-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Binary className="w-4 h-4" />
              Stack Technologique
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Technologies <span className="text-gray-400">de Pointe</span>{" "}
              <span className="block">Maîtrisées à 100%</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Notre équipe maîtrise les technologies les plus avancées pour créer 
              des solutions performantes et évolutives adaptées au marché algérien.
            </p>
          </motion.div>

          {/* Tech Categories Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {techCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory.id === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Active Category Display */}
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${activeCategory.color} p-4 rounded-2xl mb-6`}>
                <activeCategory.icon className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xl font-bold">{activeCategory.name}</div>
                  <div className="text-sm opacity-90">{activeCategory.description}</div>
                </div>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeCategory.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                    animationIndex === index ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-black' : ''
                  }`}
                >
                  {/* Tech Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Binary className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{tech.name}</div>
                        <div className="text-xs text-gray-400 capitalize">{tech.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">{tech.level}%</div>
                      <div className="text-xs text-gray-400">Maîtrise</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Niveau d'expertise</span>
                      <span className="text-xs text-white">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${activeCategory.color}`}
                      />
                    </div>
                  </div>

                  {/* Tech Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{tech.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{tech.projects}</span>
                    </div>
                  </div>

                  {/* Tech Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {tech.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredTech === tech.name ? 1 : 0,
                      y: hoveredTech === tech.name ? 0 : 10
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/20 flex items-center justify-center pointer-events-none"
                  >
                    <div className="text-center">
                      <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-sm font-medium">Expert Level</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center"
          >
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-400">Technologies Maîtrisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-gray-400">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-gray-400">Experts Certifiés</div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Certifications Professionnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <div className="text-sm text-gray-400 mb-2">{cert.provider}</div>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {cert.level} • {cert.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold mb-6">
              Des Technologies de Pointe pour Votre Succès
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Notre expertise technologique au service de votre croissance. 
              Développons ensemble la solution parfaite pour votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Discuter de Votre Projet
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gray-600 text-white font-medium px-8 py-4 rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all duration-300"
              >
                Voir Nos Réalisations
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}