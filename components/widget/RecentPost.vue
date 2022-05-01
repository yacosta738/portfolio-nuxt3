<script setup lang="ts">
import { computed } from 'vue';
import { useArticleStore, useGeneralStore } from '../../store';
import type { IArticle } from '../../models/article';

const articlesStore = useArticleStore();
const generalStore = useGeneralStore();

const recentPosts = computed<IArticle[]>(() => {
  return articlesStore.getLatestArticles(5);
});
</script>

<template>
  <WidgetWrapper v-if="generalStore.getPostId !== -1" title="Recent Post">
    <ul class="flex flex-col relative list-none p-0 my-4">
      <li
        v-for="post in recentPosts"
        :key="post.id"
        class="my-2 flex flex-row text-light-slate font-mono text-base"
      >
        <div class="flex flex-row justify-center items-center">
          <NuxtLink
            :to="post.slug"
            class="flex justify-center items-center inline-link"
          >
            <SvgIcon name="cheveron-right" :width="24" :height="24" />
            <p class="pl-2">
              {{ post.title }}
            </p>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </WidgetWrapper>
</template>

<style scoped></style>
