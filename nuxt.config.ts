import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
      head: {
          title: 'Nuxt 3 + Tailwind CSS + Pinia',
          meta: [
            { name: 'description', content: 'Nuxt 3 + Tailwind CSS + Pinia' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'charset', content: 'utf-8' },
            { name: 'author', content: 'Your Name' },
            { name: 'keywords', content: 'nuxt, tailwind, pinia' },
            { name: 'robots', content: 'index, follow' },
            { name: 'theme-color', content: '#4a90e2' },
            { name: 'og:title', content: 'Nuxt 3 + Tailwind CSS + Pinia' },
            { name: 'og:description', content: 'Nuxt 3 + Tailwind CSS + Pinia' },
            { name: 'og:image', content: '/images/og-image.png' },
            { name: 'og:url', content: 'https://example.com' },
            { name: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Nuxt 3 + Tailwind CSS + Pinia' },
            { name: 'twitter:description', content: 'Nuxt 3 + Tailwind CSS + Pinia' },
            { name: 'twitter:image', content: '/images/twitter-image.png' },
            { name: 'twitter:site', content: '@your_twitter_handle' },
            { name: 'twitter:creator', content: '@your_twitter_handle' },
            { name: 'twitter:url', content: 'https://example.com' },
            { name: 'twitter:image:alt', content: 'Nuxt 3 + Tailwind CSS + Pinia' },
            { name: 'twitter:label1', content: 'Written by' },
            { name: 'twitter:data1', content: 'Your Name' },
            { name: 'twitter:label2', content: 'Published on' },
            { name: 'twitter:data2', content: 'Date' },
            { name: 'twitter:label3', content: 'Reading time' },
          ]
      }
  },
  //ssr: false,
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