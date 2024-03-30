// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Will be available in both server and client
    tokenSecret: process.env.TOKEN_SECRET,
    tokenExpiration: process.env.TOKEN_EXPIRES,
    tokenName: process.env.TOKEN_NAME,
    databaseUrl: process.env.DATABASE_URL
  },

  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],

  devtools: {
    enabled: true
  },
})
