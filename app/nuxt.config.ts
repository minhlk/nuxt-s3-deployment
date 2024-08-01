// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      myPublicValue: 'haha hihi'
    }
  },

  ssr: false,
  // nitro: {
  //   preset: 'static',
  //   serveStatic: true
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: ["@pinia/nuxt"]
})