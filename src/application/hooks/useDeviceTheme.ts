import { useState, useEffect } from "react";

export const useDeviceTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    setTheme(matchMedia.matches ? "dark" : "light");

    matchMedia.addEventListener("change", updateTheme);

    return () => {
      matchMedia.removeEventListener("change", updateTheme);
    };
  }, []);

  return theme;
};
