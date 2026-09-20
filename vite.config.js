import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["message-dapp.onrender.com"],
  },
  preview: {
    allowedHosts: true,
  },
});
