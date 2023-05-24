// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEn from './translations/en.json';
import translationsFi from './translations/fi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      fi: { translation: translationsFi }
    },
    lng: 'fi', // Default language
    fallbackLng: 'en', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false // Disable HTML escaping
    }
  });

export default i18n;