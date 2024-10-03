import { ExperienceCard } from "../../../../components/ExperienceCard/experience_card";
import { ExperienceContainer, ExperienceTitle } from "./style";
import { Experiences } from "../../../../resources/experience";

interface IExperience {
  theme: string;
}

export const Experience = ({ theme }: IExperience) => {
  return (
    <ExperienceContainer>
      <ExperienceTitle theme={theme}>Experiência</ExperienceTitle>
      {Experiences.map((experience, index) => (
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
