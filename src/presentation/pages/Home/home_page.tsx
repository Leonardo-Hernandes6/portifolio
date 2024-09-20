import { Header } from "../../components/Header/header";
import { Profile } from "./components/Profile/profile";
import { ScrollView } from "./components/ScrollView/scroll_view";
import { useHomeViewModel } from "./home_view_model";
import { HomeContainer, HomeContentContainer } from "./style";

export const HomePage = () => {
  const {
    isAboutSelected,
    isExperienceSelected,
    isProjectSelected,
    setSelected,
    theme,
  } = useHomeViewModel();

  return (
    <HomeContainer theme={theme}>
      <Header
        isAboutSelected={isAboutSelected}
        isExperienceSelected={isExperienceSelected}
        isProjectSelected={isProjectSelected}
        setSelected={setSelected}
        theme={theme}
      />
      <HomeContentContainer>
        <Profile theme={theme} />
        <ScrollView theme={theme} />
      </HomeContentContainer>
    </HomeContainer>
  );
};
