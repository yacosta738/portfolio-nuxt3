<script setup lang="ts">
import { computed } from 'vue';
import type { ITag } from '~/models/tag';
import { useArticleStore } from '~/store';
const articlesStore = useArticleStore();

const allTags = computed(() => articlesStore.getAllTags);

const totalCount = computed(() => allTags.value.length);

function textSize(tag: ITag): string {
  const totalCountInPost: number = tag.count && tag.count > 0 ? tag.count : 1;
  const percent = (totalCountInPost / this.totalCount) * 100;
  if (percent <= 12.5) return 'text-base';
  else if (percent > 12.5 && percent <= 25) return 'text-lg';
  else if (percent > 25 && percent <= 37.5) return 'text-xl';
  else if (percent > 37.5 && percent <= 50) return 'text-2xl';
  else if (percent > 50 && percent <= 62.5) return 'text-3xl';
  else if (percent > 62.5 && percent <= 75) return 'text-4xl';
  else if (percent > 75 && percent <= 87.5) return 'text-5xl';
  else return 'text-6xl';
}
</script>

<template>
  <WidgetWrapper v-if="totalCount > 0" title="Tags">
    <div class="tag-cloud-tags">
      <NuxtLink
        v-for="tag in allTags"
        :key="tag"
        to="/"
        :aria-label="`${tag.name} (${tag.name} posts)`"
        :class="textSize(tag)"
        class="inline-link"
      >
        {{ tag.name }}
      </NuxtLink>
    </div>
  </WidgetWrapper>
</template>

<style scoped lang="scss">
.tag-cloud-tags {
  display: block;
  margin: 0;
  list-style-type: none;
  a {
    display: inline-block;
    padding: 0.3rem;
    line-height: 1em;
    word-break: break-word;
    white-space: normal;
  }
  a:nth-child(5n + 1) {
    transform: rotate(-2deg);
  }
  a:nth-child(3n + 3) {
    transform: rotate(1deg);
  }
  a:nth-child(3n + 4) {
    transform: rotate(-3deg);
  }
  a:nth-child(5n + 5) {
    transform: rotate(3deg);
  }
}
</style>
