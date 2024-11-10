import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
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
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL
      ),
    },
  };
});
