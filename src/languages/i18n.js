import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import de from './de.json'
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
// console.log("initReactI18next: ", initReactI18next);
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    },
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    }
  });



const translate = (key) => {
  // console.log('translate key ', key);
  // console.log('result: ', i18n.resources['en']['welcome']);

  // console.log('i18n key: ', i18n.t(key));
  // console.log('result: ', i18n.translations);
  try {
    return i18n.t(key);
  } catch (error) {
    // return i18n.missingTranslationPrefix+' '+key;
    return key;
  }

  // return i18n.missingTranslationPrefix+' '+key;
  // return key;


};
i18n["translate"] = translate;
export default i18n;
