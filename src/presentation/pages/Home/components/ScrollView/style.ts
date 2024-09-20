import styled from "styled-components";
import breakpoint from "../../../../global/breakpoints";

export const ScrollViewContainer = styled.div`
  max-width: 25vw;

  @media (${breakpoint.sm1}) {
    max-width: 100vw;
  }
`;
