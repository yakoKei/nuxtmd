// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/content'
    , 'vuetify-nuxt-module'
  ],
  content: {
    highlight: {
      theme: 'github-light'
    }
    // ,markdown: {
    //   remarkPlugins: [],
    //   rehypePlugins: [],
    // }
  },
  devtools: { enabled: true }
})
