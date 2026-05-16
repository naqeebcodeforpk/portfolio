// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/google-fonts'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~~/tailwind.config.js'
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    },
    display: 'swap',
    download: true,
    preconnect: true
  },
  content: {
    documentDriven: false,
    markdown: {
      anchorLinks: false
    }
  },
  app: {
    head: {
      title: 'Naqeeb Ullah'
    }
  }
})
