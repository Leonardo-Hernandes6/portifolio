import { ActionButton } from "../ActionButton/action_button";
import { HeaderContainer } from "./style";

interface IHeader {
  isAboutSelected: boolean | undefined;
  isExperienceSelected: boolean | undefined;
  isProjectSelected: boolean | undefined;
  setSelected: (option: number) => void;
  theme: string;
}

export const Header = ({
  isAboutSelected,
  isExperienceSelected,
  isProjectSelected,
  setSelected,
  theme,
}: IHeader) => {
  return (
    <HeaderContainer>
      <ActionButton
        title='About'
        option={0}
        isSelected={isAboutSelected}
        setSelected={setSelected}
        theme={theme}
      />
      <ActionButton
        title='Experience'
        option={1}
        isSelected={isExperienceSelected}
        setSelected={setSelected}
        theme={theme}
      />
      <ActionButton
        option={2}
        title='Projects'
        isSelected={isProjectSelected}
        setSelected={setSelected}
        theme={theme}
      />
    </HeaderContainer>
  );
};
