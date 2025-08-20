import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  ShoppingCart,
  Building2,
  GraduationCap,
  Heart,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Palette,
  Search,
  TrendingUp,
  Settings,
  Headphones,
  FileText,
  Layers
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'next-i18next';

const services = [
  {
    id: 1,
    category: "development",
    icon: Code2,
    title: "Développement Logiciel Sur Mesure",
    subtitle: "ERP • CRM • Applications Métiers",
    shortDesc: "Solutions logicielles personnalisées pour entreprises algériennes",
    longDesc: "Développement d'applications métiers complètes : ERP, CRM, logiciels de gestion adaptés aux spécificités du marché algérien. Conformité réglementaire DZ, multilangue AR/FR/EN, intégration systèmes existants.",
    features: [
      "ERP complet gestion entreprise",
      "CRM clients et prospects", 
      "Applications métiers sur mesure",
      "Conformité réglementaire algérienne",
      "Interface multilingue AR/FR/EN",
      "Intégration systèmes existants"
    ],
    technologies: ["Java Spring", "Laravel", ".NET Core", "Node.js", "Python Django"],
    pricing: "À partir de 500k DA",
    duration: "3-12 mois",
    delivery: "Support 12 mois inclus",
    caseStudy: "ERP SAIDAL - 45% gain efficacité",
    seoKeywords: "développement logiciel sur mesure algérie, erp crm alger, applications métiers oran, logiciel gestion constantine, développement java php setif",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    category: "mobile",
    icon: Smartphone,
    title: "Applications Mobiles Natives",
    subtitle: "iOS • Android • Cross-Platform",
    shortDesc: "Apps mobiles performantes pour tous les appareils",
    longDesc: "Développement d'applications mobiles natives iOS/Android et cross-platform. UX/UI moderne, performance optimisée, intégration API, paiement mobile CIB/Edahabia, notifications push.",
    features: [
      "Applications iOS & Android natives",
      "React Native & Flutter cross-platform",
      "UX/UI design moderne responsive", 
      "Intégration paiement CIB/Edahabia",
      "Push notifications géolocalisées",
      "Publication App Store & Play Store"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    pricing: "À partir de 180k DA",
    duration: "2-8 mois",
    delivery: "Maintenance 6 mois incluse",
    caseStudy: "App CIB Bank - 500k+ utilisateurs",
    seoKeywords: "développement application mobile algérie, app ios android alger, react native flutter oran, application mobile constantine setif",
    color: "from-green-500 to-green-700"
  },
  {
    id: 3,
    category: "web",
    icon: Globe,
    title: "Sites Web & E-commerce",
    subtitle: "Responsive • SEO • Performance",
    shortDesc: "Sites web modernes et boutiques en ligne performantes",
    longDesc: "Création de sites web responsives, e-commerce avec paiement intégré CIB/Edahabia, SEO optimisé pour l'Algérie, performance élevée, sécurité renforcée.",
    features: [
      "Sites responsive tous appareils",
      "E-commerce paiement CIB/Edahabia",
      "SEO optimisé 58 wilayas Algérie",
      "Performance web élevée (90+ PageSpeed)",
      "Sécurité SSL et conformité RGPD",
      "CMS intégré gestion autonome"
    ],
    technologies: ["Next.js", "React", "WordPress", "Shopify", "Laravel"],
    pricing: "À partir de 60k DA",
    duration: "2-6 semaines",
    delivery: "Hébergement 1 an inclus",
    caseStudy: "Jumia DZ - 2.5M$ GMV généré",
    seoKeywords: "création site web algérie, développement e-commerce alger, site internet responsive oran, boutique en ligne constantine setif",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 4,
    category: "infrastructure",
    icon: Database,
    title: "Infrastructure & Base de Données",
    subtitle: "Oracle • MySQL • Cloud",
    shortDesc: "Architecture IT et gestion de bases de données",
    longDesc: "Conception d'architectures IT, gestion bases de données Oracle/MySQL/PostgreSQL, optimisation performances, sauvegarde, migration cloud, sécurité avancée.",
    features: [
      "Architecture IT évolutive",
      "Gestion Oracle/MySQL/PostgreSQL",
      "Optimisation performances BDD",
      "Sauvegarde et disaster recovery",
      "Migration vers le cloud",
      "Sécurité et chiffrement avancés"
    ],
    technologies: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    pricing: "À partir de 150k DA",
    duration: "2-6 mois",
    delivery: "Maintenance 24/7 incluse",
    caseStudy: "Infrastructure Sonatrach - 99.9% uptime",
    seoKeywords: "base données oracle mysql algérie, infrastructure it alger, gestion bdd oran, administration oracle constantine setif",
    color: "from-red-500 to-red-700"
  },
  {
    id: 5,
    category: "cloud",
    icon: Cloud,
    title: "Solutions Cloud & DevOps",
    subtitle: "AWS • Azure • Hébergement Local",
    shortDesc: "Migration cloud et hébergement sécurisé",
    longDesc: "Services cloud AWS/Azure, hébergement local Algérie, DevOps CI/CD, conteneurisation Docker/Kubernetes, monitoring, backup automatisé.",
    features: [
      "Migration cloud AWS/Azure",
      "Hébergement local datacenter Algérie",
      "DevOps CI/CD automation",
      "Conteneurisation Docker/Kubernetes",
      "Monitoring et alertes 24/7",
      "Backup automatisé multi-sites"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    pricing: "À partir de 80k DA/mois",
    duration: "1-4 mois",
    delivery: "Support continu inclus",
    caseStudy: "Cloud Mobilis - 50% réduction coûts",
    seoKeywords: "services cloud aws azure algérie, hébergement datacenter alger, devops ci cd oran, cloud computing constantine setif",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    id: 6,
    category: "consulting",
    icon: Settings,
    title: "Conseil & Transformation Digitale",
    subtitle: "Audit • Stratégie • Formation",
    shortDesc: "Accompagnement transformation numérique",
    longDesc: "Audit IT complet, stratégie digitale, conduite du changement, formation équipes, gouvernance IT, roadmap transformation numérique adaptée au contexte algérien.",
    features: [
      "Audit IT et systèmes existants",
      "Stratégie transformation digitale",
      "Conduite du changement",
      "Formation équipes techniques",
      "Gouvernance IT et sécurité",
      "Roadmap évolution progressive"
    ],
    technologies: ["ITIL", "COBIT", "Agile", "Scrum", "DevOps"],
    pricing: "À partir de 120k DA",
    duration: "1-6 mois",
    delivery: "Rapport et plan action",
    caseStudy: "Digital transformation Air Algérie",
    seoKeywords: "conseil transformation digitale algérie, audit it alger, stratégie numérique oran, consulting informatique constantine setif",
    color: "from-orange-500 to-orange-700"
  }
];

const industries = [
  {
    icon: Building2,
    name: "Entreprises & Industrie",
    description: "ERP, gestion production, logistique",
    projects: "120+ projets"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Boutiques en ligne, marketplace",
    projects: "85+ projets" 
  },
  {
    icon: Heart,
    name: "Santé & Médical",
    description: "Dossiers patients, télémédecine",
    projects: "45+ projets"
  },
  {
    icon: GraduationCap,
    name: "Education & Formation",
    description: "LMS, e-learning, gestion scolaire",
    projects: "60+ projets"
  },
  {
    icon: Shield,
    name: "Gouvernement & Public",
    description: "Services citoyens, administration",
    projects: "25+ projets"
  },
  {
    icon: Zap,
    name: "Energie & Utilities", 
    description: "Smart grid, IoT industriel",
    projects: "30+ projets"
  }
];

export default function ServicesShowcase() {
  const { t } = useTranslation('common');
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  // SEO Schema for Services
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services IT Professionnels Symloop Algérie",
    "description": "Services développement logiciel, applications mobiles, sites web, infrastructure IT pour entreprises algériennes. Solutions sur mesure avec support local.",
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology Algérie",
      "url": "https://symloop.com"
    },
    "areaServed": {
      "@type": "Country", 
      "name": "Algeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services IT Algérie",
      "itemListElement": services.map((service, index) => ({
        "@type": "Service",
        "@id": `https://symloop.com#service-${index}`,
        "name": service.title,
        "description": service.longDesc,
        "serviceType": service.category,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "DZD",
          "description": service.pricing
        }
      }))
    },
    "serviceType": "Information Technology Services",
    "additionalType": [
      "Software Development",
      "Mobile App Development", 
      "Web Development",
      "Database Management",
      "Cloud Computing",
      "IT Consulting"
    ]
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
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-2xl"></div>
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
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Layers className="w-4 h-4" />
              Services & Solutions IT
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Des Solutions <span className="text-gray-600">Complètes</span>{" "}
              <span className="block">pour Votre Réussite</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              De l'idée à la réalisation, nous accompagnons les entreprises algériennes 
              dans leur transformation numérique avec des solutions sur mesure.
            </p>
          </motion.div>

          {/* Services Interactive Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Services List */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Nos Expertises</h3>
              <div className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeService.id === service.id
                          ? "bg-white shadow-lg border-2 border-gray-200"
                          : "bg-white/50 hover:bg-white/80 border-2 border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">
                            {service.title.split(' ').slice(0, 2).join(' ')}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.subtitle}
                          </div>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                          activeService.id === service.id ? "text-gray-700" : "text-gray-400"
                        }`} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                {/* Service Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${activeService.color}`}>
                    <activeService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {activeService.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {activeService.longDesc}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        {activeService.pricing}
                      </div>
                      <div className="flex items-center gap-2 text-blue-600">
                        <Clock className="w-4 h-4" />
                        {activeService.duration}
                      </div>
                      <div className="flex items-center gap-2 text-purple-600">
                        <Award className="w-4 h-4" />
                        {activeService.delivery}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Fonctionnalités Incluses</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Technologies Utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Cas d'Usage Réussi</span>
                  </div>
                  <p className="text-gray-700">{activeService.caseStudy}</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r ${activeService.color} text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Demander un Devis
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    Consultation Gratuite
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Secteurs d'Activité</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Notre expertise couvre tous les secteurs clés de l'économie algérienne
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredIndustry(index)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        hoveredIndustry === index
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors">
                          {industry.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {industry.description}
                        </p>
                        <div className="text-xs text-gray-500 font-medium">
                          {industry.projects}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-2xl p-12 mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Notre Processus de Développement</h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Méthodologie éprouvée pour garantir le succès de votre projet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analyse & Audit",
                  description: "Étude approfondie de vos besoins et contraintes"
                },
                {
                  step: "02", 
                  title: "Conception & Design",
                  description: "Architecture technique et UX/UI sur mesure"
                },
                {
                  step: "03",
                  title: "Développement Agile",
                  description: "Sprints itératifs avec livraisons régulières"
                },
                {
                  step: "04",
                  title: "Déploiement & Support",
                  description: "Mise en production et accompagnement continu"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{process.step}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-gray-400 text-sm">{process.description}</p>
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
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6">
              Prêt à Transformer Votre Vision en Réalité ?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et découvrez comment nos solutions 
              peuvent propulser votre entreprise vers de nouveaux sommets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Démarrer Mon Projet
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gray-300 text-black font-medium px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <Headphones className="w-5 h-5" />
                Consultation Gratuite
              </motion.button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Devis gratuit 48h
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Support local 58 wilayas
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Garantie 12 mois
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Équipe certifiée
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}