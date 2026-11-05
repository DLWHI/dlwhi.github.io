import { useTranslation } from "react-i18next";

function Languages() {
  const { t } = useTranslation();

  return (
    <div className="stack-center card-breakable gap-2 w-1/4 flex-none">
      <h3 id="skills">{t("skills.title")}</h3>
      <div className="w-full">
        <span>
          <h4>Russian:</h4>
          <span>Fluent/C2</span>
        </span>
        <span>
          <h4>English:</h4>
          <span>Advanced/C1</span>
        </span>
        {/* <span>
          <h4>German:</h4>
          <span>Elementary/A1</span>
        </span> */}
      </div>
    </div>
  );
}

export default Languages;
