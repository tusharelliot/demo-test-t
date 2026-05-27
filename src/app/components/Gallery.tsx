import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

type GalleryCategory = 'all' | 'awards' | 'environment' | 'national' | 'community';

const galleryModules = import.meta.glob('../assets/gallery/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const categoryPattern: Exclude<GalleryCategory, 'all'>[] = [
  'community',
  'community',
  'environment',
  'awards',
  'environment',
  'awards',
  'national',
  'awards',
  'community',
  'environment',
] as Exclude<GalleryCategory, 'all'>[];

const images = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url], index) => {
    const category = categoryPattern[index % categoryPattern.length];
    return {
      url,
      alt: `Phoolchand Saini gallery photo ${index + 1}`,
      category,
      id: path,
    };
  });

export function Gallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { key: 'all', label: t('gallery.all') },
    { key: 'awards', label: t('gallery.awards') },
    { key: 'environment', label: t('gallery.environment') },
    { key: 'national', label: t('gallery.national') },
    { key: 'community', label: t('gallery.community') },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 10);
  const hasMorePhotos = filteredImages.length > 10;

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
                key={category.key}
                onClick={() => {
                  setSelectedCategory(category.key as GalleryCategory);
                  setShowAll(false);
                }}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-[var(--saffron)] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[var(--accent)] hover:text-[var(--saffron)]'
                }`}
                style={{ borderRadius: 'var(--radius)' }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
          <Masonry gutter="1rem">
            {visibleImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden bg-white/95 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-4"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <div className="flex items-center justify-center bg-gradient-to-br from-stone-100 via-white to-orange-50 p-3">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-contain rounded-[calc(var(--radius)-4px)] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white text-center">{image.alt}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {hasMorePhotos && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((current) => !current)}
              className="px-8 py-3 bg-[var(--saffron)] text-white shadow-lg hover:bg-[var(--saffron-light)] hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: 'var(--radius)' }}
            >
              {showAll ? t('gallery.lessPhotos') : t('gallery.morePhotos')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
