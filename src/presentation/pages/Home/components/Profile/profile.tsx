import { useTranslation } from "react-i18next";
import { ProfileCard } from "../../../../components/ProfileCard/profile_card";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

import {
  ProfileActionsButton,
  ProfileActionsContainer,
  ProfileContainer,
  ProfileItems,
  ProfileItemsContainer,
  ProfileSubitle,
  ProfileTitle,
} from "./style";

interface IProfile {
  theme: string;
}

export const Profile = ({ theme }: IProfile) => {
  const { t } = useTranslation();

  return (
    <ProfileContainer>
      <ProfileCard />
      <ProfileTitle theme={theme}>{t("hiIm")} Leonardo Hernandes</ProfileTitle>
      <ProfileSubitle theme={theme}> {t("softwareEnginner")} </ProfileSubitle>

      <ProfileItemsContainer>
        <ProfileItems theme={theme}>
          {" "}
          {t("email")}: leoxhpp@gmail.com{" "}
        </ProfileItems>
        <ProfileItems theme={theme}> {t("age")}: 23 anos </ProfileItems>
        <ProfileItems theme={theme}>
          {" "}
          {t("from")}: Brasília, Distrito Federal{" "}
        </ProfileItems>
      </ProfileItemsContainer>

      <ProfileActionsContainer>
        <ProfileActionsButton
          theme={theme}
          onClick={() =>
            window.open("https://www.linkedin.com/in/leonardo-hernandes6/")
          }
        >
          <FaLinkedin size={"2rem"} />
        </ProfileActionsButton>

        <ProfileActionsButton
          theme={theme}
          onClick={() => window.open("https://github.com/Leonardo-Hernandes")}
        >
          <FaSquareGithub size={"2rem"} />
        </ProfileActionsButton>
        <ProfileActionsButton
          theme={theme}
          onClick={() => window.open("https://wa.me/5561983788091")}
        >
          <FaSquareWhatsapp size={"2rem"} />
        </ProfileActionsButton>
      </ProfileActionsContainer>
    </ProfileContainer>
  );
};
