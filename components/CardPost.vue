<template>
  <article class="relative">
    <div class="card-post bg-light-navy shadow-2xl rounded-lg tracking-wide">
      <div
          class="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg rounded-b-none"
          :style="`background-image: url('${(typeof article.cover === 'string')?article.cover:article.cover.src}');`">
        <div
            class="absolute top-0 right-0 left-0 flex justify-between items-center px-4 bg-black bg-opacity-50 rounded-lg rounded-b-none">
          <div class="">
            <button v-for="category in article.categories" :key="category.id"
                    class="small-button mx-1 p-2">
              {{ category.title }}
            </button>
          </div>
          <div class="text-lightest-slate font-regular flex flex-col justify-start items-center text-center">
            <span class="text-3xl leading-0 font-semibold">{{ article.timeToRead }}</span>
            <span class="-mt-3 text-xl">Min</span>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 mt-2">
        <h2 class="title tracking-normal">
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </h2>
        <p class="line-clamp-4 md:line-clamp-3 hover:line-clamp-none px-2">
          {{ article.summary }}
        </p>
        <div class="flex items-center justify-between mt-2 mx-6">
          <NuxtLink :to="article.path" :aria-label="`To post ${article.title}`"
                  class="inline-link text-xs -ml-3 ">Read More
          </NuxtLink>
          <NuxtLink :to="article.path" class="flex text-green-500">
            <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <DisqusCount shortname='blastkode' :identifier="article.path" class="mx-1"/>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-2 mt-5">
          <!--Author's profile photo-->
          <img
              class="w-10 h-10 object-cover object-center rounded-full"
              :src="author.image"
              alt="random user"
          />
          <div>
            <!--Author name-->
            <NuxtLink :to="author.path" class="inline-link font-semibold">{{ article.author }}</NuxtLink>
            <p class="text-gray-500 font-semibold text-sm">
              {{ author.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<!--<static-query>-->
<!--  query Authors {-->
<!--    author: allAuthor(sortBy: "title", order: DESC) {-->
<!--      totalCount-->
<!--      edges {-->
<!--        node {-->
<!--          id-->
<!--          name-->
<!--          path-->
<!--          role-->
<!--          image-->
<!--          lang-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</static-query>-->
<script setup lang="ts">
import Article from '@/models/Article';
// @ts-ignore
import {DisqusCount} from 'vue-disqus';
import {computed} from "vue";
import Author from "~/models/Author";

const props = defineProps({
  article: {
    type: Article,
    required: true,
  },
});

const author = computed<Author>(() => {
  return new Author("a144srewr", "Yuniel", "en", "/author/yuniel", "developer", "Muela larga", "https://i.pravatar.cc/300?u=a144srewr", "some content");
});
</script>

<style lang="scss" scoped>
.card-post {
  min-height: 560px;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  @apply text-green-500 hover:text-lightest-slate;
}
</style>
