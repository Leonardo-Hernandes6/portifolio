import { AboutMe } from "../AboutMe/about_me";
import { ScrollViewContainer } from "./style";

interface IScrollView {
  theme: string;
}

export const ScrollView = ({ theme }: IScrollView) => {
  return (
    <ScrollViewContainer>
      <AboutMe theme={theme} />
    </ScrollViewContainer>
  );
};
