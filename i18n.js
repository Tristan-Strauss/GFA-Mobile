import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import sw from './locales/sw/translation.json';
import pt from './locales/pt/translation.json';
import ar from './locales/ar/translation.json';
import ny from './locales/ny/translation.json';
import zu from './locales/zu/translation.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sw: { translation: sw },
      pt: { translation: pt },
      ar: { translation: ar },
      ny: { translation: ny },
      zu: { translation: zu },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
