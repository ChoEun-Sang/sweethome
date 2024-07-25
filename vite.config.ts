import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "./dist/report.html",
          open: true,
          gzipSize: true,
          brotliSize: true
        }) as PluginOption
      ]
    }
  },
  base: "/sweethome",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
});
