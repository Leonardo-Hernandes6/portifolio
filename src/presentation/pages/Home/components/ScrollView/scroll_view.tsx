import { AboutMe } from "../AboutMe/about_me";
import { Experience } from "../Experience/experience";
import { ScrollViewContainer } from "./style";

interface IScrollView {
  theme: string;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
}

export const ScrollView = ({ theme, aboutRef, experienceRef }: IScrollView) => {
  return (
    <ScrollViewContainer>
      <div ref={aboutRef}>
        <AboutMe theme={theme} />
      </div>
      <div ref={experienceRef}>
        <Experience theme={theme} />
      </div>
    </ScrollViewContainer>
  );
};
