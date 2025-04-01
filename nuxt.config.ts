import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    //'@': resolve(__dirname, "/"),
    'assets': "/<rootDir></rootDir>/assets"
  },
  css: [
    "~/assets/main.scss"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content', '@pinia/nuxt']
})