<template>
  <ul class="project-tech-list" :class="classProjectList">
    <li
      v-for="tech in technologies"
      :key="tech.id"
      class="my-2 text-light-slate font-mono text-xs whitespace-nowrap"
      :class="classLinks"
    >
      <a v-if="tech.url" class="flex" :href="tech.url">
        <SvgIcon
          v-if="showIcon && tech.icon"
          :name="tech.icon.toLowerCase()"
          height="15"
          width="15"
        />
        <span class="mx-1">{{ tech.title }}</span>
      </a>
      <span v-else>{{ tech.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { PropType } from '@vue/runtime-core';
import type Project from '~/models/project';
import type { ITech } from '~/models/tech';
import { useTechStore } from '~/store';
const techStore = useTechStore();
const props = defineProps({
  position: {
    type: String,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const classProjectList = computed(() => {
  if (props.position === 'end') {
    return 'justify-end';
  } else if (props.position === 'center') {
    return 'justify-center';
  } else {
    return 'justify-start';
  }
});
const classLinks = computed(() => {
  if (props.position === 'end') {
    return 'ml-3';
  } else if (props.position === 'center') {
    return 'mx-2';
  } else {
    return 'mr-3';
  }
});
onMounted(async () => {
  if (techStore.technologies.length === 0) {
    await techStore.fetchTechnologies();
  }
});
const technologies = computed((): ITech[] => {
  if (props.project?.tech?.length === 0) {
    return [];
  }
  const techIds = props.project?.tech?.map(tech => tech.id);
  return techStore.technologies.filter(tech => techIds?.includes(tech.id));
});
</script>

<style scoped>
.project-tech-list {
  z-index: 2;
  @apply flex flex-wrap relative list-none p-0 my-4;
}
</style>
