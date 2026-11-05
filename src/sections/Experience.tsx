import { useTranslation } from "react-i18next";
import { FindFriendEN, FindFriendRU } from "../experience/FindFriend";
import { MediaTurkmenEN, MediaTurkmenRU } from "../experience/Media-Turkmen";

function Experience() {
  const { i18n, t } = useTranslation();

  return (
    <div className="stack-center flex-1 gap-2 w-full">
      <h3 id="experience">{t("experience")}</h3>
      <div className="space-y-2 w-full">
        {i18n.language == "en" && <ExperienceEN />}
        {i18n.language == "ru" && <ExperienceRU />}
      </div>
    </div>
  );
}

function ExperienceEN() {
  return (
    <>
      <MediaTurkmenEN />
      <FindFriendEN />
    </>
  );
}

function ExperienceRU() {
  return (
    <>
      <MediaTurkmenRU />
      <FindFriendRU />
    </>
  );
}

export default Experience;
