import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    css: [
        // CSS files in the project
        '@/assets/styles/main.css',
        'vue3-notion/dist/style.css'
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    buildModules: [
        '@pinia/nuxt',
        'vue3-notion/nuxt'
    ],
    meta: {
        title: 'Blastkode',
        description: 'Yuniel\'s portfolio and Personal blog',
        keywords: 'yuniel acosta, portfolio, personal blog',
        link: [
            {rel: 'preconnect', href: 'https://fonts.googleapis.com"'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Raleway:wght@600&display=swap'
            },
        ],
    }
});