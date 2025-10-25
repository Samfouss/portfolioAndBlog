// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default", // URLs: /en/about, /fr/about, /about (default)
    langDir: "locales/",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  devtools: { enabled: true },
});
