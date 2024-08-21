import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Adjust if deploying to a subdirectory
  build: {
    // This ensures correct paths for assets in production
    outDir: "dist", // This is the default output folder
  },
});
