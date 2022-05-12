<script setup lang="ts">
import { onMounted } from 'vue';
import { useProjectStore } from '~/store';

definePageMeta({
  title: 'All Projects',
  layout: false,
});
const projectStore = useProjectStore();

onMounted(() => {
  if (projectStore?.projects?.length === 0) {
    projectStore.fetchProjects();
  }
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex container mx-auto">
      <ProjectsList :projects="projectStore.getProjects" />
    </div>
  </NuxtLayout>
</template>
