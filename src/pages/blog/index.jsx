"use client";
import { useState } from "react";
import { Calendar, Clock, User, Search, ChevronRight, BookOpen, TrendingUp, Code, Smartphone, Globe, Server, Star, Eye, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Static blog posts data with individual page links
const blogPosts = [
  {
    id: 1,
    title: "Combien Coûte Vraiment une App Mobile en Algérie ?",
    link: "/blog/app-cost-in-algeria",
    excerpt: "Prix réels, transparents et détaillés pour créer votre application mobile en Algérie. Grille tarifaire complète 2025, facteurs de coût, et conseils pour optimiser votre budget.",
    author: "Ahmed Benaissa",
    date: "2025-01-20",
    readTime: "12 min",
    category: "Pricing",
    tags: ["Prix", "Budget", "Coût", "Algérie", "Devis"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
    featured: true,
    views: 3421
  },
  {
    id: 2,
    title: "Pourquoi Créer Votre App Mobile ? Les 5 Bénéfices Majeurs",
    link: "/blog/pourquoi-creer-app-mobile",
    excerpt: "Découvrez les avantages transformateurs d'une application mobile pour votre business. Visibilité 24/7, engagement client, nouveaux revenus - Symloop vous explique tout.",
    author: "Ahmed Benaissa",
    date: "2025-01-15",
    readTime: "10 min",
    category: "Business",
    tags: ["Bénéfices", "Business", "Mobile", "ROI"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    featured: true,
    views: 2156
  },
  {
    id: 3,
    title: "Comment Créer une Application Mobile en Algérie : Guide Complet 2025",
    link: "/blog/comment-creer-application-mobile",
    excerpt: "Découvrez les étapes essentielles pour développer votre application mobile en Algérie. De l'idée au déploiement, notre guide complet vous accompagne dans votre projet digital.",
    author: "Ahmed Benaissa",
    date: "2025-01-10",
    readTime: "8 min",
    category: "Guide",
    tags: ["Flutter", "React Native", "Algérie", "Mobile"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    views: 1245
  }
];

// Blog categories function
const getCategories = (t) => [
  { name: "Tous", translatedName: t('blog.categories.all'), count: blogPosts.length, icon: BookOpen },
  { name: "Mobile", translatedName: t('blog.categories.mobile'), count: blogPosts.filter(p => p.category === "Mobile").length, icon: Smartphone },
  { name: "Développement", translatedName: t('blog.categories.development'), count: blogPosts.filter(p => p.category === "Développement").length, icon: Code },
  { name: "SEO", translatedName: t('blog.categories.seo'), count: blogPosts.filter(p => p.category === "SEO").length, icon: TrendingUp },
  { name: "Intelligence Artificielle", translatedName: t('blog.categories.ai'), count: blogPosts.filter(p => p.category === "Intelligence Artificielle").length, icon: Server },
  { name: "Sécurité", translatedName: t('blog.categories.security'), count: blogPosts.filter(p => p.category === "Sécurité").length, icon: Globe },
  { name: "Cloud", translatedName: t('blog.categories.cloud'), count: blogPosts.filter(p => p.category === "Cloud").length, icon: Server }
];

export default function BlogIndexPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = getCategories(t);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Premium Black Design */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-gray-800/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">{t('blog.expertiseBadge')}</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block">{t('blog.title')}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{blogPosts.length}</div>
                <div className="text-gray-400 text-sm">{t('blog.stats.articles')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-gray-400 text-sm">{t('blog.stats.experts')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15K+</div>
                <div className="text-gray-400 text-sm">{t('blog.stats.readers')}</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                <span className="relative z-10">{t('blog.cta.explore')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-white/40 hover:bg-white/5">
                {t('blog.cta.newsletter')}
                <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter - Premium Design */}
      <section className="bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.translatedName}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.name
                      ? 'bg-black/10 text-black'
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts - Premium Cards */}
      {featuredPosts.length > 0 && selectedCategory === "Tous" && searchTerm === "" && (
        <section className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-white to-gray-400"></div>
              <h2 className="text-4xl font-bold text-white">{t('blog.featured.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={post.link}
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none"></div>
                    
                    {post.image && (
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-semibold">
                            <Star className="w-3 h-3 fill-current" />
                            {t('blog.featured.badge')}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-3 py-1 rounded-full text-sm font-medium border border-gray-600">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-300" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{post.author}</div>
                            <div className="text-xs text-gray-400">{t('blog.meta.author')}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts - Premium Grid */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-white to-gray-400"></div>
              <h2 className="text-4xl font-bold text-white">
                {selectedCategory === "Tous" ? t('blog.allArticles') : t('blog.categoryArticles', { category: categories.find(c => c.name === selectedCategory)?.translatedName })}
              </h2>
            </div>
            <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full text-sm">
              {filteredPosts.length === 1 ? t('blog.articlesFound', { count: filteredPosts.length }) : t('blog.articlesFoundPlural', { count: filteredPosts.length })}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{t('blog.noArticles.title')}</h3>
              <p className="text-gray-400">{t('blog.noArticles.subtitle')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={post.link}
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"> hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"{">"}
                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-black/10 pointer-events-none"></div>
                    
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-700">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        {post.featured && (
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-gray-300 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-gray-300" />
                          </div>
                          <span className="text-xs text-gray-400">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('fr-FR')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs border border-gray-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter - Premium */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {t('blog.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
              />
              <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                {t('blog.newsletter.subscribe')}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {t('blog.newsletter.disclaimer')}
            </p>
          </div>
        </div>
      </section>
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