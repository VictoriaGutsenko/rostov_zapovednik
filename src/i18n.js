import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ruCommon } from './locales/ru/common';
import { enCommon } from './locales/en/common';

import { ruHome } from './locales/ru/home';
import { enHome } from './locales/en/home';

import { ruAbout } from './locales/ru/about';
import { enAbout } from './locales/en/about';

import { ruPhotos } from './locales/ru/photos';
import { enPhotos } from './locales/en/photos';

import { ruNews } from './locales/ru/news';
import { enNews } from './locales/en/news';

import { ruEvents } from './locales/ru/events';
import { enEvents } from './locales/en/events';

import { ruContacts } from './locales/ru/contacts';
import { enContacts } from './locales/en/contacts';

const resources = {
  ru: {
    translation: {
      common: ruCommon,
      home: ruHome,
      about: ruAbout,
      photos: ruPhotos,
      news: ruNews,
      events: ruEvents,
      contacts: ruContacts,
    }
  },
  en: {
    translation: {
      common: enCommon,
      home: enHome,
      about: enAbout,
      photos: enPhotos,
      news: enNews,
      events: enEvents,
      contacts: enContacts,
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", 
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  
  });

export default i18n;