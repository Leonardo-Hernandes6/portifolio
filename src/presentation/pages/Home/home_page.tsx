import { Header } from "../../components/Header/header";
import { useHomeViewModel } from "./home_view_model";
import { HomeContainer } from "./style";

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
    </HomeContainer>
  );
};
