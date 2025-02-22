import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    "@": path.resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
