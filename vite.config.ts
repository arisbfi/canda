import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteBabel from "vite-plugin-babel";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    react(),
    viteBabel({
      babelConfig: {
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
