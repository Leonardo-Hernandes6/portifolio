import { ChangeThemeButtonBox } from "./style";
import { LuLamp } from "react-icons/lu";

interface IChangeThemeButton {
  theme: string;
  setTheme: () => void;
}

export const ChangeThemeButton = ({ theme, setTheme }: IChangeThemeButton) => {
  return (
    <ChangeThemeButtonBox theme={theme} onClick={setTheme}>
      <LuLamp size={"2rem"} />
    </ChangeThemeButtonBox>
  );
};
