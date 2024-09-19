import { ActionButtonContainer, ActionButtonText } from "./style";

interface IActionButton {
  title: string;
  option: number;
  isSelected: boolean | undefined;
  setSelected: (option: number) => void;
  theme: string;
}

export const ActionButton = ({
  title,
  option,
  isSelected,
  setSelected,
  theme,
}: IActionButton) => {
  return (
    <ActionButtonContainer theme={theme}>
      <ActionButtonText
        isSelected={isSelected}
        onClick={() => setSelected(option)}
        theme={theme}
      >
        {title}
      </ActionButtonText>
    </ActionButtonContainer>
  );
};
