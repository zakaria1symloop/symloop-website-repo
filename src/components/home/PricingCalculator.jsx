import { motion } from "framer-motion";
import { 
  Calculator, 
  Smartphone, 
  Globe, 
  Database, 
  Building, 
  ShoppingCart,
  Code2,
  Cloud,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Info,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  Award,
  DollarSign
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';

const projectTypes = {
  website: {
    id: 'website',
    name: 'Site Web',
    icon: Globe,
    basePrice: 60000,
    color: 'from-blue-500 to-blue-700',
    description: 'Site web responsive avec CMS',
    features: ['Design responsive', 'CMS intégré', 'SEO optimisé', 'Hébergement 1 an']
  },
  mobile: {
    id: 'mobile', 
    name: 'Application Mobile',
    icon: Smartphone,
    basePrice: 180000,
    color: 'from-green-500 to-green-700',
    description: 'App native iOS/Android',
    features: ['iOS & Android', 'Backend inclus', 'Publication stores', 'Maintenance 6 mois']
  },
  ecommerce: {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: ShoppingCart,
    basePrice: 120000,
    color: 'from-purple-500 to-purple-700',
    description: 'Boutique en ligne complète',
    features: ['Paiement CIB/Edahabia', 'Gestion produits', 'Multi-vendeurs', 'Analytics']
  },
  erp: {
    id: 'erp',
    name: 'ERP/CRM',
    icon: Building,
    basePrice: 500000,
    color: 'from-red-500 to-red-700', 
    description: 'Système gestion entreprise',
    features: ['Modules métiers', 'Formation équipe', 'Migration données', 'Support 12 mois']
  },
  custom: {
    id: 'custom',
    name: 'Développement Sur Mesure',
    icon: Code2,
    basePrice: 300000,
    color: 'from-orange-500 to-orange-700',
    description: 'Solution personnalisée',
    features: ['Architecture sur mesure', 'Technologies avancées', 'Scalabilité', 'Documentation']
  }
};

const complexityFactors = {
  simple: { name: 'Simple', multiplier: 1, description: 'Fonctionnalités de base' },
  medium: { name: 'Moyen', multiplier: 1.5, description: 'Fonctionnalités avancées' },
  complex: { name: 'Complexe', multiplier: 2.2, description: 'Très personnalisé' },
  enterprise: { name: 'Entreprise', multiplier: 3, description: 'Solution d\'entreprise' }
};

const teamSizes = {
  small: { name: '2-4 développeurs', multiplier: 1, duration: 'standard' },
  medium: { name: '5-8 développeurs', multiplier: 1.3, duration: '30% plus rapide' },
  large: { name: '9+ développeurs', multiplier: 1.6, duration: '50% plus rapide' }
};

const addons = {
  design: { 
    name: 'Design UI/UX Premium', 
    price: 80000, 
    icon: Star,
    description: 'Design professionnel sur mesure'
  },
  seo: { 
    name: 'SEO Avancé Algeria', 
    price: 45000, 
    icon: TrendingUp,
    description: 'Optimisation 58 wilayas + suivi'
  },
  security: { 
    name: 'Sécurité Renforcée', 
    price: 60000, 
    icon: Shield,
    description: 'Audit sécurité + certificats SSL'
  },
  training: { 
    name: 'Formation Équipe', 
    price: 30000, 
    icon: Users,
    description: 'Formation complète utilisateurs'
  },
  maintenance: { 
    name: 'Maintenance 24/7', 
    price: 25000, 
    icon: Headphones,
    description: 'Support technique permanent'
  },
  analytics: { 
    name: 'Analytics & Reporting', 
    price: 35000, 
    icon: TrendingUp,
    description: 'Tableaux de bord analytiques'
  }
};

const regions = {
  'alger': { name: 'Alger', adjustment: 1.1 },
  'oran': { name: 'Oran', adjustment: 1.05 },
  'constantine': { name: 'Constantine', adjustment: 1.0 },
  'setif': { name: 'Sétif', adjustment: 1.0 },
  'annaba': { name: 'Annaba', adjustment: 1.0 },
  'other': { name: 'Autres wilayas', adjustment: 0.95 }
};

export default function PricingCalculator() {
  const { t } = useTranslation('common');
  const [selectedType, setSelectedType] = useState(projectTypes.website);
  const [complexity, setComplexity] = useState('medium');
  const [teamSize, setTeamSize] = useState('medium');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [region, setRegion] = useState('setif');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  // Calculate total price
  const basePrice = selectedType.basePrice;
  const complexityMultiplier = complexityFactors[complexity].multiplier;
  const teamMultiplier = teamSizes[teamSize].multiplier;
  const regionMultiplier = regions[region].adjustment;
  
  const projectPrice = Math.round(basePrice * complexityMultiplier * teamMultiplier * regionMultiplier);
  const addonsPrice = selectedAddons.reduce((sum, addon) => sum + addons[addon].price, 0);
  const totalPrice = projectPrice + addonsPrice;

  // Animate price changes
  useEffect(() => {
    setAnimatePrice(true);
    const timer = setTimeout(() => setAnimatePrice(false), 500);
    return () => clearTimeout(timer);
  }, [selectedType, complexity, teamSize, selectedAddons, region]);

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('DZD', 'DA');
  };

  const estimatedDuration = () => {
    const baseDuration = {
      website: 4,
      mobile: 8,
      ecommerce: 6,
      erp: 16,
      custom: 12
    };
    const base = baseDuration[selectedType.id] || 8;
    const complexityAdjustment = complexity === 'simple' ? 0.7 : complexity === 'complex' ? 1.4 : complexity === 'enterprise' ? 2 : 1;
    const teamAdjustment = teamSize === 'small' ? 1 : teamSize === 'medium' ? 0.8 : 0.6;
    
    return Math.ceil(base * complexityAdjustment * teamAdjustment);
  };

  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Calculateur Prix Développement IT Algérie",
    "description": "Calculateur de prix pour développement logiciel, sites web, applications mobiles en Algérie avec tarifs transparents",
    "priceCurrency": "DZD",
    "price": totalPrice,
    "priceType": "https://schema.org/SalePrice",
    "validFrom": new Date().toISOString(),
    "seller": {
      "@type": "Organization",
      "name": "Symloop Technology Algérie",
      "url": "https://symloop.com"
    },
    "itemOffered": {
      "@type": "Service",
      "name": selectedType.name,
      "description": selectedType.description
    }
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl"></div>
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
              <Calculator className="w-4 h-4" />
              Calculateur de Prix
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Prix <span className="text-gray-600">Transparents</span>{" "}
              <span className="block">Adaptés à l'Algérie</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Obtenez instantanément une estimation précise pour votre projet. 
              Tarifs compétitifs adaptés au marché algérien avec devis détaillé.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Type Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Type de Projet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.values(projectTypes).map((type) => {
                    const Icon = type.icon;
                    return (
                      <motion.button
                        key={type.id}
                        onClick={() => setSelectedType(type)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-left p-6 rounded-xl transition-all duration-300 ${
                          selectedType.id === type.id
                            ? `bg-gradient-to-r ${type.color} text-white shadow-lg`
                            : "bg-white hover:shadow-md border-2 border-transparent hover:border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            selectedType.id === type.id 
                              ? "bg-white/20" 
                              : "bg-gray-100"
                          }`}>
                            <Icon className={`w-6 h-6 ${
                              selectedType.id === type.id ? "text-white" : "text-gray-700"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold mb-2">{type.name}</div>
                            <div className={`text-sm mb-3 ${
                              selectedType.id === type.id ? "text-white/90" : "text-gray-600"
                            }`}>
                              {type.description}
                            </div>
                            <div className={`text-xs ${
                              selectedType.id === type.id ? "text-white/80" : "text-gray-500"
                            }`}>
                              À partir de {formatPrice(type.basePrice)}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Configuration Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Complexity */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Complexité
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(complexityFactors).map(([key, factor]) => (
                      <motion.button
                        key={key}
                        onClick={() => setComplexity(key)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          complexity === key
                            ? "bg-black text-white"
                            : "bg-white hover:shadow-sm"
                        }`}
                      >
                        <div className="font-medium">{factor.name}</div>
                        <div className={`text-xs ${
                          complexity === key ? "text-gray-300" : "text-gray-500"
                        }`}>
                          {factor.description}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Team Size */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Équipe
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(teamSizes).map(([key, team]) => (
                      <motion.button
                        key={key}
                        onClick={() => setTeamSize(key)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          teamSize === key
                            ? "bg-black text-white"
                            : "bg-white hover:shadow-sm"
                        }`}
                      >
                        <div className="font-medium">{team.name}</div>
                        <div className={`text-xs ${
                          teamSize === key ? "text-gray-300" : "text-gray-500"
                        }`}>
                          Livraison {team.duration}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Region */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Région
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(regions).slice(0, 4).map(([key, regionData]) => (
                      <motion.button
                        key={key}
                        onClick={() => setRegion(key)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          region === key
                            ? "bg-black text-white"
                            : "bg-white hover:shadow-sm"
                        }`}
                      >
                        <div className="font-medium">{regionData.name}</div>
                      </motion.button>
                    ))}
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      {Object.entries(regions).map(([key, regionData]) => (
                        <option key={key} value={key}>{regionData.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Add-ons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Services Additionnels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(addons).map(([key, addon]) => {
                    const Icon = addon.icon;
                    const isSelected = selectedAddons.includes(key);
                    return (
                      <motion.button
                        key={key}
                        onClick={() => toggleAddon(key)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-left p-4 rounded-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-green-500 text-white shadow-lg"
                            : "bg-white hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg ${
                            isSelected ? "bg-white/20" : "bg-gray-100"
                          }`}>
                            <Icon className={`w-5 h-5 ${
                              isSelected ? "text-white" : "text-gray-700"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium mb-1">{addon.name}</div>
                            <div className={`text-sm mb-2 ${
                              isSelected ? "text-white/90" : "text-gray-600"
                            }`}>
                              {addon.description}
                            </div>
                            <div className={`text-sm font-bold ${
                              isSelected ? "text-white" : "text-green-600"
                            }`}>
                              +{formatPrice(addon.price)}
                            </div>
                          </div>
                          {isSelected && (
                            <CheckCircle className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black text-white rounded-2xl p-8 sticky top-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Estimation Projet</h3>
                  <p className="text-gray-400 text-sm">Prix transparent et détaillé</p>
                </div>

                {/* Current Selection Summary */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <selectedType.icon className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{selectedType.name}</div>
                      <div className="text-sm text-gray-400">{complexityFactors[complexity].name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{estimatedDuration()} semaines</div>
                      <div className="text-sm text-gray-400">{teamSizes[teamSize].name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{regions[region].name}</div>
                      <div className="text-sm text-gray-400">Région de livraison</div>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-700 pt-6 mb-6">
                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="flex items-center justify-between w-full mb-4 text-left"
                  >
                    <span className="font-medium">Détail du Prix</span>
                    <Info className="w-4 h-4" />
                  </button>
                  
                  {showBreakdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-3 mb-4"
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Prix de base</span>
                        <span>{formatPrice(basePrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Complexité (×{complexityMultiplier})</span>
                        <span>{formatPrice(basePrice * (complexityMultiplier - 1))}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Équipe (×{teamMultiplier})</span>
                        <span>{formatPrice(basePrice * (teamMultiplier - 1))}</span>
                      </div>
                      {selectedAddons.length > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Services additionnels</span>
                          <span>{formatPrice(addonsPrice)}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Total Price */}
                <div className="border-t border-gray-700 pt-6 mb-8">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Prix Total Estimé</div>
                    <motion.div
                      animate={animatePrice ? { scale: [1, 1.1, 1] } : {}}
                      className="text-4xl font-bold mb-2"
                    >
                      {formatPrice(totalPrice)}
                    </motion.div>
                    <div className="text-sm text-gray-400">
                      Devis détaillé gratuit sous 24h
                    </div>
                  </div>
                </div>

                {/* Included Features */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Inclus dans le Prix</h4>
                  <div className="space-y-2">
                    {selectedType.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Demander Devis Détaillé
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full border border-gray-600 text-white font-medium py-4 rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all duration-300"
                  >
                    Consultation Gratuite
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-gray-400">12+ ans</div>
                      <div className="text-gray-500">d'expérience</div>
                    </div>
                    <div>
                      <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-gray-400">Garantie</div>
                      <div className="text-gray-500">12 mois</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gray-50 rounded-2xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Pourquoi Nos Prix Sont Transparents</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Chez Symloop, nous croyons en la transparence totale. Pas de frais cachés, 
              pas de surprises. Vous savez exactement ce que vous payez et pourquoi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Prix Fixes Garantis</h4>
                <p className="text-gray-600 text-sm">Le prix estimé est respecté, garantie contractuelle</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Paiement Échelonné</h4>
                <p className="text-gray-600 text-sm">Paiement en 3 fois sans frais supplémentaires</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Devis Gratuit 48h</h4>
                <p className="text-gray-600 text-sm">Devis détaillé gratuit livré sous 48h maximum</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}