import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sjdev-portfolio/", // 👈 이 줄을 추가하세요! (레포지토리 이름)
});
