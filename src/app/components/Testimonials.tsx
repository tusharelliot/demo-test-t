import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

function TestimonialCard({ quote, name, role }: TestimonialProps) {
  return (
    <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative" style={{ borderRadius: 'var(--radius)' }}>
      <div className="absolute -top-4 left-8 p-3 bg-gradient-to-br from-[var(--saffron)] to-[var(--saffron-light)] text-white rounded-lg shadow-lg">
        <Quote size={24} />
      </div>
      <div className="mt-6">
        <p className="text-gray-700 leading-relaxed mb-6 italic">"{quote}"</p>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-900">{name}</p>
          <p className="text-[var(--saffron)]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonials.1.quote'),
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
    },
    {
      quote: t('testimonials.2.quote'),
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
    },
    {
      quote: t('testimonials.3.quote'),
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
    },
    {
      quote: t('testimonials.4.quote'),
      name: t('testimonials.4.name'),
      role: t('testimonials.4.role'),
    },
    {
      quote: t('testimonials.5.quote'),
      name: t('testimonials.5.name'),
      role: t('testimonials.5.role'),
    },
    {
      quote: t('testimonials.6.quote'),
      name: t('testimonials.6.name'),
      role: t('testimonials.6.role'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('testimonials.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
