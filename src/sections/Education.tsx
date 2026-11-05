import { useTranslation } from "react-i18next";
import { School21EN, School21RU } from "../education/School21";
import { MEPhIEN, MEPhIRU } from "../education/MEPhI";

function Education() {
  const { i18n, t } = useTranslation();

  return (
    <div className="stack-center flex-1 gap-2 w-full">
      <h3 id="education">{t("education")}</h3>
      <div className="space-y-6 w-full">
        {i18n.language == "en" && <EducationEN />}
        {i18n.language == "ru" && <EducationRU />}
      </div>
    </div>
  );
}

function EducationEN() {
  return (
    <>
      <MEPhIEN />
      <School21EN />
    </>
  );
}

function EducationRU() {
  return (
    <>
      <MEPhIRU />
      <School21RU />
    </>
  );
}

export default Education;
