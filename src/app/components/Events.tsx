import { Calendar, MapPin, Users as UsersIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  category: string;
}

function EventCard({ title, date, location, attendees, image, category }: EventCardProps) {
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2" style={{ borderRadius: 'var(--radius)' }}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[var(--saffron)] text-white text-sm" style={{ borderRadius: 'var(--radius)' }}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-gray-900 mb-4">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[var(--saffron)]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[var(--saffron)]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon size={18} className="text-[var(--saffron)]" />
            <span>{attendees}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Events() {
  const { t } = useLanguage();

  const events = [
    {
      title: 'Education Reform Rally',
      date: 'March 15, 2026',
      location: 'District Headquarters',
      attendees: '5,000+ Participants',
      image: 'https://images.unsplash.com/photo-1774437678915-7ca15c2f6eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmbGFnJTIwcGF0cmlvdGljJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc5MTg2Mjg4fDA&ixlib=rb-4.1.0&q=80&w=600',
      category: t('events.rally'),
    },
    {
      title: 'Republic Day Celebration',
      date: 'January 26, 2026',
      location: 'Town Square',
      attendees: '3,000+ Citizens',
      image: 'https://images.unsplash.com/photo-1774437788490-cae0d3a2d40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBmbGFnJTIwcGF0cmlvdGljJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc5MTg2Mjg4fDA&ixlib=rb-4.1.0&q=80&w=600',
      category: t('events.national'),
    },
    {
      title: 'Annual Merit Award Ceremony',
      date: 'February 10, 2026',
      location: 'Community Hall',
      attendees: '500+ Students & Parents',
      image: 'https://images.unsplash.com/photo-1659080925920-1683d25f772a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbiUyMHNjaG9sYXJzaGlwJTIwYXdhcmRzfGVufDF8fHx8MTc3OTE4NjI4N3ww&ixlib=rb-4.1.0&q=80&w=600',
      category: t('events.educational'),
    },
    {
      title: 'Community Tree Plantation Drive',
      date: 'April 5, 2026',
      location: 'Multiple Villages',
      attendees: '1,000+ Volunteers',
      image: 'https://images.unsplash.com/photo-1707721690544-781fe6ede937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmVlJTIwcGxhbnRhdGlvbiUyMEluZGlhJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NzkxODYyODZ8MA&ixlib=rb-4.1.0&q=80&w=600',
      category: t('events.environmental'),
    },
    {
      title: 'Youth Leadership Summit',
      date: 'May 20, 2026',
      location: 'Conference Center',
      attendees: '800+ Young Leaders',
      image: 'https://images.unsplash.com/photo-1592820186056-dc600b8ddff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBJbmRpYSUyMHNvY2lhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc5MTg2Mjg3fDA&ixlib=rb-4.1.0&q=80&w=600',
      category: t('events.social'),
    },
    {
      title: 'Village Development Meeting',
      date: 'December 12, 2025',
      location: 'Panchayat Office',
      attendees: '200+ Community Members',
      image: 'https://images.unsplash.com/photo-1692609659165-1ec4d8108c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBJbmRpYSUyMHNvY2lhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc5MTg2Mjg3fDA&ixlib=rb-4.1.0&q=80&w=600',
      category: t('events.communitycat'),
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('events.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
