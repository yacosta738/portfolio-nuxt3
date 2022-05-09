<script setup lang="ts">
definePageMeta({
  layout: false,
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
