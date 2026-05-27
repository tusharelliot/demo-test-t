import { TreePine, Heart, GraduationCap, Users, HandHeart, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import treePlantationDrive from '../assets/tree-plantation-drive.jpeg';
import studentScholarshipPrograms from '../assets/student-scholarship-programs.jpeg';
import goshalaSupport from '../assets/goshala-support.jpeg';
import communityGatherings from '../assets/community-gatherings.jpeg';
import grassrootsBjpWorker from '../assets/grassroots-bjp-worker.jpeg';
import publicWelfareDonation from '../assets/public-welfare-donation.jpeg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  stats?: string;
}

function ServiceCard({ icon, title, description, image, stats }: ServiceCardProps) {
  return (
    <div className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2" style={{ borderRadius: 'var(--radius)' }}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[var(--saffron)] text-white rounded-lg">
              {icon}
            </div>
            <h3 className="text-white">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {stats && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-[var(--saffron)]">{stats}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ServiceCards() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <TreePine size={24} />,
      title: t('service.tree.title'),
      description: t('service.tree.desc'),
      image: treePlantationDrive,
      stats: t('service.tree.stat'),
    },
    {
      icon: <GraduationCap size={24} />,
      title: t('service.scholarship.title'),
      description: t('service.scholarship.desc'),
      image: studentScholarshipPrograms,
      stats: t('service.scholarship.stat'),
    },
    {
      icon: <Heart size={24} />,
      title: t('service.goshala.title'),
      description: t('service.goshala.desc'),
      image: goshalaSupport,
      stats: t('service.goshala.stat'),
    },
    {
      icon: <HandHeart size={24} />,
      title: t('service.blood.title'),
      description: t('service.blood.desc'),
      image: publicWelfareDonation,
      stats: t('service.blood.stat'),
    },
    {
      icon: <Home size={24} />,
      title: t('service.village.title'),
      description: t('service.village.desc'),
      image: grassrootsBjpWorker,
      stats: t('service.village.stat'),
    },
    {
      icon: <Users size={24} />,
      title: t('service.community.title'),
      description: t('service.community.desc'),
      image: communityGatherings,
      stats: t('service.community.stat'),
    },
  ];

  return (
    <section id="service" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('service.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('service.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
