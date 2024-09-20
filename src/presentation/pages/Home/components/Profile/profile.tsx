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

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <ProfileContainer>
      <ProfileCard />
      <ProfileTitle>{t("hiIm")} Leonardo Hernandes</ProfileTitle>
      <ProfileSubitle> {t("softwareEnginner")} </ProfileSubitle>

      <ProfileItemsContainer>
        <ProfileItems> {t("email")}: leoxhpp@gmail.com </ProfileItems>
        <ProfileItems> {t("age")}: 23 anos </ProfileItems>
        <ProfileItems> {t("from")}: Brasília, Distrito Federal </ProfileItems>
      </ProfileItemsContainer>

      <ProfileActionsContainer>
        <ProfileActionsButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/leonardo-hernandes6/")
          }
        >
          <FaLinkedin size={"2rem"} />
        </ProfileActionsButton>

        <ProfileActionsButton
          onClick={() => window.open("https://github.com/Leonardo-Hernandes")}
        >
          <FaSquareGithub size={"2rem"} />
        </ProfileActionsButton>
        <ProfileActionsButton
          onClick={() => window.open("https://wa.me/5561983788091")}
        >
          <FaSquareWhatsapp size={"2rem"} />
        </ProfileActionsButton>
      </ProfileActionsContainer>
    </ProfileContainer>
  );
};
