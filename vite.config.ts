import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/": {
        target: "http://localhost:5173", // your dev server
        changeOrigin: true,
        // rewrite: (path) => "/", // Removed unused rewrite function
      },
    },
  },
});
