import { useEffect } from 'react';
import { ExternalLink, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const facebookProfileUrl =
  'https://www.facebook.com/narendramodi/';

function loadFacebookSdk() {
  if (document.getElementById('facebook-jssdk')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'facebook-jssdk';
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  script.src =
    'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
  document.body.appendChild(script);
}

export function FacebookFeed() {
  const { t } = useLanguage();

  useEffect(() => {
    loadFacebookSdk();

    const facebook = (
      window as Window & {
        FB?: { XFBML?: { parse: () => void } };
      }
    ).FB;

    facebook?.XFBML?.parse();
  }, []);

  return (
    <section
      id="facebook"
      className="py-20 bg-gradient-to-b from-white to-[var(--accent)]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('facebook.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--saffron)] to-[var(--green-india)] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('facebook.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div
            className="bg-white shadow-xl border border-orange-100 p-6 md:p-8"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <div id="fb-root" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#1877f2] text-white rounded-2xl">
                <Facebook size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  {t('facebook.profileLabel')}
                </p>
                <h3 className="text-2xl text-gray-900">
                  {t('facebook.profileName')}
                </h3>
              </div>
            </div>

            <div className="overflow-hidden" style={{ minHeight: 540 }}>
              <div
                className="fb-page"
                data-href={facebookProfileUrl}
                data-tabs="timeline"
                data-width="500"
                data-height="540"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite={facebookProfileUrl}
                  className="fb-xfbml-parse-ignore"
                >
                  <a href={facebookProfileUrl}>{t('facebook.profileName')}</a>
                </blockquote>
              </div>
            </div>
          </div>

          <aside
            className="bg-white/90 backdrop-blur-sm shadow-lg p-8 border border-orange-100"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <h3 className="text-2xl text-gray-900 mb-4">
              {t('facebook.liveTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('facebook.liveDescription')}
            </p>
            <a
              href={facebookProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 bg-[#1877f2] text-white hover:bg-[#1665d8] transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ borderRadius: 'var(--radius)' }}
            >
              {t('facebook.cta')}
              <ExternalLink size={18} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
