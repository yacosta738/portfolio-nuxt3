<script setup lang='ts'>
import { useProps } from '~/composables/useProps';
import { useLazyAsyncData, useNuxtApp, useRoute } from '#app';
import { useArticleStore } from '~/store';
import { onMounted } from 'vue';

definePageMeta({
  layout: false,
});
const route = useRoute();
const { $notion } = useNuxtApp();

const { data, pending } = useLazyAsyncData(`notion-${route.params.id}`, () =>
  $notion.getPageBlocks(route.params.id.toString()),
);
const articlesStore = useArticleStore();
onMounted(async () => {
  if (articlesStore.getArticles.length === 0) {
    await articlesStore.fetchArticles();
  }
  const article = articlesStore.getArticleById(route.params.id.toString());
  if (article) {
    articlesStore.setCurrentArticle(article);
  }
});

const { mapPageUrl, pageLinkOptions } = useProps();
</script>

<template>
  <NuxtLayout name='blog'>
    <div v-if='!pending'>
      <NotionRenderer
        :blockMap='data'
        full-page
        prism
        katex
        :map-page-url='mapPageUrl'
        :page-link-options='pageLinkOptions'
      />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </NuxtLayout>
</template>
