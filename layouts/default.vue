<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useGeneralStore } from '../store';

const generalStore = useGeneralStore();
const props = defineProps({
  aside: {
    type: Boolean,
    default: false,
  },
});
const theme = computed(() => {
  return generalStore.theme;
});

const fetchBrowserLocale = () => {
  const lang: string | null = localStorage?.getItem('lang');
  const fetchedLocale: string = lang || navigator.language.split('-')[0];
  // this.loadLanguageAsync(fetchedLocale).catch(() => {
  //   console.log('Async language fetch failed');
  // });
};

onMounted(() => {
  console.log('------------------------- onMounted -------------------------');
  if (process.client) fetchBrowserLocale();
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
            <ScrollTop />
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
