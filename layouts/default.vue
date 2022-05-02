<script setup lang="ts">
import { computed } from 'vue';
import { useGeneralStore } from '../store';

const generalStore = useGeneralStore();
defineProps({
  aside: {
    type: Boolean,
    default: false,
  },
});
const theme = computed(() => {
  return generalStore.theme;
});
</script>

<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-light-slate leading-normal flex flex-col min-h-screen"
    :class="theme"
  >
    <div id="page-wrapper">
      <Navbar />
      <div class="flex flex-wrap flex-col md:flex-row justify-around">
        <transition name="fade" appear>
          <main ref="content" class="flex-grow mt-8 md:mt-20 lg:mt-15">
            <slot />
          </main>
        </transition>
      </div>
      <Social />
      <Email />
      <AppFooter />
    </div>
  </div>
</template>

<style src="../assets/styles/main.css" />
