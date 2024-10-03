import { useTranslation } from "react-i18next";

export const useTranslatedExperiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      date: `fev ${t("wordBeforeYear")}2024 - ${t("atTheMoment")}`,
      title: t("ntsecTitle"),
      description: t("ntsecDescription"),
      link: `https://www.ntsec.com.br/`,
    },
    {
      date: `jun ${t("wordBeforeYear")}2023 - ${t("december")} ${t(
        "wordBeforeYear",
      )}2023`,
      title: t("soulprimeTitle"),
      description: t("soulprimeDescription"),
      link: `https://www.soulprime.io/`,
    },
    {
      date: `mar ${t("wordBeforeYear")}2022 - ${t("december")} ${t(
        "wordBeforeYear",
      )}2022`,
      title: t("3778Title"),
      description: t("3778Description"),
      link: `https://www.3778.care/`,
    },
    {
      date: `${t("october")} ${t("wordBeforeYear")}2020 - mar ${t(
        "wordBeforeYear",
      )}2022`,
      title: t("synapseTitle"),
      description: t("synapseDescription"),
      link: null,
    },
  ];
  return experiences;
};
