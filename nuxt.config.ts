import path from 'path';
import { defineNuxtConfig } from 'nuxt';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineNuxtConfig({
  app: {
    // cdnURL: 'https://d17a2275ko4nj4.cloudfront.net', // upload .output/server/public to cdn when using serverless
  },
  privateRuntimeConfig: {
    PAGE_ID: process.env.PAGE_ID,
    NOTION_URL: process.env.NOTION_URL,
  },
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@intlify/nuxt3',
    'vue3-notion/nuxt',
  ],
  css: ['@/assets/styles/main.css', 'vue3-notion/dist/style.css'],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svgs/')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  },
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {},
  },
});
