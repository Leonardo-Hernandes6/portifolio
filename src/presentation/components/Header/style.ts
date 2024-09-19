import styled from "styled-components";
import breakpoint from "../../global/breakpoints";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakpoint.sm1} {
    display: none;
  }
`;
