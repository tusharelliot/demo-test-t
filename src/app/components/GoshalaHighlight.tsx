import { HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function GoshalaHighlight() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] p-8 md:p-12 shadow-2xl"
          style={{ borderRadius: 'var(--radius)' }}
        >
          <div className="absolute inset-0 opacity-10" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="inline-flex size-18 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <HeartHandshake size={36} className="text-white" />
            </div>

            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-3">
                {t('goshalaHighlight.eyebrow')}
              </p>
              <h3 className="text-3xl md:text-4xl text-white mb-4">
                {t('goshalaHighlight.title')}
              </h3>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                {t('goshalaHighlight.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
