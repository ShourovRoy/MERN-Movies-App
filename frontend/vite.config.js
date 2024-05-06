import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api/": "http://localhost:3000",
//       "/uploads/": "http://localhost:3000",
//     },
//   },
  
//  preview: {
//   host: true,
//   port: 8000
//  }
// });

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://localhost:3000",
      "/uploads/": "http://localhost:3000",
    },
   watch: {
    usePolling: true,
   },
   host: true, // Here
   strictPort: true,
   port: 8000, 
 }})
