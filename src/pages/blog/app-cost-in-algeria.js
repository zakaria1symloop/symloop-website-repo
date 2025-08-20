"use client";
import { Calendar, Clock, User, Tag, Share2, ChevronLeft, Eye, Heart, Bookmark, ArrowRight, Smartphone, Code, Zap, Target, DollarSign, Award, CheckCircle, Star, TrendingUp, Rocket, Shield, Users, Calculator, AlertTriangle, FileText, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function AppCostAlgeriaBlog() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Back Navigation */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1),transparent)]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Achievement Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-green-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-3">
              <Calculator className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">Guide Prix Transparent</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Meta Info with Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium">Expert Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              20 janvier 2025
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12 min de lecture
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              3,421 vues
            </div>
          </div>
          
          {/* Enhanced Title */}
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block mb-2">Combien Coûte</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
                Vraiment une App 🇩🇿
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              💰 <span className="text-white font-bold">Prix réels, transparents et détaillés</span> 
              pour créer votre application mobile en Algérie. <span className="text-yellow-400 font-bold">Aucun frais caché</span> - 
              Symloop vous dit tout !
            </p>

            {/* Price Range Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">App Simple</h3>
                <div className="text-2xl font-black text-green-400">180K - 700K DA</div>
                <p className="text-gray-400 text-sm mt-2">Fonctionnalités de base</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">App Business</h3>
                <div className="text-2xl font-black text-blue-400">700K - 2M DA</div>
                <p className="text-gray-400 text-sm mt-2">Fonctionnalités avancées</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <Rocket className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">App Enterprise</h3>
                <div className="text-2xl font-black text-purple-400">2M - 8M DA</div>
                <p className="text-gray-400 text-sm mt-2">Solutions sur-mesure</p>
              </div>
            </div>
          </div>

          {/* Author Section Enhanced */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-xl">Ahmed Benaissa</p>
                <p className="text-yellow-400 font-medium">Expert Costing Symloop • 8 ans d'expérience</p>
              </div>
            </div>
            
            {/* Enhanced Social Actions */}
            <div className="flex items-center gap-3">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-3 rounded-full transition-all transform hover:scale-105">
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">156</span>
              </button>
              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-full transition-all transform hover:scale-105">
                <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-bold">67</span>
              </button>
              <button className="group bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 p-3 rounded-full transition-all transform hover:scale-105">
                <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image with Overlay */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden border border-gray-700">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
              alt="Coût réel développement application mobile Algérie"
              className="w-full h-96 lg:h-[32rem] object-cover"
            />
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">💡 Ce que vous découvrirez</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Prix détaillés par catégorie d'app</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Facteurs qui influencent les coûts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Coûts cachés à éviter absolument</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Comment optimiser votre budget</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-yellow/5 pointer-events-none rounded-3xl"></div>
              
              <div className="relative prose prose-xl prose-invert max-w-none">
                {/* Attention-Grabbing Intro */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8 mb-12">
                  <h2 className="text-3xl font-black text-white mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-yellow-400" />
                    STOP AUX DEVIS FANTAISISTES !
                  </h2>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    💸 Trop d'entreprises algériennes se font <strong className="text-yellow-300">arnaquer sur les prix</strong> 
                    ou tombent dans le piège des <strong className="text-red-300">coûts cachés</strong>. 
                    Chez Symloop, nous pratiquons la <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent font-bold">transparence totale</span>. 
                    Voici la vérité sur les prix !
                  </p>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <Calculator className="w-8 h-8 text-green-400" />
                  Grille Tarifaire Complète 2025
                </h2>

                {/* Detailed Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {/* App Simple */}
                  <div className="bg-gradient-to-br from-green-500/15 to-green-600/5 border border-green-500/30 rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-300 mb-2">Application Simple</h3>
                      <div className="text-4xl font-black text-white mb-2">180K - 700K DA</div>
                      <p className="text-green-400 text-sm font-medium">Délai : 6-10 semaines</p>
                    </div>
                    
                    <h4 className="font-bold text-white mb-3">✅ Inclus :</h4>
                    <ul className="text-gray-300 space-y-2 text-sm mb-6">
                      <li>• Design professionnel (5-8 écrans)</li>
                      <li>• Authentification utilisateur</li>
                      <li>• Base de données simple</li>
                      <li>• Tests & débogage</li>
                      <li>• Publication stores</li>
                      <li>• Documentation technique</li>
                      <li>• Support 3 mois</li>
                    </ul>
                    
                    <h4 className="font-bold text-white mb-3">🎯 Parfait pour :</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Portfolio/Catalogue produits</li>
                      <li>• App informative</li>
                      <li>• MVP (Minimum Viable Product)</li>
                      <li>• Première expérience mobile</li>
                    </ul>
                  </div>

                  {/* App Business */}
                  <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/30 rounded-2xl p-8 relative">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        PLUS POPULAIRE
                      </span>
                    </div>
                    
                    <div className="text-center mb-6 mt-4">
                      <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-blue-300 mb-2">Application Business</h3>
                      <div className="text-4xl font-black text-white mb-2">700K - 2M DA</div>
                      <p className="text-blue-400 text-sm font-medium">Délai : 10-16 semaines</p>
                    </div>
                    
                    <h4 className="font-bold text-white mb-3">✅ Inclus :</h4>
                    <ul className="text-gray-300 space-y-2 text-sm mb-6">
                      <li>• Design sur-mesure (10-15 écrans)</li>
                      <li>• Paiements intégrés (CIB/Edahabia)</li>
                      <li>• Notifications push</li>
                      <li>• Panel d'administration</li>
                      <li>• API personnalisées</li>
                      <li>• Analytics intégrées</li>
                      <li>• Support 6 mois</li>
                    </ul>
                    
                    <h4 className="font-bold text-white mb-3">🎯 Parfait pour :</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• E-commerce mobile</li>
                      <li>• Services booking/réservation</li>
                      <li>• Apps avec paiements</li>
                      <li>• Business établis</li>
                    </ul>
                  </div>

                  {/* App Enterprise */}
                  <div className="bg-gradient-to-br from-purple-500/15 to-purple-600/5 border border-purple-500/30 rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-purple-300 mb-2">Application Enterprise</h3>
                      <div className="text-4xl font-black text-white mb-2">2M - 8M DA</div>
                      <p className="text-purple-400 text-sm font-medium">Délai : 16-30 semaines</p>
                    </div>
                    
                    <h4 className="font-bold text-white mb-3">✅ Inclus :</h4>
                    <ul className="text-gray-300 space-y-2 text-sm mb-6">
                      <li>• Architecture complexe (20+ écrans)</li>
                      <li>• IA & Machine Learning</li>
                      <li>• Géolocalisation avancée</li>
                      <li>• Intégrations multiples (ERP/CRM)</li>
                      <li>• Sécurité renforcée</li>
                      <li>• Performance optimisée</li>
                      <li>• Support 12 mois</li>
                    </ul>
                    
                    <h4 className="font-bold text-white mb-3">🎯 Parfait pour :</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Solutions métier complexes</li>
                      <li>• Apps avec IA</li>
                      <li>• Grandes entreprises</li>
                      <li>• Projets innovants</li>
                    </ul>
                  </div>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-400" />
                  Facteurs qui Influencent le Prix
                </h2>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">🎛️ Variables Principales du Coût</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-400" />
                        Complexité Fonctionnelle
                      </h4>
                      <div className="space-y-3 text-gray-300 text-sm">
                        <div className="flex justify-between items-center">
                          <span>App statique (infos only)</span>
                          <span className="text-green-400 font-bold">+0%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Login/Register simple</span>
                          <span className="text-yellow-400 font-bold">+15%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Paiements intégrés</span>
                          <span className="text-orange-400 font-bold">+30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Géolocalisation/Maps</span>
                          <span className="text-red-400 font-bold">+25%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>IA/Machine Learning</span>
                          <span className="text-purple-400 font-bold">+60%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-blue-400" />
                        Design & Plateforme
                      </h4>
                      <div className="space-y-3 text-gray-300 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Design template</span>
                          <span className="text-green-400 font-bold">Base</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Design personnalisé</span>
                          <span className="text-yellow-400 font-bold">+25%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Animations avancées</span>
                          <span className="text-orange-400 font-bold">+20%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>iOS + Android</span>
                          <span className="text-blue-400 font-bold">Standard</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Version Web en plus</span>
                          <span className="text-purple-400 font-bold">+40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hidden Costs Warning */}
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 mb-12">
                  <h2 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    ⚠️ ATTENTION : Coûts Cachés Fréquents
                  </h2>
                  <p className="text-lg text-gray-200 mb-6">
                    Beaucoup d'agences oublient "volontairement" de mentionner ces coûts. 
                    <strong className="text-red-300"> Symloop vous prévient à l'avance</strong> :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-white mb-3">💸 Frais "Oubliés" Classiques</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• <strong>Publication stores :</strong> 15,000 - 30,000 DA</li>
                        <li>• <strong>Certificats SSL :</strong> 8,000 - 20,000 DA/an</li>
                        <li>• <strong>Serveurs/Hosting :</strong> 5,000 - 50,000 DA/mois</li>
                        <li>• <strong>Maintenance :</strong> 10-20% du coût initial/an</li>
                        <li>• <strong>Mises à jour OS :</strong> 20,000 - 100,000 DA</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">🔍 Questions à Poser Absolument</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• "Le prix inclut-il la publication ?"</li>
                        <li>• "Combien coûte l'hébergement ?"</li>
                        <li>• "Qui paie les frais Apple/Google ?"</li>
                        <li>• "Maintenance incluse combien de temps ?"</li>
                        <li>• "Prix des modifications post-lancement ?"</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <p className="text-green-200 font-medium">
                      ✅ <strong>Promesse Symloop :</strong> Tous nos devis incluent TOUS les frais. 
                      Zéro surprise, zéro frais caché, zéro mauvaise surprise !
                    </p>
                  </div>
                </div>

                {/* Cost Optimization Tips */}
                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  Comment Optimiser Votre Budget
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      Stratégies d'Économie
                    </h3>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl">•</span>
                        <div>
                          <strong className="text-white">Approche MVP</strong>
                          <p className="text-sm text-gray-400">Commencez simple, ajoutez des fonctionnalités progressivement</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl">•</span>
                        <div>
                          <strong className="text-white">Technologies Hybrides</strong>
                          <p className="text-sm text-gray-400">Flutter/React Native réduisent les coûts vs développement natif</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl">•</span>
                        <div>
                          <strong className="text-white">Design Modulaire</strong>
                          <p className="text-sm text-gray-400">Templates adaptés plutôt que design 100% custom</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                      Erreurs Coûteuses à Éviter
                    </h3>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 text-xl">•</span>
                        <div>
                          <strong className="text-white">Changements en cours de projet</strong>
                          <p className="text-sm text-gray-400">Peut augmenter les coûts de 30-50%</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 text-xl">•</span>
                        <div>
                          <strong className="text-white">Choix technologique inadapté</strong>
                          <p className="text-sm text-gray-400">Certaines stacks coûtent plus cher à maintenir</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 text-xl">•</span>
                        <div>
                          <strong className="text-white">Négliger la maintenance</strong>
                          <p className="text-sm text-gray-400">Peut rendre l'app obsolète rapidement</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 text-center mb-12">
                  <h2 className="text-3xl font-black text-white mb-6">
                    Prêt à Lancer Votre Projet ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Symloop vous accompagne avec <strong className="text-white">transparence</strong> et <strong className="text-white">expertise</strong> pour créer l'application parfaite <strong className="text-green-300">sans dépasser votre budget</strong>.
                  </p>
                 <div className="flex flex-wrap justify-center gap-4">
  <Link href="/services">
    <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105">
      Obtenir un Devis Gratuit
    </button>
  </Link>
  <Link href="/services">
    <button className="bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all">
      Consulter un Expert
    </button>
  </Link>
</div>
                </div>

                {/* Author Signature */}
                <div className="flex items-center gap-6 border-t border-gray-700 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Ahmed Benaissa</p>
                    <p className="text-yellow-400">Expert Costing Symloop</p>
                    <p className="text-gray-400 text-sm mt-2">
                      "Notre mission : vous fournir des informations transparentes pour prendre des décisions éclairées."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-black py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-400" />
            Articles Similaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Meilleures technologies pour développement mobile Algérie"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  15 décembre 2024
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quelle Technologie Choisir pour Votre App en Algérie ?</h3>
                <p className="text-gray-400 mb-4">Comparatif complet des frameworks et technologies pour développement mobile en Algérie.</p>
                <Link href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                alt="Monétisation applications Algérie"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  5 novembre 2024
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Comment Monétiser Son Application en Algérie ?</h3>
                <p className="text-gray-400 mb-4">Toutes les méthodes pour générer des revenus avec votre application mobile en Algérie.</p>
                <Link href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Processus développement application Algérie"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  20 octobre 2024
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Pourquoi Créer Votre App Mobile ? Les 5 Bénéfices Majeurs</h3>
                <p className="text-gray-400 mb-4">Découvrez les avantages transformateurs d'une application mobile pour votre business. Visibilité 24/7, engagement client, nouveaux revenus</p>
                <Link href="blog/pourquoi-creer-app-mobile" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}