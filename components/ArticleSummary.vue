<template>
  <div class="flex flex-col">
    <h2
      class="text-3xl md:text-4xl text-center md:text-left font-bold tracking-wider"
    >
      <NuxtLink
        :to="{ path: `/blog/${article.id}` }"
        class="inline-link"
      >
        {{ article.title }}
      </NuxtLink>
    </h2>
    <PostHeader v-if="!hidePostHeaderInSmallScreen" :article="article" />
    <div class="flex flex-col md:flex-row mb-16">
      <img
        v-if="article.cover && article.cover.length > 0"
        :alt="article.cover[0].name"
        class="object-cover md:w-1/3 border border-green-500 md:mr-5"
        :src="article.cover[0].url"
      />
      <div class="text-center md:text-left mt-5 md:mt-0">
        {{ article.summary }}
        <NuxtLink :to="article.id" class="font-bold uppercase inline-link">
          Read
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- end post -->
</template>

<script setup lang="ts">
import IArticle from '../models/article';

defineProps({
  article: {
    type: IArticle,
    required: true,
  },
  hidePostHeaderInSmallScreen: {
    type: Boolean,
    default: false,
  },
});
</script>
