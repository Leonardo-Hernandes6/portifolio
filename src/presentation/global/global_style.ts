import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Rubik", monospace;
    padding: 0;
    margin: 0;
  }

  :root {
    --white: #BEBEBEFF;
    --yellow: #CFAC0EFF;
    --darkBlue: #001f3f;
    --disabled: #5F5F5FFF;
  
    --darkBackground: linear-gradient(to right, #141e30, #243b55);;
    --lightBackground: linear-gradient(to right, rgba(196,196,196,1) 0%, rgba(240,240,244,1) 100%, rgba(0,212,255,1) 100%);;
  }
`;
