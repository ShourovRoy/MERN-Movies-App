import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://backend:3000",
      "/uploads/": "http://backend:3000",
    },
  },
 preview: {
  host: true,
  port: 8000
 }
});
