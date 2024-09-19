import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Rubik", monospace;
    padding: 0;
    margin: 0;
  }

  :root {
    --white: #f5f5f5;
    --darkBlue: #001f3f;
    --disabled: #5F5F5FFF;
  
    --darkBackground: linear-gradient(135deg, #001f3f, #003366);
    --lightBackground: linear-gradient(135deg, #f0f4f8, #e0e6f1);
  }
`;
