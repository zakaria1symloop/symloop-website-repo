"use client";
import { useState, useEffect, useRef } from "react";
import { Code2, Server, Smartphone, Globe, Package2, Menu, X, ChevronDown, MapPin, Phone, Mail, BookOpen } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';

// --- FreeConsultationButton Component ---
import FreeConsultationButton from "../layout/components/FreeConsultationButton";

// Wrapper component for the consultation button with impressive styling
const ConsultationButtonWrapper = ({ scrolled }) => {
  return (
    <div className={scrolled ? 'scrolled-btn' : 'initial-btn'}>
      <style jsx>{`
        /* Initial state - Black header with white button */
        .initial-btn :global(button) {
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
          font-weight: 600;
          font-size: 0.875rem;
          padding: 0.75rem 1.5rem;
          letter-spacing: 0.025em;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .initial-btn :global(button:hover) {
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .initial-btn :global(button::before) {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .initial-btn :global(button:hover::before) {
          left: 100%;
        }
        
        /* Scrolled state - Smaller white button */
        .scrolled-btn :global(button) {
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 3px 10px rgba(255, 255, 255, 0.1);
          font-weight: 600;
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          letter-spacing: 0.025em;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scrolled-btn :global(button:hover) {
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .scrolled-btn :global(button::before) {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .scrolled-btn :global(button:hover::before) {
          left: 100%;
        }
        
        /* Active state animation */
        .initial-btn :global(button:active),
        .scrolled-btn :global(button:active) {
          transform: scale(0.98);
          transition-duration: 0.1s;
        }
        
        /* Add professional pulse animation on load */
        @keyframes subtlePulse {
          0% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          }
          50% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          }
          100% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          }
        }
        
        .scrolled-btn :global(button) {
          animation: subtlePulse 3s ease-in-out infinite;
        }
        
        .initial-btn :global(button) {
          animation: subtlePulse 3s ease-in-out infinite;
        }
      `}</style>
      <FreeConsultationButton />
    </div>
  );
};

// --- PRODUCT BOX ---
const ProductBox = ({ isMobile = false, scrolled }) => {
  const { t } = useTranslation('common');
  
  const products = [
    { 
      title: t('products.asa.title'), 
      desc: t('products.asa.description'), 
      icon: <Package2 className="w-5 h-5" />,
      href: "/products/asa",
      badge: t('products.asa.badge')
    },
    { 
      title: t('products.edusmart.title'), 
      desc: t('products.edusmart.description'), 
      icon: <Package2 className="w-5 h-5" />,
      href: "/products/edusmart",
      badge: t('products.edusmart.badge')
    },
  ];

  return (
  <div className={`${isMobile ? 'relative w-full mt-4 border-t pt-4' : 'absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[450px] shadow-2xl z-50'} bg-gray-900 border border-gray-700 rounded-2xl p-6 backdrop-blur-md transition-all duration-300`}>
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <h3 className="text-sm font-bold text-white">{t('navigation.ourProducts')}</h3>
    </div>
    <div className="grid grid-cols-1 gap-4">
      {products.map((item, i) => (
        <Link 
          key={i} 
          href={item.href}
          className="group block border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gray-800 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-gray-300 transition-colors">
                {item.title}
              </h4>
            </div>
            {item.badge && (
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                item.badge === t('products.asa.badge') 
                  ? 'bg-green-900/50 text-green-400 border border-green-800' 
                  : 'bg-orange-900/50 text-orange-400 border border-orange-800'
              }`}>
                {item.badge}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {item.desc}
          </p>
        </Link>
      ))}
    </div>
  </div>
  );
};

// --- NAV ITEM ---
const NavItem = ({ label, link, children, isMobile = false, scrolled }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (link) {
    return (
      <Link 
        href={link} 
        className={`${isMobile ? 'block py-3 px-4 border-b border-gray-100 text-base' : `text-sm transition-all duration-500 ${scrolled ? 'text-xs' : 'text-sm'}`} font-medium text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`${isMobile ? 'flex items-center justify-between w-full py-3 px-4 text-base border-b border-gray-100' : `flex items-center gap-1 transition-all duration-500 ${scrolled ? 'text-xs' : 'text-sm'}`} font-medium text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10`}
      >
        {label}
        <ChevronDown className={`transition-all duration-500 ${scrolled ? 'w-3 h-3' : 'w-4 h-4'} ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && children}
    </div>
  );
};

// --- MOBILE MENU ---
const MobileMenu = ({ isOpen, onClose, scrolled }) => {
  const { t } = useTranslation('common');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">{t('menu')}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <NavItem label={t('navigation.home')} link="/" isMobile scrolled={true} />
            <NavItem label={t('navigation.services')} link="/services" isMobile scrolled={true} />
            <NavItem label={t('navigation.products')} isMobile scrolled={true}>
              <ProductBox isMobile scrolled={true} />
            </NavItem>
            <NavItem label={t('navigation.blog')} link="/blog" isMobile scrolled={true} />
            <NavItem label={t('navigation.learning')} link="/learning" isMobile scrolled={true} />
            <NavItem label={t('navigation.investors')} link="/investisseurs" isMobile scrolled={true} />
            <NavItem label={t('navigation.recruitment')} link="/recrutement" isMobile scrolled={true} />
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-100">
            <FreeConsultationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HEADER ---
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-40">
      {/* Top Info Bar - Always black */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>{t('contact.location')}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>{t('contact.phone')}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-1 sm:mt-0">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>{t('contact.email')}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <span className="hidden sm:inline text-gray-300">{t('hero.slogan')}</span>
          </div>
        </div>
      </div>

      {/* Main Header - Always black, smaller when scrolled */}
      <div className={`backdrop-blur-md border-b transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 shadow-xl border-gray-700' 
          : 'bg-black/95 shadow-sm border-gray-800'
      }`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}>
          
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/assets/logo-symloop.png" 
                  alt="Symloop" 
                  className={`transition-all duration-500 ${
                    scrolled ? 'w-32 h-8' : 'w-40 h-10'
                  } object-contain brightness-0 invert`}
                />
                <div className={`absolute -top-1 -right-1 bg-green-400 rounded-full border-2 border-white animate-pulse transition-all duration-500 ${
                  scrolled ? 'w-2 h-2' : 'w-3 h-3'
                }`}></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <NavItem label={t('navigation.home')} link="/" scrolled={scrolled} />
            <NavItem label={t('navigation.services')} link="/services" scrolled={scrolled} />
            <NavItem label={t('navigation.products')} scrolled={scrolled}>
              <ProductBox scrolled={scrolled} />
            </NavItem>
            <NavItem label={t('navigation.blog')} link="/blog" scrolled={scrolled} />
            <NavItem label={t('navigation.learning')} link="/learning" scrolled={scrolled} />
            <NavItem label={t('navigation.investors')} link="/investisseurs" scrolled={scrolled} />
            <NavItem label={t('navigation.recruitment')} link="/recrutement" scrolled={scrolled} />
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher scrolled={scrolled} />
            
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <ConsultationButtonWrapper scrolled={scrolled} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden rounded-xl border border-gray-700 hover:border-gray-600 hover:bg-white/10 transition-all duration-500 group ${
                scrolled ? 'p-2' : 'p-2.5'
              }`}
            >
              <Menu className={`text-white group-hover:opacity-80 transition-all duration-500 ${
                scrolled ? 'w-4 h-4' : 'w-5 h-5'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        scrolled={scrolled}
      />
    </header>
  );
}