<template>
  <footer>
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center m-5">
      <div class="flex flex-col items-center">
        <ul class="flex flex-wrap relative list-none p-0 md:hidden">
          <li class="my-2 text-light-slate font-mono text-3xl whitespace-nowrap mx-1" v-for="social in sMedia">
            <a :href="social.url" target="_blank">
              <Icones :icon="social.name.toLowerCase()"/>
            </a>
          </li>
        </ul>
        <p class="text-sm text-lightest-slate font-mono">Built by Yuniel Acosta</p>
        <p class="text-xs text-light-slate font-mono my-2">Design based on Brittany Chiang portfolio </p>
        <ul class="flex flex-wrap relative list-none p-0">
          <li class="my-2 text-light-slate font-mono text-xs whitespace-nowrap mx-1">
            <Icones icon="vuejs" class="scale-50"/>
          </li>
          <li class="my-2 text-light-slate font-mono text-xs whitespace-nowrap mx-1">
            <Icones icon="graph-ql" class="scale-50"/>
          </li>
          <li class="my-2 text-light-slate font-mono text-xs whitespace-nowrap mx-1">
            <Icones icon="netlify" class="scale-50"/>
          </li>
          <li class="my-2 text-light-slate font-mono text-xs whitespace-nowrap mx-1">
            <Icones icon="nuxtjs" class="scale-50"/>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Icones from '@/components/Icones.vue';
import {socialMedia} from "~/models/Configuration";

const sMedia = socialMedia;
</script>

<style scoped>

</style>
