<script setup lang="ts">
import { onMounted } from 'vue';
import { useGeneralStore } from '../store';
import { addEventToClassName } from '../util/utilities';

const generalStore = useGeneralStore();

onMounted(() => {
  addEventToClassName('close-menu-dummy', closeMenu);
});

const openSearchBox = (): void => {
  generalStore.toggleSearchModal();
  generalStore.updateDrawer(false);
  if (!generalStore.isOpenSearchModal) return;
  const searchBox: HTMLInputElement = document.querySelector(
    '#search-box'
  ) as HTMLInputElement;
  if (searchBox) searchBox.focus();
};

const closeMenu = (): void => {
  generalStore.updateDrawer(false);
  setTimeout(() => {
    generalStore.updateShowNavbar(true);
  }, 2000);
};
</script>

<template>
  <ul
    class="menu-list"
    :class="generalStore.getDrawer ? 'block' : 'hidden'"
    data-cypress="menu"
  >
    <li class="mb-6 lg:mb-0">
      <div
        v-if="!generalStore.showSide"
        class="text-lightest-slate hover:text-gray-600 cursor-pointer"
      >
        <SvgIcon
          name="search"
          class="cursor-pointer mt-3"
          @click="openSearchBox()"
        />
      </div>
    </li>
    <!--    <li>-->
    <!--      <theme-switcher/>-->
    <!--    </li>-->
    <li>
      <ol
        class="order-list lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
      >
        <li v-for="(menu, i) in generalStore.menus" :key="i">
          <NuxtLink
            :to="{ name: menu.name, hash: menu.hash }"
            class="close-menu-dummy"
          >
            {{ $t(menu.title) }}
          </NuxtLink>
        </li>
      </ol>
    </li>
    <li>
      <LocaleSwitcher />
    </li>
    <li>
      <NuxtLink
        to="/files/yuniel_acosta_cv.pdf"
        target="_blank"
        class="resume-button"
      >
        {{ $t('resume') }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu-list {
  @apply uppercase tracking-wide font-bold overflow-y-auto origin-top-right w-full
  block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial
  lg:w-auto items-center mt-8 lg:mt-0;
}
</style>
