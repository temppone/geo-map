import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react()],
  resolve: {
    "@": path.resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.js"],
    testMatch: ["./src/tests/**/*.test.jsx"],
    globals: true,
  },
});
