import styled from "styled-components";

interface IExperience {
  theme: string;
}

export const ExperienceContainer = styled.div`
  margin: 4rem 0rem;
`;

export const ExperienceTitle = styled.p<IExperience>`
  color: ${(props) =>
    props.theme === "dark" ? "var(--white)" : "var(--darkBlue)"};
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
