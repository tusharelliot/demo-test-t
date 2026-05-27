import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import bjpLogo from '../assets/bjp-logo.webp';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.journey'), href: '#journey' },
    { name: t('nav.service'), href: '#service' },
    { name: t('nav.events'), href: '#events' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative size-11 overflow-hidden rounded-full border-2 border-white/80 shadow-md bg-white">
                <img
                  src={bjpLogo}
                  alt="BJP logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3
                className={`transition-colors ${
                  isScrolled ? 'text-[var(--saffron)]' : 'text-white'
                }`}
              >
                {t('hero.name')}
              </h3>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 transition-all duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-[var(--saffron)]'
                      : 'text-white hover:text-[var(--saffron-light)]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 ${
                  isScrolled
                    ? 'bg-[var(--saffron)] text-white hover:bg-[var(--saffron-dark)]'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
                style={{ borderRadius: 'var(--radius)' }}
              >
                <Languages size={18} />
                <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[var(--saffron)] hover:bg-[var(--accent)]"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
