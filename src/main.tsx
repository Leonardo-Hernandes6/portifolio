import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./presentation/pages/Home/home_page.tsx";
import Global_style from "./presentation/global/global_style.ts";
import "./i18n";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global_style />
    <HomePage />
  </StrictMode>,
);
