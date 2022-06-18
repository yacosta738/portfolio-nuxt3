<script setup lang="ts">
import { computed } from 'vue';
import type { IArticle } from '~/models/article';
import { useArticleStore } from '~/store';

const articlesStore = useArticleStore();

const recentPosts = computed<IArticle[]>(() => {
  return articlesStore
    .getLatestArticles(6)
    .filter(article => article.id !== articlesStore.currentArticle.id);
});
</script>

<template>
  <WidgetWrapper v-if="articlesStore.getCurrentArticle" title="Recent Post">
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
