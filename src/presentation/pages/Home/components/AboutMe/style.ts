import styled from "styled-components";

import breakpoint from "../../../../global/breakpoints";

export const AboutMeContainer = styled.div``;

export const AboutMeText = styled.p`
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.35rem;
`;

export const AboutMeTitle = styled.p`
  color: var(--white);
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (${breakpoint.sm1}) {
    margin-top: 5rem;
  }
`;

export const AboutMeSpecsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const AboutMeSpecs = styled.div`
  max-width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutMeSpecsTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: var(--white);
`;

export const AboutMeSpecsSubTitle = styled.p`
  text-align: center;
  color: var(--white);
`;
