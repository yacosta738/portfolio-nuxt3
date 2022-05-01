<template>
  <div class="flex flex-col">
    <h2 class="text-3xl md:text-4xl text-center md:text-left font-bold tracking-wider">
      <NuxtLink :to="{ path: `/blog/${article.date}/${article.slug}` }" class="inline-link">
        {{ article.title }}
      </NuxtLink>
    </h2>
    <PostHeader v-if="!hidePostHeaderInSmallScreen" :article="article" />
    <div class="flex flex-col md:flex-row mb-16">
      <img
        v-if="article.cover"
        :alt="article.cover.name"
        class="object-cover md:w-1/3 border border-green-500 md:mr-5"
        src="https://bunkerdb.com/blog/wp-content/uploads/2020/07/Low-code-No-code.jpg"
      >
      <div class="text-center md:text-left mt-5 md:mt-0">
        {{ article.summary }}
        <NuxtLink :to="article.slug" class="font-bold uppercase inline-link">
          Read
        </NuxtLink>
      </div>
    </div>
  </div> <!-- end post -->
</template>

<script setup lang="ts">
import 'reflect-metadata'
import Article from '@/models/article'

const props = defineProps({
  article: {
    type: Article,
    required: true,
  },
  hidePostHeaderInSmallScreen: {
    type: Boolean,
    default: false,
  },
})

</script>
