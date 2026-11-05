import { useTranslation } from "react-i18next";
import { languages } from "../i18n/config";
import "./LangSelector.css";

export default function LangSelector() {
  const { i18n } = useTranslation();
  return (
    <select
      className="lang-selector-container"
      name="locale"
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
      }}
      value={i18n.language}
    >
      {Object.entries(languages).map(([key, value]) => {
        return (
          <option className="lang-selector-item" value={key} key={key}>
            {value}
          </option>
        );
      })}
    </select>
  );
}
