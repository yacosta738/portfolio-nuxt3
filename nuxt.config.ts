import path from 'path'
import { defineNuxtConfig } from 'nuxt3'
import viteSvgIcons from 'vite-plugin-svg-icons'
export default defineNuxtConfig({
  app: {
    // cdnURL: 'https://d17a2275ko4nj4.cloudfront.net', // upload .output/server/public to cdn when using serverless
  },
  privateRuntimeConfig: {
    PAGE_ID: process.env.PAGE_ID,
    NOTION_URL: process.env.NOTION_URL,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ['graphql'],
  },
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@intlify/nuxt3',
    // './modules/graphql-codegen-module.ts',
    '@nuxt3/graphql-codegen-module',
    // './modules/apollo-module.ts',
    '@nuxt3/apollo-module',
    'vue3-notion/nuxt',
  ],
  css: [
      '@/assets/styles/main.css',
      'vue3-notion/dist/style.css',
  ],
  graphqlCodegen: {
    schema: ['http://localhost:3000/api/graphql'],
  },
  apollo: {
    default: {
      // local graphql server, set URL env when build if using serverless or deploying on unknown port
      uri: process.env.URL ? `${process.env.URL}/api/graphql` : 'http://localhost:3000/api/graphql',
    },
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    rules: [
      ['text-apollo', { color: '#112B49' }],
    ],
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'assets/svgs/')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  },
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
    },
  },
})
