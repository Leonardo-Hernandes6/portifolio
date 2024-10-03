import {
  ExperienceCardContainer,
  ExperienceCardDescriptionBox,
  ExperienceCardDescriptionText,
  ExperienceCardDescriptionTitle,
  ExperienceCardTimeBox,
  ExperienceCardTimeText,
} from "./style";

interface IExperienceCard {
  date: string;
  title: string;
  description: string;
  theme: string;
  link: string | null;
}

export const ExperienceCard = ({
  date,
  title,
  description,
  link,
  theme,
}: IExperienceCard) => {
  return (
    <ExperienceCardContainer
      theme={theme}
      onClick={() => {
        if (link !== null) {
          window.open(link);
        }
      }}
    >
      <ExperienceCardTimeBox>
        <ExperienceCardTimeText>{date}</ExperienceCardTimeText>
      </ExperienceCardTimeBox>
      <ExperienceCardDescriptionBox>
        <ExperienceCardDescriptionTitle>{title}</ExperienceCardDescriptionTitle>
        <ExperienceCardDescriptionText>
          {description}
        </ExperienceCardDescriptionText>
      </ExperienceCardDescriptionBox>
    </ExperienceCardContainer>
  );
};
