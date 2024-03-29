<script setup lang="ts">
import Fuse from 'fuse.js';
import { computed, onMounted, ref } from 'vue';
import { useGeneralStore } from '../store';
import type Article from '../models/article';

const generalStore = useGeneralStore();
const query = ref('');
const results = ref<Article[]>([]);
let fuse: Fuse<Article> | undefined;
const options = {
  includeScore: true,
  keys: ['title', 'summary', 'content'],
};

// const resetSearch = watchEffect(() => {
//   if (!generalStore.isOpenSearchModal) query.value = '';
// });

// get isSmallScreen() {
// return this.$screen.breakpoint === 'xs' || this.$screen.breakpoint === 'sm';
// }
const allArticles = computed(() => {
  return [] as Article[];
});
onMounted(() => {
  fuse = new Fuse(allArticles.value, options);
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

<template>
  <div
    v-if="generalStore.isOpenSearchModal"
    class="search-box-container"
    @click.self="generalStore.updateSearchModal(false)"
    @keyup.esc="generalStore.updateSearchModal(false)"
  >
    <div
      class="flex fixed top-5 md:top-24 p-2.5 md:p-5 md:right-3 z-50 cursor-pointer text-2xl md:text-3xl"
      @click="generalStore.updateSearchModal(false)"
    >
      <SvgIcon name="close" class="text-lightest-slate mx-2" />
      <span class="my-0 md:mt-0.5">(ESC)</span>
    </div>
    <div class="search-box">
      <SvgIcon name="search" class="text-lightest-slate m-2" />
      <input
        id="search-box"
        v-model="query"
        type="text"
        autofocus
        class="w-full border-none outline-none text-xl bg-transparent appearance-none"
        @keyup="performSearch()"
        @keyup.esc="generalStore.updateSearchModal(false)"
      />
    </div>
    <div v-if="query && query !== null" class="search-wrapper">
      <h3
        class="text-center text-2xl md:text-5xl border-b border-green-500 text-lightest-slate mb-10"
      >
        {{
          results.length > 0
            ? `Search phrase match ${results.length} pages`
            : `Search Results`
        }}
      </h3>
      <div v-if="results.length > 0" class="overflow-y-auto">
        <div
          v-for="article in results"
          :key="article.id"
          class="flex flex-col mb-2"
        >
          <article-summary
            class="md:w-3/4"
            :article="article"
            :hide-post-header-in-small-screen="isSmallScreen"
            @click="generalStore.updateSearchModal(false)"
          />
        </div>
        <div
          v-if="query && results.length === 0"
          class="flex flex-col justify-center items-center"
        >
          <SvgIcon name="search" />
          <p class="text-light-slate text-2xl my-5">No values found</p>
        </div>
      </div>
    </div>
  </div>
</template>
