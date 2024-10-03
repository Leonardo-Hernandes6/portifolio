import styled from "styled-components";
import breakpoint from "../../global/breakpoints";

interface IHomeContainer {
  theme: string;
}

export const HomeContainer = styled.div<IHomeContainer>`
  width: 100%;
  min-height: 100vh;
  background: ${(props) =>
    props.theme === "light"
      ? "var(--lightBackground)"
      : "var(--darkBackground)"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeContentContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 4rem;

  @media ${breakpoint.sm2} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
  }
`;
