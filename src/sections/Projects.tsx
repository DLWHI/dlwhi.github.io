import { useTranslation } from "react-i18next";
import { AbstractFSEN, AbstractFSRU } from "../projects/AbstractFS";
import { GoCMSEN, GoCMSRU } from "../projects/GoCMS";

function Projects() {
  const { i18n, t } = useTranslation();

  return (
    <div className="stack-center flex-1 gap-2 print:break-inside-avoid">
      <h3 id="projects">{t("projects")}</h3>
      <div className="space-y-2 w-full">
        {i18n.language == "en" && <ProjectsEN />}
        {i18n.language == "ru" && <ProjectsRU />}
      </div>
    </div>
  );
}

function ProjectsEN() {
  return (
    <>
      <AbstractFSEN />
      <GoCMSEN />
    </>
  );
}

function ProjectsRU() {
  return (
    <>
      <AbstractFSRU />
      <GoCMSRU />
    </>
  );
}

export default Projects;
