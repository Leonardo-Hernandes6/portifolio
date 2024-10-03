import styled from "styled-components";
import breakpoint from "../../../../global/breakpoints";

interface IChangeThemeButton {
  theme: string;
}

export const ChangeThemeButtonBox = styled.button<IChangeThemeButton>`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  color: ${(props) =>
    props.theme === "dark" ? "var(--white)" : "var(--disabled)"};
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;

  transition: color 0.5s ease;

  &:hover {
    color: ${(props) =>
      props.theme === "dark" ? "var(--yellow)" : "var(--darkBlue)"};
  }

  @media (${breakpoint.sm1}) {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
