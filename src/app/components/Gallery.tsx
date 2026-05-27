import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { useLanguage } from '../context/LanguageContext';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1659080925920-1683d25f772a?w=600',
    alt: 'Award ceremony with students',
    category: 'Awards',
  },
  {
    url: 'https://images.unsplash.com/photo-1708592954683-6aa26fb6018c?w=600',
    alt: 'Tree plantation drive',
    category: 'Environment',
  },
  {
    url: 'https://images.unsplash.com/photo-1774437678915-7ca15c2f6eec?w=600',
    alt: 'Republic Day celebration',
    category: 'National',
  },
  {
    url: 'https://images.unsplash.com/photo-1592820186056-dc600b8ddff4?w=600',
    alt: 'Community gathering',
    category: 'Community',
  },
  {
    url: 'https://images.unsplash.com/photo-1707721690544-781fe6ede937?w=600',
    alt: 'Village tree plantation',
    category: 'Environment',
  },
  {
    url: 'https://images.unsplash.com/photo-1774437788490-cae0d3a2d40b?w=600',
    alt: 'Flag ceremony',
    category: 'National',
  },
  {
    url: 'https://images.unsplash.com/photo-1692609659165-1ec4d8108c0e?w=600',
    alt: 'Children gathering',
    category: 'Community',
  },
  {
    url: 'https://images.unsplash.com/photo-1659080925666-16001612bc3e?w=600',
    alt: 'Graduation ceremony',
    category: 'Awards',
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('gallery.all'));

  const categories = [
    t('gallery.all'),
    t('gallery.awards'),
    t('gallery.environment'),
    t('gallery.national'),
    t('gallery.community')
  ];

  const filteredImages = selectedCategory === t('gallery.all')
    ? images
    : images.filter(img => {
        const categoryMap: Record<string, string> = {
          'Awards': t('gallery.awards'),
          'Environment': t('gallery.environment'),
          'National': t('gallery.national'),
          'Community': t('gallery.community')
        };
        return categoryMap[img.category] === selectedCategory;
      });

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('gallery.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('gallery.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[var(--saffron)] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[var(--accent)] hover:text-[var(--saffron)]'
                }`}
                style={{ borderRadius: 'var(--radius)' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Masonry columnsCount={3} gutter="1rem">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <p className="text-white text-center">{image.alt}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
