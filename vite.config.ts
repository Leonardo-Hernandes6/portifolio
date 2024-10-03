import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portifolio/",
  server: {
    host: "127.0.0.1",
    port: 3000,
    https: false,
  },
  plugins: [react()],
});
