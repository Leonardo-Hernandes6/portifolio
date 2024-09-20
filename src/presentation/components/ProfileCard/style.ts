import styled from "styled-components";
import breakpoint from "../../global/breakpoints";

export const ProfileCardContainer = styled.div`
  height: 18rem;
  width: 14rem;
  background-color: #ddd;
  border-radius: 2rem;

  @media (${breakpoint.sm1}) {
    margin-top: 2rem;
  }
`;
