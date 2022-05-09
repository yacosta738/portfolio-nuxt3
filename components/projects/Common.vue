<template>
  <div class="flex flex-col items-center">
    <div class="mt-10 mb-20 text-center">
      <h2 class="section-title">{{ $t('project-subtitle') }}</h2>
      <a href="/projects/" class="inline-link">{{ $t('project-view') }}</a>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="project in projectsToShow"
        :key="project.id"
        class="style-project-card"
      >
        <div class="project-top">
          <SvgIcon name="folder" height="25" weight="25" />
          <ProjectsLinks :project="project" position="center"></ProjectsLinks>
        </div>
        <div class="text-center text-3xl text-lightest-slate my-2.5 font-bold">
          {{ project.title }}
        </div>
        <div class="project-description">
          <NotionRenderer
            v-if="project.content"
            :block-map="project.content"
            prism
            katex
          />
        </div>
        <footer class="pb-0">
          <ProjectsTechList
            :project="project"
            position="start"
            :show-icon="false"
          />
        </footer>
      </div>
    </div>
    <button
      v-if="projects.length > 6"
      class="big-button m-5"
      @click="showMore = !showMore"
    >
      {{ showMore ? $t('show-less') : $t('show-more') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { PropType } from '@vue/runtime-core';
import type { IProject } from '~/models/project';
import { inlineLinks } from '~/util/utilities';

const props = defineProps({
  projects: {
    type: Array as PropType<IProject[]>,
    required: true,
  },
});
const showMore = ref(false);
const projectsToShow = computed(() => {
  const GRID_LIMIT = 6;
  const firstSix: IProject[] = props.projects
    ? props.projects.slice(0, GRID_LIMIT)
    : [];
  return showMore.value ? props.projects : firstSix;
});
onMounted(() => {
  inlineLinks('project-description');
});
</script>

<style scoped>
.style-project-card {
  @apply rounded overflow-hidden bg-light-navy w-full h-full px-6 py-2 transform hover:-translate-y-2;
}

.section-title {
  @apply text-center text-3xl text-lightest-slate;
}

.project-top {
  @apply flex justify-between mt-2;
}

.project-top svg {
  color: var(--green);
  width: 40px;
  height: 40px;
}

.project-description {
  @apply text-left;
}
</style>
