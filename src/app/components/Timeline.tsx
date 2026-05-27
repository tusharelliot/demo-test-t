import { Baby, BookOpen, GraduationCap, Trophy, Briefcase, HandHeart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'education' | 'service' | 'political';
}

export function Timeline() {
  const { t } = useLanguage();

  const events: TimelineEvent[] = [
  {
    year: '1956',
    title: t('timeline.1956.title'),
    description: t('timeline.1956.desc'),
    icon: <Baby size={24} />,
    category: 'education',
  },
  {
    year: '1980',
    title: t('timeline.1980.title'),
    description: t('timeline.1980.desc'),
    icon: <BookOpen size={24} />,
    category: 'education',
  },
  {
    year: 'Career',
    title: t('timeline.career.title'),
    description: t('timeline.career.desc'),
    icon: <GraduationCap size={24} />,
    category: 'education',
  },
  {
    year: 'Milestone',
    title: t('timeline.merit.title'),
    description: t('timeline.merit.desc'),
    icon: <Trophy size={24} />,
    category: 'service',
  },
  {
    year: '2016',
    title: t('timeline.2016.title'),
    description: t('timeline.2016.desc'),
    icon: <Briefcase size={24} />,
    category: 'education',
  },
  {
    year: 'After 2016',
    title: t('timeline.after2016.title'),
    description: t('timeline.after2016.desc'),
    icon: <HandHeart size={24} />,
    category: 'service',
  },
  {
    year: 'Present',
    title: t('timeline.present.title'),
    description: t('timeline.present.desc'),
    icon: <Sparkles size={24} />,
    category: 'political',
  },
];
  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('timeline.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--saffron)] via-[var(--saffron-light)] to-[var(--green-india)]" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className={`inline-block bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 bg-gradient-to-br from-[var(--saffron)] to-[var(--saffron-light)] text-white rounded-lg ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        {event.icon}
                      </div>
                      <span className="text-[var(--saffron)] text-lg px-3 py-1 bg-[var(--accent)]" style={{ borderRadius: 'var(--radius)' }}>
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -ml-4 bg-white border-4 border-[var(--saffron)] rounded-full z-10 shadow-lg" />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
