import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function WhatsAppButton() {
  const { t } = useLanguage();
  const handleClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hello Phoolchand Saini, I would like to connect with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ borderRadius: 'var(--radius)' }}>
        {t('whatsapp.tooltip')}
      </span>
    </button>
  );
}
