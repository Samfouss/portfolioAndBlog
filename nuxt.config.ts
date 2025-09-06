// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  css: ['~/assets/css/main.css']
})