<template>
  <footer>
    <div
      class="container mx-auto flex flex-col lg:flex-row items-center justify-center m-5"
    >
      <div class="flex flex-col items-center">
        <ul class="flex flex-wrap relative list-none p-0 md:hidden">
          <li
            v-for="social in sMedia"
            :key="social.name"
            class="my-2 text-light-slate font-mono text-3xl whitespace-nowrap mx-1"
          >
            <a :href="social.url" target="_blank">
              <SvgIcon
                :name="social.name.toLowerCase()"
                height="30"
                width="30"
              />
            </a>
          </li>
        </ul>
        <p class="text-sm text-lightest-slate font-mono">
          Built by Yuniel Acosta
        </p>
        <p class="text-xs text-light-slate font-mono my-2">
          Design based on Brittany Chiang portfolio
        </p>
        <ul class="flex flex-wrap relative list-none p-0">
          <li class="my-2 text-light-slate font-mono whitespace-nowrap mx-1">
            <SvgIcon name="vuejs" height="15" width="15" />
          </li>
          <li class="my-2 text-light-slate font-mono whitespace-nowrap mx-1">
            <SvgIcon name="graphql" height="15" width="15" />
          </li>
          <li class="my-2 text-light-slate font-mono whitespace-nowrap mx-1">
            <SvgIcon name="netlify" height="15" width="15" />
          </li>
          <li class="my-2 text-light-slate font-mono whitespace-nowrap mx-1">
            <SvgIcon name="nuxtjs" height="15" width="15" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socialMedia } from '../models/configuration';

const sMedia = socialMedia;
</script>

<style scoped></style>
