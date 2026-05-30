import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://samuelinmex.github.io",
  base: "/caribemid-web",
  vite: {
    plugins: [tailwindcss()],
  },
});