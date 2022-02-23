<template>
  <ul class="flex flex-col md:flex-row relative list-none p-0 mb-4 text-light-slate font-mono text-sm">
    <li v-if="article.date" class=" flex text-center justify-center my-2 whitespace-nowrap mx-1">
      <Icones :icon="'calendar'" class="scale-50"/>
      <span class="mx-1">{{ formatDateLocale(article.date.toString()) }}</span>
    </li>
    <li v-if="article.timeToRead" class="my-2 whitespace-nowrap mx-1">
      <span v-text="`timeToRead: ${article.timeToRead}`"></span>
    </li>
    <li v-if="article.path" class="my-2 whitespace-nowrap mx-1">
      <NuxtLink :to="article.path" class="flex text-green-500">
        <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
        <DisqusCount shortname='blastkode' :identifier="article.path" class="mx-1"/>
      </NuxtLink>
    </li>
    <li v-if="article.authors && article.authors.length > 0" class="my-2 whitespace-nowrap mx-1">
      <span class="mr-3" v-text="'authors'"></span>
      <NuxtLink v-for="author in article.authors" :key="author.id" :to="urlizeAuthorName(author.firstName)" class="inline-link">
        {{ author.fullName }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import Icones from '@/components/Icones.vue';
import Article from '@/models/Article';
import {formatDate, urlize} from '@/util/utilities';

const props = defineProps({
  article: {
    type: Article,
    required: true,
  },
});

const urlizeAuthorName = (term: string): string => {
  return urlize(term);
}
const formatDateLocale = (date: string, dateFormat = 'MMMM dd, yyyy'): string => {
  return formatDate(date, dateFormat, 'en');
}

</script>
