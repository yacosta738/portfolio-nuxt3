<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-light-slate leading-normal flex flex-col min-h-screen"
    :class="theme"
  >
    <SearchBox />
    <div id="page-wrapper" :class="{'filter blur':generalStore.isOpenSearchModal}">
      <Navbar />
      <div class="flex flex-wrap flex-col md:flex-row justify-around">
        <transition name="fade" appear>
          <main ref="content" class="flex-grow mt-8 md:mt-20 lg:mt-15">
            <slot />
<!--            <ScrollTop />-->
          </main>
        </transition>
        <transition v-if="aside" name="fade" mode="out-in" appear>
          <aside id="sidebar" class="w-auto md:w-80 mt-2 md:mr-80 md:mt-20 lg:mt-15">
            <div class="my-2 md:my-16">
              <span>Hi, I'm an aside section</span>
              <!--              <recent-post-widget/>-->
              <!--              <tag-cloud-widget/>-->
              <!--              <category-widget/>-->
            </div>
          </aside>
        </transition>
      </div>
<!--      <Social />-->
<!--      <Email />-->
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGeneralStore } from '~/stores'

const generalStore = useGeneralStore()
const props = defineProps(
  {
    aside: {
      type: Boolean,
      default: false,
    },
  },
)
const theme = computed(() => {
  return generalStore.theme
})

const fetchBrowserLocale = () => {
  const lang: string | null = localStorage?.getItem('lang')
  const fetchedLocale: string = lang || navigator.language.split('-')[0]
  // this.loadLanguageAsync(fetchedLocale).catch(() => {
  //   console.log('Async language fetch failed');
  // });
}

onMounted(() => {
  console.log('<<<<<<<<<<<<<<<<<<onMounted>>>>>>>>>>>>>>>>>>')
  if (process.client)
    fetchBrowserLocale()
})
</script>

<style src="../assets/styles/main.css"/>

<style>
/* Fade down */
.fadedown-enter {
  opacity: 0.01;
  transform: translateY(-20px);
  transition: opacity 1.5s var(--easing), transform 1.5s var(--easing);
}

.fadedown-enter-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 1.5s var(--easing), transform 1.5s var(--easing);
}

/* Fade */
.fade-enter-active {
  transition: opacity 1.5s var(--easing);
}

.fade-enter {
  opacity: 0;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 1.5s var(--easing);
}
</style>
