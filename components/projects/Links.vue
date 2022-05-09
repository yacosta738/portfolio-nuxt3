<template>
  <div class="project-links" :class="classProjectLinks">
    <a
      v-if="project.repository"
      :href="project.repository"
      aria-label="GitHub Link"
      :class="classLinks"
    >
      <SvgIcon name="github" height="20" width="20" />
    </a>
    <a
      v-if="project.url"
      :href="project.url"
      aria-label="GitHub Link"
      :class="classLinks"
    >
      <SvgIcon name="external-link" height="20" width="20" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from '@vue/runtime-core';
import type Project from '~/models/project';

const props = defineProps({
  position: {
    type: String,
    default: 'end',
  },
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const classProjectLinks = computed(() => {
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
    return 'mr-2';
  } else if (props.position === 'center') {
    return 'mx-1';
  } else {
    return 'ml-2';
  }
});
</script>

<style scoped>
.project-links {
  @apply flex flex-wrap relative p-0;
}
</style>
