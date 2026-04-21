// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src/client",

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8787", // will prefix anything /api to the backend localhost port (local development proxy)
        },
      },
    },
  },

  integrations: [react()],
});
