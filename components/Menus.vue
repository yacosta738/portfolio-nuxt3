<script setup lang="ts">
import {onMounted} from "vue";
import {useGeneralStore} from "../store";
import {addEventToClassName} from "../util/utilities";

// const ThemeSwitcher = () => import('./ThemeSwitcher.vue');
// const LocaleSwitcher = () => import('./LocaleSwitcher.vue');

const generalStore = useGeneralStore();

const closeMenu = (): void => {
  generalStore.updateDrawer(false);
  setTimeout(() => {
    generalStore.updateShowNavbar(true);
  }, 2000);
}

onMounted(() => {
  addEventToClassName('close-menu-dummy', closeMenu);
});

const openSearchBox = () => {
  generalStore.toggleSearchModal();
  generalStore.updateDrawer(false);
  if (generalStore.isOpenSearchModal) {
    const searchBox: any = <HTMLInputElement>document.getElementById('search-box');
    if (searchBox) {
      searchBox.autofocus = true;
    }
  }
}
</script>

<template>
  <ul
      class="uppercase tracking-wide font-bold overflow-y-auto origin-top-right w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
      :class="generalStore.drawer ? 'block': 'hidden'"
      data-cypress="menu"
  >
    <li class="mb-6 lg:mb-0">
      <div v-if="!generalStore.showSide"
           class="text-lightest-slate hover:text-gray-600 cursor-pointer">
        <Icones class="cursor-pointer mt-3" :icon="'search'" @click="openSearchBox()"/>
      </div>
    </li>
    <!--    <li>-->
    <!--      <theme-switcher/>-->
    <!--    </li>-->
    <li>
      <ol
          class="order-list lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0">
        <li v-for="(menu, i) in generalStore.menus" :key="i">
          <NuxtLink v-if="$route.path === '/' || $route.path === `/en/`" :to="menu.url"
                    data-cypress="projects">{{ menu.name }}
          </NuxtLink>
          <NuxtLink v-else :to="menu.url" class="close-menu-dummy">{{ menu.name }}</NuxtLink>
        </li>
      </ol>
    </li>
    <li>
      <LocaleSwitcher/>
    </li>
    <li>
      <NuxtLink to="/files/yuniel_acosta_cv.pdf"
                target="_blank" class="resume-button">Resume</NuxtLink>
    </li>
  </ul>
</template>
