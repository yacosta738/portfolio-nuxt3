
<h2 align="center">
Nuxt3 + Apollo Starter
</h2><br>

## Preview
[Netlify](https://nuxt3-apollo.netlify.app/)
[Vercel](https://nuxt3-apollo-starter.vercel.app/)
[Server](https://ssr-cdn-node.youbefashion.com/)
[Serverless(aws lambda)](https://ssr-sls.youbefashion.com/)
## Features

- 💚 [Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- 🌞 [@nuxt3/apollo-module](https://github.com/newbeea/nuxt3-apollo-module) - composable query, multiple [apollo clients](https://www.apollographql.com/docs/react/), ssr or client mode
  For example:
  ```
  import { useCountryQuery, usePersonQuery } from '@/generated/operations' // generated by @nuxt3/graphql-codegen-module

  const { result: client, loading: queryLoading } = await useCountryQuery({
    clientId: 'trevorblades',
    prefetch: false, // clientMode, need validate result in template
  })

  const { result: server, loading: jumpLoading, error } = await usePersonQuery({
    personInput: {
      name: 'Phil Xu',
    },
  }, {
    prefetch: true, // ssrMode, default: true
  })

  // use clients directly $apollo.default  $apollo.trevorblades
  // const { $apollo } = useNuxtApp()
  ```

- 💻 [TypeGraphql](https://typegraphql.com/docs/introduction.html) + [Apollo Server](https://www.apollographql.com/docs/apollo-server/) 

- 💼 [@nuxt3/graphql-codegen-module](https://github.com/newbeea/nuxt3-graphql-codegen-module) - generate types and apollo composable query code on every build

- 🌏 [i18n](https://github.com/intlify/nuxt3) customized intlify i18n - set preferred language according to browser, and save user's preferred language to cookie.

- 🧩 Use svg by file name
  For example:
  ```
  // svg file in @/assets/svgs/apollo.svg
  <SvgIcon name="apollo" />
  ```

- ⚡️ Vite - Instant HMR

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/antfu/unocss)

- 🛠 [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs

- 🔥 The `<script setup>` syntax

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy

- 🦾 TypeScript, of course
## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).


### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit newbeea/nuxt3-apollo-starter my-nuxt3-apollo-app
cd my-nuxt3-apollo-app
yarn # npm pnpm may not work properly in production mode
yarn run dev
```


### Deploy
#### Normal server

#### Setup URL environment variable (if you want to use graphql server in server/api/graphql)

setup URL environment when build
for example:
add in package.json
```
"build": "cross-env URL=https://xxx.yourdomain.com nuxi build"
```
build
```
yarn run build
```
start
```
yarn run start
```
#### Serverless(aws lambda) mode

##### Setup cdn 
set cdnURL in nuxt.config.ts

#### Setup URL environment variable (if you want to use graphql server in server/api/graphql)

setup URL environment when build
for example:
add in package.json
```
"build:sls": "cross-env NITRO_PRESET=lambda URL=https://xxx.yourdomain.com nuxi build"
```
##### build with lambda preset
```
yarn run build:sls
```
##### upload static files
upload .output/server/public/* to cdn (cdnURL)

##### custom domain (optional) 
config customDomain in serverless.yml
```
custom:
  customDomain:
    http:
      domainName: xxx.yourdomain.com
      endpointType: regional
      certificateName: yourdomain.com
      createRoute53Record: true
plugins:
  - serverless-domain-manager
```
then
```
yarn run domain
```
#### deploy
```
yarn run deploy
```
then visit xxx.yourdomain.com





### Inspiration
[antfu/vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3)
