import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "http://www.ifly.com.mx/",
  integrations: [mdx(), sitemap(), react(), tailwind(), partytown()],
  redirects: {
    "/aviones": "/flota/aviones",
    "/simuladores": "/flota/simuladores",
    "/campus": "/nosotros/campus",
    "/galeria": "/nosotros/historia",
    "/aviation-management": "/carreras/aviation-management",
    "/quienes-somos": "/nosotros/equipo",
    "/orgullo-ifly": "/nosotros/historia",
    "/cadet-pilot": "/careeras/cadet-pilot",
    "/pro-pilot": "/carreras/pro-pilot",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
