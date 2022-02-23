<template>
  <div class="flex flex-col">
    <h2 class="text-3xl md:text-4xl text-center md:text-left font-bold tracking-wider">
      <NuxtLink :to="article.path" class="inline-link">{{ article.title }} </NuxtLink>
    </h2>
    <post-header v-if="!hidePostHeaderInSmallScreen" :article="article"/>
    <div class="flex flex-col md:flex-row mb-16">
      <img alt="Cover image" v-if="article.cover" class="object-cover md:w-1/3 border border-green-500 md:mr-5"
               :src="article.cover" />
      <div class="text-center md:text-left mt-5 md:mt-0">
        {{ article.summary }}
        <NuxtLink :to="article.path" class="font-bold uppercase inline-link">Read</NuxtLink>
      </div>
    </div>
  </div> <!-- end post -->
</template>

<script setup lang="ts">
import Article from '@/models/Article';

const props = defineProps({
  article: {
    type: Article,
    required: true,
  },
  hidePostHeaderInSmallScreen: {
    type: Boolean,
    default: false,
  },
});


</script>
