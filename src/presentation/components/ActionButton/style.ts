import styled from "styled-components";

interface IActionButtonText {
  isSelected?: boolean | undefined;
  theme?: string;
}

export const ActionButtonContainer = styled.div<IActionButtonText>`
  margin: 3rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > span {
    color: ${(props) =>
      props.theme === "dark" ? "var(--white)" : "var(--darkBlue)"};
  }

  &:hover > span::before {
    width: 3.5rem;
    background-color: ${(props) =>
      props.theme === "dark" ? "var(--white)" : "var(--darkBlue)"};
  }
`;

export const ActionButtonText = styled.span<IActionButtonText>`
  color: ${(props) =>
    props.isSelected
      ? props.theme === "dark"
        ? "var(--white)"
        : "var(--darkBlue)"
      : "var(--disabled)"};
  font-size: 1.2rem;
  font-family: "Fira Code", monospace;

  user-select: none;
  position: relative;
  transition: color 0.6s ease;

  &::before {
    content: "";
    display: inline-block;
    width: ${(props) => (props.isSelected ? "3.5rem" : "2rem")};
    height: 0.1rem;
    background-color: ${(props) =>
      props.isSelected
        ? props.theme === "dark"
          ? "var(--white)"
          : "var(--darkBlue)"
        : "var(--disabled)"};
    margin-right: 1rem;
    vertical-align: middle;
    transition: width 0.6s ease, background-color 0.6s ease;
  }
`;
