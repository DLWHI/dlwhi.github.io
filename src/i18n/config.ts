import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../languages/en.json";
import ruTranslation from "../languages/ru.json";

export const languages: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

export const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
