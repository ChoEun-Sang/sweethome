import { defineConfig, type PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react";
import path from "path";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngQuant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

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
        }) as PluginOption,
        viteImagemin({
          plugins: {
            jpg: imageminMozjpeg(),
            png: imageminPngQuant()
          },
          makeWebp: {
            plugins: {
              jpg: imageminWebp(),
              png: imageminWebp()
            }
          }
        })
      ],
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          reactRouter: ["react-router-dom"],
          swiperBundle: ["swiper"]
        }
      }
    }
  },
  base: "/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
});
