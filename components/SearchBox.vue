<template>
  <div v-if="generalStore.isOpenSearchModal" @click.self="generalStore.updateSearchModal( false)"
       @keyup.esc="generalStore.updateSearchModal( false)"
       class="search-box-container">
    <div class="flex fixed top-5 md:top-24 p-2.5 md:p-5 md:right-3 z-50 cursor-pointer text-2xl md:text-3xl"
         @click="generalStore.updateSearchModal( false)">
      <Icones class="text-lightest-slate mx-2" :icon="'close'"/>
      <span class="my-0 md:mt-0.5">(ESC)</span>
    </div>
    <div class="search-box">
      <Icones class="text-lightest-slate m-2" :icon="'search'"/>
      <input id="search-box"
             type="text"
             v-model="query"
             @keyup="performSearch()"
             @keyup.esc="generalStore.updateSearchModal(false)"
             autofocus
             class="w-full border-none outline-none text-xl bg-transparent appearance-none">
    </div>
    <div class="search-wrapper" v-if="query && query !== null">
      <h3 class="text-center text-2xl md:text-5xl border-b border-green-500 text-lightest-slate mb-10">
        {{ results.length > 0 ? `Search phrase match ${results.length} pages` : `Search Results` }}
      </h3>
      <div class="overflow-y-auto">
        <div v-if="results.length > 0" v-for="article in results" :key="article.id"
             class="flex flex-col mb-2">
          <article-summary class="md:w-3/4" :article="article" :hide-post-header-in-small-screen="isSmallScreen"
                           @click="generalStore.updateSearchModal(false)"/>
        </div>
        <div v-if="query && results.length === 0" class="flex flex-col justify-center items-center">
          <Icones :icon="'search'"/>
          <p class="text-light-slate text-2xl my-5">No values found</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleSummary from '@/components/ArticleSummary.vue';
import Icones from '@/components/Icones.vue';
import Article from '@/models/Article';
import Fuse from 'fuse.js';
import {ref, computed, watchEffect, onMounted} from 'vue';
import {useGeneralStore} from "~/store";

const generalStore = useGeneralStore();
const query = ref('');
const results = ref<Article[]>([]);
let fuse: Fuse<Article> | undefined;
const options = {
  includeScore: true,
  keys: ['title', 'summary', 'content']
};

const resetSearch = watchEffect(() => {
  if (!generalStore.isOpenSearchModal) {
    query.value = '';
  }
});

onMounted(() => {
  fuse = new Fuse(allArticles.value, options);

});


// get isSmallScreen() {
// return this.$screen.breakpoint === 'xs' || this.$screen.breakpoint === 'sm';
// }
const allArticles = computed(() => {
  return [] as Article[];
});

const isSmallScreen = computed(() => {
  // https://reegodev.github.io/vue-screen/guide/configuration/composition-api.html
  // this.$screen.breakpoint === 'xs' || this.$screen.breakpoint === 'sm';
  return false;
});

const performSearch = () => {
  const fuseResults = fuse?.search(query.value);
  results.value = fuseResults ? fuseResults.map(r => r.item) : [];
};


</script>