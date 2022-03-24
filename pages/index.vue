<template>
  <NuxtLayout name="custom">
    <div>
      <Hero />
      <About />
      <Jobs />
      <!--    <projects/>-->
      <!--    <last-articles/>-->
      <!--    <Contact/>-->
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
