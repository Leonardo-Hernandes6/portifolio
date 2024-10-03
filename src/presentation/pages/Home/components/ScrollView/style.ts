import styled from "styled-components";
import breakpoint from "../../../../global/breakpoints";

export const ScrollViewContainer = styled.div`
  max-width: 30vw;
  height: 79vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  @media (${breakpoint.sm1}) {
    max-width: 100vw;
    height: 80vh;
  }
`;
