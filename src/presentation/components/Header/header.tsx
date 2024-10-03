import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <ActionButton
        title={t("about")}
        option={0}
        isSelected={isAboutSelected}
        setSelected={setSelected}
        theme={theme}
      />
      <ActionButton
        title={t("experience")}
        option={1}
        isSelected={isExperienceSelected}
        setSelected={setSelected}
        theme={theme}
      />
      <ActionButton
        title={t("projects")}
        option={2}
        isSelected={isProjectSelected}
        setSelected={setSelected}
        theme={theme}
      />
    </HeaderContainer>
  );
};
