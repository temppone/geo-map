import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

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
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.js"],
    testMatch: ["./src/tests/**/*.test.jsx"],
    exclude: [...configDefaults.exclude, "node_modules/"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx,js,jsx}"],
      all: true,
    },
  },
});
