import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "",
  root: "src",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8000,
    host: "0.0.0.0",
  },
  preview: {
    port: 8000,
    host: "0.0.0.0",
  },
});
