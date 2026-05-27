import { Lightbulb, Target, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Vision() {
  const { t } = useLanguage();
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(255, 166, 77, 0.9) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            {t('vision.heading')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Lightbulb size={40} className="text-white" />
            </div>
            <h3 className="text-white mb-3">{t('vision.education.title')}</h3>
            <p className="text-white/90 leading-relaxed">
              {t('vision.education.desc')}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Target size={40} className="text-white" />
            </div>
            <h3 className="text-white mb-3">{t('vision.sustainable.title')}</h3>
            <p className="text-white/90 leading-relaxed">
              {t('vision.sustainable.desc')}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Heart size={40} className="text-white" />
            </div>
            <h3 className="text-white mb-3">{t('vision.harmony.title')}</h3>
            <p className="text-white/90 leading-relaxed">
              {t('vision.harmony.desc')}
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 md:p-12" style={{ borderRadius: 'var(--radius)' }}>
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl text-white mb-6 italic leading-relaxed">
              {t('vision.quote')}
            </p>
            <footer className="text-white/90 text-xl">
              {t('vision.author')}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
