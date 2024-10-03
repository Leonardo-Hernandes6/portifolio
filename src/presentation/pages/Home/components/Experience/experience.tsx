import { ExperienceCard } from "../../../../components/ExperienceCard/experience_card";
import { useTranslatedExperiences } from "../../../../resources/use_translated_experiences";
import { ExperienceContainer, ExperienceTitle } from "./style";
import { useTranslation } from "react-i18next";

interface IExperience {
  theme: string;
}

export const Experience = ({ theme }: IExperience) => {
  const experiences = useTranslatedExperiences();

  const { t } = useTranslation();

  return (
    <ExperienceContainer>
      <ExperienceTitle theme={theme}> {t("experience")} </ExperienceTitle>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          date={experience.date}
          title={experience.title}
          description={experience.description}
          theme={theme}
          link={experience.link}
        />
      ))}
    </ExperienceContainer>
  );
};
