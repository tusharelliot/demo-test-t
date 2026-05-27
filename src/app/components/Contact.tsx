import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const openMailMessage = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:traunsaini.iitd@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    openMailMessage();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('contact.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-gray-900 mb-6">{t('contact.info')}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--saffron)] text-white rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">{t('contact.phone')}</p>
                  <p className="text-gray-900">+91 9414675268</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--saffron)] text-white rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">{t('contact.email')}</p>
                  <p className="text-gray-900">pcsaini4256@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--saffron)] text-white rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">{t('contact.address')}</p>
                  <p className="text-gray-900">
                    {t('contact.addressLine1')}<br />
                    {t('contact.addressLine2')}<br />
                    {t('contact.addressLine3')}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-600 mb-4">{t('contact.social')}</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/phoolchand.saini.1042?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[var(--accent)] text-[var(--saffron)] hover:bg-[var(--saffron)] hover:text-white transition-all duration-300 rounded-lg"
                    aria-label="Open Facebook profile"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-[var(--accent)] text-[var(--saffron)] hover:bg-[var(--saffron)] hover:text-white transition-all duration-300 rounded-lg"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/phoolchand.saini.1042?igsh=MTV2bmp2czZxOWFlYQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[var(--accent)] text-[var(--saffron)] hover:bg-[var(--saffron)] hover:text-white transition-all duration-300 rounded-lg"
                    aria-label="Open Instagram profile"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-gray-900 mb-6">{t('contact.message')}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitted && (
                <div className="p-4 bg-green-100 text-green-700 rounded mb-4">
                  Your email app has been opened with the message details.
                </div>
              )}
              <div>
                <label className="block text-gray-700 mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--saffron)] focus:outline-none transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--saffron)] focus:outline-none transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.phonePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--saffron)] focus:outline-none transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.messageLabel')}</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--saffron)] focus:outline-none transition-colors resize-none"
                  style={{ borderRadius: 'var(--radius)' }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-light)] text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <Send size={20} />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
