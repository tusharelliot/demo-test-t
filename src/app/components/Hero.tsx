import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroPoster from '../assets/phoolchand-main-new.jpeg';

export function Hero() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(255, 166, 77, 0.9) 50%, rgba(19, 136, 8, 0.85) 100%)`,
        }}
      />

      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
            <img
              src={heroPoster}
              alt="Phoolchand Saini"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-8 border-white shadow-2xl"
              style={{ objectPosition: '50% 18%' }}
            />
          </div>
        </div>

        <h1 className="max-w-full text-4xl sm:text-5xl md:text-7xl text-white mb-4 tracking-tight break-words">
          {t('hero.name')}
        </h1>

        <div className="w-full max-w-sm sm:max-w-4xl mx-auto text-base sm:text-xl md:text-2xl text-white/95 mb-6 space-y-1 px-2">
          <p>{t('hero.title')}</p>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/90 w-full max-w-sm sm:max-w-3xl mx-auto mb-10 leading-relaxed px-2 sm:px-4">
          {t('hero.tagline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#contact')}
            className="group px-8 py-4 bg-white text-[var(--saffron)] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <Phone size={20} />
            {t('hero.connect')}
          </button>

          <button
            onClick={() => scrollToSection('#journey')}
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--saffron)] transition-all duration-300"
            style={{ borderRadius: 'var(--radius)' }}
          >
            {t('hero.viewJourney')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
