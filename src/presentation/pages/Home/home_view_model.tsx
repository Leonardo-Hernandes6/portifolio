import { useRef, useState } from "react";
import { useDeviceTheme } from "../../../application/hooks/useDeviceTheme";

export const useHomeViewModel = () => {
  const [isAboutSelected, setIsAboutSelected] = useState<boolean>(true);
  const [isExperienceSelected, setIsExperienceSelected] =
    useState<boolean>(false);
  const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false);

  // const theme = useDeviceTheme();
  const [theme, setTheme] = useState<string>("light");

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const setSelected = (option: number) => {
    switch (option) {
      case 0:
        setIsAboutSelected(true);
        setIsExperienceSelected(false);
        setIsProjectSelected(false);
        scrollToAbout();
        break;
      case 1:
        setIsAboutSelected(false);
        setIsExperienceSelected(true);
        setIsProjectSelected(false);
        scrollToExperience();
        break;
      case 2:
        setIsAboutSelected(false);
        setIsExperienceSelected(false);
        setIsProjectSelected(true);
        break;
      default:
        console.error("Invalid option");
    }
  };

  const setNewTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return {
    isAboutSelected,
    isExperienceSelected,
    isProjectSelected,
    setSelected,
    theme,
    setNewTheme,
    aboutRef,
    experienceRef,
  };
};
