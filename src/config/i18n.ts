import i18next from 'i18next';

import en from 'translations/en.json';
import ar from 'translations/ar.json';

// eslint-disable-next-line
i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: 'en',
  supportedLngs: ['en', 'ar'],
  debug: false,
  resources: {
    en: {
      translation: en
    },
    ar: {
      translation: ar
    }
  }
});
export default i18next;
