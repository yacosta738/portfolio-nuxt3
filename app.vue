<script setup lang="ts">
import 'virtual:svg-icons-register';
useMeta({
  title: 'YAP',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  link: [{ rel: 'shortcut icon', href: '/favicon.ico' }],
});
const { setPreferredLanguage } = useLocal();
setPreferredLanguage();
</script>

<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style lang="css">
#app {
  @apply min-h-screen font-sans;
}
</style>
