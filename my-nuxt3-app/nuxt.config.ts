// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/content'
    , 'vuetify-nuxt-module'
  ],
  content: {
    highlight: {
      theme: 'github-light'
    }
  },
  devtools: { enabled: true }
})
