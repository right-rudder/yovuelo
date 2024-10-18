/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#231f20",
        "main-blue": "#00a3e4",
        "main-red": "#c82626",
        "main-purple": "#b252a0",
        "main-orange": "#f58632",
      },
      backgroundImage: {
        "our-story": "url('/src/assets/avion-de-ifly-volando.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
