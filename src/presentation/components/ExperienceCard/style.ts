import styled from "styled-components";

interface IExperienceCard {
  theme: string;
}

export const ExperienceCardContainer = styled.div<IExperienceCard>`
  width: 27vw;
  background-color: ${(props) =>
    props.theme === "dark" ? "var(--darkBlue)" : "var(--white1)"};
  margin: 1rem 0rem;
  border-radius: 0.4rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;

  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "var(--darkBlue1)" : "var(--white2)"};
  }

  &:hover p {
    color: ${(props) =>
      props.theme === "dark" ? "var(--white2)" : "var(--darkBlue)"};
  }
`;

export const ExperienceCardTimeBox = styled.div`
  width: 30%;
`;

export const ExperienceCardTimeText = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--disabled);
  margin-top: 1rem;

  transition: color 0.5s ease;
`;

export const ExperienceCardDescriptionBox = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 2rem;
`;

export const ExperienceCardDescriptionTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--disabled);
  margin-top: 0.8rem;

  transition: color 0.5s ease;
`;

export const ExperienceCardDescriptionText = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--disabled);
  margin-top: 0.4rem;

  transition: color 0.5s ease;
`;
