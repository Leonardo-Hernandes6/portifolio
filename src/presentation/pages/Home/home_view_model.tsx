import { useState } from "react";
import { useDeviceTheme } from "../../../application/hooks/useDeviceTheme";

export const useHomeViewModel = () => {
  const [isAboutSelected, setIsAboutSelected] = useState<boolean>(true);
  const [isExperienceSelected, setIsExperienceSelected] =
    useState<boolean>(false);
  const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false);
  // const theme = useDeviceTheme();
  const theme = "dark";

  const setSelected = (option: number) => {
    switch (option) {
      case 0:
        setIsAboutSelected(true);
        setIsExperienceSelected(false);
        setIsProjectSelected(false);
        break;
      case 1:
        setIsAboutSelected(false);
        setIsExperienceSelected(true);
        setIsProjectSelected(false);
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

  return {
    isAboutSelected,
    isExperienceSelected,
    isProjectSelected,
    setSelected,
    theme,
  };
};
