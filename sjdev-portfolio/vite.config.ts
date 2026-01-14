import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sjdev-portfolio/", // 👈 이 줄이 반드시 있어야 합니다!
});
