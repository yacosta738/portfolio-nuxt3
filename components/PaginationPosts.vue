<template>
  <div class="flex justify-between text-xl items-center">
    <NuxtLink :to="previousPage"
              :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showPreviousPage, 'small-button':showPreviousPage }"
              data-cypress="prev" v-text="'prev'">&larr; Prev
    </NuxtLink>
    <div class="text-base" v-text="`page-of currentPage: ${currentPage},  totalPages: ${totalPages}`">Page 1 of 2</div>
    <NuxtLink :to="nextPage"
              :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showNextPage, 'small-button':showNextPage }"
              data-cypress="next" v-text="'next'">Next &rarr;
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  base: {type: String, required: true},
  totalPages: {type: Number, required: true},
  currentPage: {type: Number, required: true},
});

const showPreviousPage = computed(() => {
  return props.currentPage !== 1;
});

const previousPage = computed(() => {
  if (props.currentPage) {
    return [0, 1].includes(props.currentPage - 1)
        ? props.base
        : `${props.base}/${props.currentPage - 1}`;
  } else {
    return 0;
  }
});

const showNextPage = computed(() => {
  return props.currentPage !== props.totalPages;
});

const nextPage = computed(() => {
  if (props.currentPage) {
    return [0, 1].includes(props.currentPage + 1)
        ? props.base
        : `${props.base}/${props.currentPage + 1}`;
  } else {
    return 0;
  }
});
</script>
