// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "dayjs-nuxt",
    "nuxt-lodash",
  ],
  plugins: ["@/plugins/antd"],
  css: ["@/assets/style/main.css", "@egjs/vue3-flicking/dist/flicking.css"],
  tailwindcss: {
    config: {
      theme: {
        screens: {
          sm: "576px",
          // => @media (min-width: 640px) { ... }

          md: "768px",
          // => @media (min-width: 768px) { ... }

          lg: "992x",
          // => @media (min-width: 1024px) { ... }

          xl: "1200px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1400px",
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },
});
