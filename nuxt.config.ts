import path from 'path';
import { defineNuxtConfig } from 'nuxt';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineNuxtConfig({
  app: {
    // cdnURL: 'https://d17a2275ko4nj4.cloudfront.net', // upload .output/server/public to cdn when using serverless
  },
  publicRuntimeConfig: {
    BLOG_PAGE_ID: process.env.BLOG_PAGE_ID,
    JOBS_PAGE_ID: process.env.JOBS_PAGE_ID,
    PROJECTS_PAGE_ID: process.env.PROJECTS_PAGE_ID,
    TECH_PAGE_ID: process.env.TECH_PAGE_ID,
    NOTION_URL: process.env.NOTION_URL,
    FORMSPREE: process.env.FORMSPREE,
  },
  modules: ['@nuxtjs/tailwindcss', ['vue3-notion/nuxt', { css: true }], '@nuxt/content'],
  buildModules: ['@vueuse/nuxt', '@pinia/nuxt', '@intlify/nuxt3'],
  css: ['@/assets/styles/main.css', 'vue3-notion/dist/style.css'],
  vueuse: {
    ssrHandlers: true,
  },
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
