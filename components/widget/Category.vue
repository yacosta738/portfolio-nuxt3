<script setup lang="ts">
import { computed } from 'vue';
import { useArticleStore } from '../../store';

const articlesStore = useArticleStore();

const allCategories = computed(() => articlesStore.getAllCategories);

const totalCount = computed(() => allCategories.value.length);
</script>

<template>
  <WidgetWrapper v-if="totalCount > 0" title="Categories">
    <ul class="flex flex-col relative list-none p-0 my-4">
      <li
        v-for="category in allCategories"
        :key="category"
        class="my-2 flex flex-row text-light-slate font-mono text-base whitespace-nowrap"
      >
        <NuxtLink to="/" class="inline-link">
          <div class="flex flex-row justify-center items-center">
            <SvgIcon name="cheveron-right" :width="24" :height="24" />
            <p class="pl-2">
              {{ category.name }}
            </p>
          </div>
        </NuxtLink>
        <p>({{ category.count }})</p>
      </li>
    </ul>
  </WidgetWrapper>
</template>

<style scoped></style>
