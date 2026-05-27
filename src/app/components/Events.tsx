import { Calendar, MapPin, Users as UsersIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import republicDayNawalgarh from '../assets/republic-day-nawalgarh.jpeg';
import operationSindoorRally from '../assets/operation-sindoor-rally.jpeg';
import swachhBharatMission from '../assets/swachh-bharat-mission.jpeg';
import communityTreePlantationDrive from '../assets/community-tree-plantation-drive.jpeg';
import collegeEventNawalgarh from '../assets/college-event-nawalgarh.jpeg';
import goshalaAnimalWelfare from '../assets/goshala-animal-welfare.jpeg';

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
      title: t('event.college.title'),
      date: t('event.college.date'),
      location: t('event.college.location'),
      attendees: t('event.college.attendees'),
      image: collegeEventNawalgarh,
      category: t('events.educational'),
    },
    {
      title: t('event.republic.title'),
      date: t('event.republic.date'),
      location: t('event.republic.location'),
      attendees: t('event.republic.attendees'),
      image: republicDayNawalgarh,
      category: t('events.national'),
    },
    {
      title: t('event.goshala.title'),
      date: t('event.goshala.date'),
      location: t('event.goshala.location'),
      attendees: t('event.goshala.attendees'),
      image: goshalaAnimalWelfare,
      category: t('events.culture'),
    },
    {
      title: t('event.tree.title'),
      date: t('event.tree.date'),
      location: t('event.tree.location'),
      attendees: t('event.tree.attendees'),
      image: communityTreePlantationDrive,
      category: t('events.environmental'),
    },
    {
      title: t('event.swachh.title'),
      date: t('event.swachh.date'),
      location: t('event.swachh.location'),
      attendees: t('event.swachh.attendees'),
      image: swachhBharatMission,
      category: t('events.governmentProgramme'),
    },
    {
      title: t('event.sindoor.title'),
      date: t('event.sindoor.date'),
      location: t('event.sindoor.location'),
      attendees: t('event.sindoor.attendees'),
      image: operationSindoorRally,
      category: t('events.nationalRally'),
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
