<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useArticleStore } from '../../store';

definePageMeta({
  title: 'Blog',
  keepalive: true,
  layout: false,
});
const articlesStore = useArticleStore();

onMounted(async () => {
  console.log(
    '----------------------------------- mounted -----------------------------------'
  );
  if (articlesStore.articles.length === 0) {
    await articlesStore.fetchArticles();
    console.log(
      '----------------------------------- articles fetched -----------------------------------'
    );
  } else {
    console.log('articles already fetched');
  }
  console.log(
    '----------------------------------- end mounted -----------------------------------'
  );
});

const currentPage = computed({
  get() {
    return 1;
  },
  set(value) {
    return value;
  },
});
const articles = computed(() => {
  return articlesStore.getAllArticles;
});
</script>

<template>
  <NuxtLayout name="blog" aside>
    <div
      v-if="articles && articles.length > 0"
      class="container-inner mx-auto pl-10 py-16"
    >
      <div
        v-for="post in articles"
        :key="post.id"
        class="border-gray-400 border-b mb-20"
      >
        <ArticleSummary :article="post" />
      </div>
      <!-- end post -->

      <PaginationPosts
        v-if="articles && articles.length > 1"
        base="/blog"
        :total-pages="articles.length"
        :current-page="currentPage"
      />
    </div>
    <div v-else>
      <div class="container-inner mx-auto pl-10 py-16">
        <div class="text-center">
          <h1 class="text-3xl font-bold">No articles found</h1>
          <p class="text-gray-600">Try searching for something else.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
