import { useTranslation } from "react-i18next";
import PrintIcon from "../assets/print.svg?react";
import TelegramIcon from "../assets/telegram-outlined.svg?react";
import "./Header.css";
import LangSelector from "../components/LangSelector";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="print:hidden bg-foreground h-16 w-full">
      <div className="flex-container">
        <nav className="flex items-start justify-center gap-8">
          <a className="text-xl" href="#skills">
            {t("header.skills")}
          </a>
          <a className="text-xl" href="#education">
            {t("header.education")}
          </a>
          <a className="text-xl" href="#experience">
            {t("header.experience")}
          </a>
          <a className="text-xl" href="#projects">
            {t("header.projects")}
          </a>
        </nav>
        <div className="flex-bar-end">
          <LangSelector />
          <button onClick={() => window.print()} className="header-button">
            <PrintIcon width={20} height={20} />
            <span>PDF</span>
          </button>
          <a
            target="_blank"
            href="https://t.me/dlwhi"
            className="header-button"
          >
            <TelegramIcon width={20} height={20} />
            <span>{t("header.contact")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
