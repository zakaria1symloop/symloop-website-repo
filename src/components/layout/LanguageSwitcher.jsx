"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

export default function LanguageSwitcher({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);
  
  const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    // Prevent switching to same language
    if (langCode === router.locale) {
      setIsOpen(false);
      return;
    }
    
    const { pathname, asPath, query } = router;
    
    // Close dropdown immediately
    setIsOpen(false);
    
    // Update direction immediately for smooth transition
    const newIsRTL = langCode === 'ar';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', newIsRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', langCode);
    }
    
    // Change language without reload
    router.push({ pathname, query }, asPath, { 
      locale: langCode,
      scroll: false 
    });
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
          scrolled 
            ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700' 
            : 'border-gray-700 hover:border-gray-600 hover:bg-white/10 text-white'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-48 rounded-xl border shadow-lg z-50 ${
          scrolled 
            ? 'bg-white border-gray-200' 
            : 'bg-gray-900 border-gray-700'
        }`}>
          <div className="p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  router.locale === lang.code
                    ? (scrolled ? 'bg-blue-50 text-blue-600' : 'bg-gray-800 text-white')
                    : (scrolled ? 'hover:bg-gray-50 text-gray-700' : 'hover:bg-gray-800 text-gray-300')
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {router.locale === lang.code && (
                  <div className={`ml-auto w-2 h-2 rounded-full ${
                    scrolled ? 'bg-blue-500' : 'bg-white'
                  }`}></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}