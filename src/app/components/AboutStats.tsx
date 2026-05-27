import { useEffect, useRef, useState } from 'react';
import { Users, TreePine, Award, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import journeyCover from '../assets/phoolchand-journey-cover.jpeg';
import studentsJourney from '../assets/phoolchand-students-journey.jpeg';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

function StatCard({ icon, value, label, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[var(--saffron)] group hover:-translate-y-2"
      style={{ borderRadius: 'var(--radius)' }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-gradient-to-br from-[var(--saffron)] to-[var(--saffron-light)] text-white rounded-full group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h2 className="text-[var(--saffron)] mb-2">
          {count.toLocaleString()}
          {suffix}
        </h2>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
}

export function AboutStats() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('about.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard
            icon={<TreePine size={32} />}
            value={500}
            suffix="+"
            label={t('about.trees')}
          />
          <StatCard
            icon={<Users size={32} />}
            value={500}
            suffix="+"
            label={t('about.students')}
          />
          <StatCard
            icon={<Award size={32} />}
            value={100}
            suffix="+"
            label={t('about.campaigns')}
          />
          <StatCard
            icon={<Calendar size={32} />}
            value={30}
            label={t('about.years')}
          />
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl" style={{ borderRadius: 'var(--radius)' }}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="grid gap-5 md:h-full">
              <div className="relative overflow-hidden shadow-lg" style={{ borderRadius: 'var(--radius)' }}>
                <img
                  src={journeyCover}
                  alt="Phoolchand Saini speaking at a community gathering"
                  className="h-80 w-full object-cover md:h-[620px]"
                  style={{ objectPosition: '42% center' }}
                />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-white/75" />
              </div>
              <div className="relative overflow-hidden shadow-lg" style={{ borderRadius: 'var(--radius)' }}>
                <img
                  src={studentsJourney}
                  alt="Phoolchand Saini addressing students"
                  className="h-80 w-full object-cover md:h-[620px]"
                  style={{ objectPosition: '36% center' }}
                />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-white/75" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-gray-900 mb-6">{t('about.journeyTitle')}</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('about.para1')}</p>
                <p>{t('about.para2')}</p>
                <p>{t('about.para3')}</p>
                <p>{t('about.para4')}</p>
                <p>{t('about.para5')}</p>
                <p>{t('about.para6')}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[var(--accent)] text-[var(--saffron)] border border-[var(--saffron)]" style={{ borderRadius: 'var(--radius)' }}>
                  {t('about.tag1')}
                </span>
                <span className="px-4 py-2 bg-[var(--accent)] text-[var(--saffron)] border border-[var(--saffron)]" style={{ borderRadius: 'var(--radius)' }}>
                  {t('about.tag2')}
                </span>
                <span className="px-4 py-2 bg-[var(--accent)] text-[var(--saffron)] border border-[var(--saffron)]" style={{ borderRadius: 'var(--radius)' }}>
                  {t('about.tag3')}
                </span>
                <span className="px-4 py-2 bg-[var(--accent)] text-[var(--saffron)] border border-[var(--saffron)]" style={{ borderRadius: 'var(--radius)' }}>
                  {t('about.tag4')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
