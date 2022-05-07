<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="container mx-auto px-4">
      <Hero />
      <About />
      <Jobs />
      <!--    <projects/>-->
      <!--    <last-articles/>-->
      <!--    <Contact/>-->
    </div>
  </NuxtLayout>
</template>
