import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="stack-center card-breakable gap-2 w-1/4 flex-none">
      <h3 id="skills">{t("skills.title")}</h3>
      <div className="w-full">
        <SkillsLangs
          className="print:break-inside-avoid"
          label={t("skills.langs")}
        />
        <SkillsFront
          className="print:break-inside-avoid"
          label={t("skills.front")}
        />
        <SkillsBack
          className="print:break-inside-avoid"
          label={t("skills.back")}
        />
        {/* <SkillsDesktop
          className="print:break-inside-avoid"
          label={t("skills.desktop")}
        /> */}
        <SkillsOther
          className="print:break-inside-avoid"
          label={t("skills.other")}
        />
      </div>
    </div>
  );
}

interface SkillCardProps {
  label: string;
  className?: string;
}

function SkillsLangs({ label, className }: SkillCardProps) {
  return (
    <div className={className}>
      <h4 className="text-center">{label}</h4>
      <ul className="italic">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Go</li>
        <li>PHP</li>
      </ul>
    </div>
  );
}

function SkillsFront({ label, className }: SkillCardProps) {
  return (
    <div className={className}>
      <h4 className="text-center">{label}</h4>
      <ul className="italic">
        <li>HTML / CSS</li>
        <li>React / Next.js</li>
        <li>Tailwind CSS</li>
        <li>Vite</li>
      </ul>
    </div>
  );
}

function SkillsBack({ label, className }: SkillCardProps) {
  return (
    <div className={className}>
      <h4 className="text-center">{label}</h4>
      <ul className="italic">
        <li>REST API</li>
        <li>GORM</li>
        <li>PostgreSQL / MySQL</li>
        <li>Redis</li>
        <li>Meilisearch</li>
        <li>Node.js/Express</li>
        <li>Laravel</li>
      </ul>
    </div>
  );
}

// function SkillsDesktop({ label, className }: SkillCardProps) {
//   return (
//     <div className={className}>
//       <h4 className="text-center">{label}</h4>
//       <ul className="italic">
//         <li>Qt5/6</li>
//         <li>SDL2</li>
//         <li>OpenGL</li>
//         <li>Nuklear</li>
//       </ul>
//     </div>
//   );
// }

function SkillsOther({ label, className }: SkillCardProps) {
  return (
    <div className={className}>
      <h4 className="text-center">{label}</h4>
      <ul className="italic">
        <li>Docker</li>
        <li>Proxmox</li>
        <li>MinGW / GNU environments</li>
        <li>Linux and POSIX/Unix-like systems</li>
        <li>Nginx</li>
      </ul>
    </div>
  );
}

export default Skills;
