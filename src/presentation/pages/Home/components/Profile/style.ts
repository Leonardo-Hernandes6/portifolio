import styled from "styled-components";
import breakpoint from "../../../../global/breakpoints";

export const ProfileContainer = styled.div`
  flex-direction: column;
  @media (${breakpoint.sm1}) {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const ProfileTitle = styled.p`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2rem;

  @media (${breakpoint.sm1}) {
    text-align: center;
  }
`;

export const ProfileSubitle = styled.p`
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.4rem;
`;

export const ProfileItemsContainer = styled.div`
  margin-top: 1rem;
`;

export const ProfileItems = styled.p`
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 0.4rem;
`;

export const ProfileActionsContainer = styled.div`
  width: 100%;
  margin-top: 8rem;

  @media (${breakpoint.sm1}) {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export const ProfileActionsButton = styled.button`
  padding: 0;
  margin: 0.4rem 0.2rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;

  transition: color 0.6s ease;

  &:hover {
    color: var(--disabled);
  }
`;
