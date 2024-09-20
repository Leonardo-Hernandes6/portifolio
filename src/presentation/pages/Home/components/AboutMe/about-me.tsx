import { useTranslation } from "react-i18next";
import {
  AboutMeContainer,
  AboutMeSpecs,
  AboutMeSpecsContainer,
  AboutMeSpecsSubTitle,
  AboutMeSpecsTitle,
  AboutMeText,
  AboutMeTitle,
} from "./style";

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <AboutMeContainer>
      <AboutMeTitle>{t("aboutMe")}</AboutMeTitle>
      <AboutMeText>{t("aboutMeText1")}</AboutMeText>

      <AboutMeText>{t("aboutMeText2")}</AboutMeText>

      <AboutMeText>{t("aboutMeText3")}</AboutMeText>

      <AboutMeSpecsContainer>
        <AboutMeSpecs>
          <AboutMeSpecsTitle>3 +</AboutMeSpecsTitle>
          <AboutMeSpecsSubTitle>{t("yearsOfExperience")}</AboutMeSpecsSubTitle>
        </AboutMeSpecs>

        <AboutMeSpecs>
          <AboutMeSpecsTitle>11 +</AboutMeSpecsTitle>
          <AboutMeSpecsSubTitle>{t("projects")}</AboutMeSpecsSubTitle>
        </AboutMeSpecs>

        <AboutMeSpecs>
          <AboutMeSpecsTitle>4</AboutMeSpecsTitle>
          <AboutMeSpecsSubTitle>{t("companiesWorked")}</AboutMeSpecsSubTitle>
        </AboutMeSpecs>
      </AboutMeSpecsContainer>
    </AboutMeContainer>
  );
};
