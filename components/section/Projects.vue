<template>
  <section id="projects" class="mx-4 md:mx-auto">
    <ProjectsFeatured
      v-if="projectStore.getFeaturedProjects.length > 0"
      :projects="projectStore.getFeaturedProjects"
    />
    <ProjectsCommon
      v-if="projectStore.getCommonProjects.length > 0"
      :projects="projectStore.getCommonProjects"
    />
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useProjectStore } from '~/store';
const projectStore = useProjectStore();
onMounted(() => {
  if (projectStore.projects.length === 0) {
    projectStore.fetchProjects();
  }
});
</script>
