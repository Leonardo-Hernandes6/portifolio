import styled from "styled-components";

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
  justify-content: center;
`;
