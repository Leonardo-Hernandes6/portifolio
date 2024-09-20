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

interface IAboutMe {
  theme: string;
}

export const AboutMe = ({ theme }: IAboutMe) => {
  const { t } = useTranslation();

  return (
    <AboutMeContainer>
      <AboutMeTitle theme={theme}>{t("aboutMe")}</AboutMeTitle>
      <AboutMeText theme={theme}>{t("aboutMeText1")}</AboutMeText>

      <AboutMeText theme={theme}>{t("aboutMeText2")}</AboutMeText>

      <AboutMeText theme={theme}>{t("aboutMeText3")}</AboutMeText>

      <AboutMeSpecsContainer>
        <AboutMeSpecs>
          <AboutMeSpecsTitle theme={theme}>4 +</AboutMeSpecsTitle>
          <AboutMeSpecsSubTitle theme={theme}>
            {t("yearsOfExperience")}
          </AboutMeSpecsSubTitle>
        </AboutMeSpecs>

        <AboutMeSpecs>
          <AboutMeSpecsTitle theme={theme}>11 +</AboutMeSpecsTitle>
          <AboutMeSpecsSubTitle theme={theme}>
            {t("projects")}
          </AboutMeSpecsSubTitle>
        </AboutMeSpecs>

        <AboutMeSpecs>
          <AboutMeSpecsTitle theme={theme}>4</AboutMeSpecsTitle>
          <AboutMeSpecsSubTitle theme={theme}>
            {t("companiesWorked")}
          </AboutMeSpecsSubTitle>
        </AboutMeSpecs>
      </AboutMeSpecsContainer>
    </AboutMeContainer>
  );
};
