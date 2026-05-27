import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 text-[var(--saffron-light)]">
              {t('hero.name')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[var(--saffron-light)] transition-colors"
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[var(--saffron-light)] transition-colors"
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  className="text-gray-400 hover:text-[var(--saffron-light)] transition-colors"
                >
                  {t('nav.journey')}
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-gray-400 hover:text-[var(--saffron-light)] transition-colors"
                >
                  {t('nav.service')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[var(--saffron-light)] transition-colors"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">{t('contact.info')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('contact.phone')}: +91 98765 43210</li>
              <li>{t('contact.email')}: phoolchandsaini@example.com</li>
              <li>Gujarat, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-4 text-lg italic">{t('footer.quote')}</p>
            <p className="flex items-center justify-center gap-2">
              © {currentYear} {t('hero.name')}. Made with{' '}
              <Heart size={16} className="text-[var(--saffron)]" />{' '}
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
