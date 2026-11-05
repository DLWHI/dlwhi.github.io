import { useTranslation } from "react-i18next";
import Avatar from "../assets/avatar.jpg";
import PointerIcon from "../assets/pointer-location.svg?react";
import CaseIcon from "../assets/briefcase.svg?react";
import MailIcon from "../assets/mail.svg?react";
import TelegramIcon from "../assets/telegram.svg?react";
import GithubIcon from "../assets/github.svg?react";
import LeetcodeIcon from "../assets/leetcode.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import About from "./About";
import "./General.css";

function General() {
  const { t } = useTranslation();

  return (
    <div className="flex-bar">
      <img className="avatar" src={Avatar} width={200} height={200} />
      <div className="stack-left flex-1 gap-2">
        <div className="flex-bar w-full px-2">
          <div className="flex-1">
            <h1>{t("main.name")}</h1>
            <h2>{t("main.position")}</h2>
          </div>
          <div className="main-stack main-stack-center">
            <span className="open-container">
              <span className="open-dot" />
              <span>{t("main.open")}</span>
            </span>
          </div>
        </div>
        <div className="flex-bar px-2">
          <span className="iconed-text">
            <PointerIcon width={20} height={20} />
            <span>{t("main.location")}</span>
          </span>
          <span className="iconed-text">
            <CaseIcon width={20} height={20} />
            <span>{t("main.experience")}</span>
          </span>
          <a
            className="iconed-text cursor-pointer"
            href="mailto:samimmortal999@gmail.com"
          >
            <MailIcon width={20} height={20} />
            <span>samimmortal999@gmail.com</span>
          </a>
        </div>
        <div className="flex-bar px-2 mt-2">
          <a href="https://github.com/DLWHI/" target="_blank">
            <GithubIcon className="icon-link" width={24} height={24} />
          </a>
          <a href="https://leetcode.com/u/dlwhi/" target="_blank">
            <LeetcodeIcon className="icon-link" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/dlwhi/" target="_blank">
            <LinkedinIcon className="icon-link" width={24} height={24} />
          </a>
          <a target="_blank" href="https://t.me/dlwhi">
            <TelegramIcon className="icon-link" width={24} height={24} />
          </a>
        </div>
        <About />
      </div>
    </div>
  );
}

export default General;
