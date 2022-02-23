<template>
  <NuxtLayout name="default" aside>
    <div class="container-inner mx-auto pl-10 py-16">
      <div v-for="post in articles" :key="post.id" class="border-gray-400 border-b mb-20">
        <ArticleSummary :article="post" />
      </div> <!-- end post -->

      <PaginationPosts
          v-if="totalPages > 1"
          base="/blog"
          :totalPages="totalPages"
          :currentPage="currentPage"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useAsyncData, useNuxtApp} from "#app";
import Article from "~/models/Article";
import {computed} from "vue";
import {definePageMeta} from "nuxt3/dist/pages/runtime/composables";

definePageMeta({
  layout: false,
});
const {$notion} = useNuxtApp()
const {data} = await useAsyncData("notion-index", () => $notion.getPageTable(process.env.PAGE_ID, process.env.NOTION_URL))
const articles = (data.value as Array<any>).map(post => Article.fromJson(post))

const totalPages = computed(() => {
  return articles.length;
});

const currentPage = computed({
  get() {
    return 1;
  },
  set(value) {
    return value;
  },
});

</script>

