import { useTranslation } from "react-i18next";

function About() {
  const { i18n } = useTranslation();

  if (i18n.language == "en") {
    return <AboutEN />;
  } else if (i18n.language == "ru") {
    return <AboutRU />;
  } else {
    return null;
  }
}

function AboutEN() {
  return (
    <span className="px-2">
      Backend-leaning full-stack developer working mainly in Go and TypeScript.
      Built a CMS API serving web and mobile clients, along with the search,
      caching and server infrastructure behind it. Trained at School 21 (Sber).
      Looking for a mid-level in backend or full-stack development.
    </span>
  );
}

function AboutRU() {
  return (
    <span className="px-2">
      Full-Stack разработчик, с уклоном на бекенд-разработку, в основном
      работающий на Go и Typescript. Создал CMS API для мобильных и веб
      клиентов, с встроенными поиском, системой кеширования и серверной
      инфраструктурой. Обучался в Школе 21 (Сбер). В поисках позиции бекенд или
      full-stack разработчика middle уровня.
    </span>
  );
}

export default About;
