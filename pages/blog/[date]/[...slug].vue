<script setup lang="ts">
import { computed } from 'vue';
import { useArticleStore, useGeneralStore } from '../../../store';

definePageMeta({
  layout: false,
});
const route = useRoute();

const articleStore = useArticleStore();
const generalStore = useGeneralStore();
const article = computed(() => {
  console.log('[------------------------------------------------]');
  if (articleStore.articles.length === 0) articleStore.fetchArticles();

  const a = articleStore.getArticleBySlug(route.params.slug.toString());
  console.log(a);
  console.log('[------------------------------------------------]');
  console.log(articleStore.articles);
  return a;
});
</script>

<template>
  <NuxtLayout name="blog">
    <div>
      <h1>Hola Mundo 2</h1>

      <!--      <NotionRenderer-->
      <!--        :blockMap="articlesStore.getArticleBySlug($route.params.slug.toString())"-->
      <!--        fullPage-->
      <!--        prism-->
      <!--        katex-->
      <!--      />-->
    </div>
  </NuxtLayout>
</template>
