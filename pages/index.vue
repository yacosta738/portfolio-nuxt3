<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="container mx-auto px-4">
      <SectionHero />
      <SectionAbout />
      <SectionJobs />
      <SectionProjects />
      <!--    <last-articles/>-->
      <SectionContact />
    </div>
  </NuxtLayout>
</template>
