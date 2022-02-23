<template>
  <div class="inline-flex align-middle w-full">
    <button class="language-button flex justify-center items-center"
            type="button" @click="toggleDropdown()" ref="btnDropdownRef">
      <ClientOnly>
        <country-flag :country="countryFlag('en')" size="normal"/>
      </ClientOnly>
    </button>
    <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="menu-language"
         v-closable="{ exclude:['btnDropdownRef'], handler: 'onClose'  }" ref="popoverDropdownRef">
      <div class="flex flex-col justify-center items-center">
        <div class="m-1 cursor-pointer flex justify-around items-start" v-for="locale in localeList" :key="locale"
             @click="localeChanged(locale)">
          <ClientOnly>
            <country-flag :country="countryFlag(locale)" size="normal"/>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createPopper } from '@popperjs/core';
import {localeList, loadLanguageAsync} from "~/mixins/language.mixins";
import CountryFlag from 'vue-country-flag-next';
import {ref} from "vue";

const flag = (locale: string): string => {
  switch (locale) {
    case 'en':
      return 'gb';
    case 'es':
      return 'es';
    default:
      return 'gb';
  }
};

let dropdownPopoverShow: boolean = false;

const countryFlag = (locale: string) => {
  return flag(locale);
}
const btnDropdownRef = ref(null);
const popoverDropdownRef = ref(null);

const toggleDropdown = () => {
  if (dropdownPopoverShow) {
    dropdownPopoverShow = false;
  } else {
    dropdownPopoverShow = true;
    const btn = btnDropdownRef.value as HTMLElement;
    const dropdown = popoverDropdownRef.value as HTMLElement;
    createPopper(btn, dropdown, {
      placement: "bottom-start"
    });
  }
}

const onClose = () => {
  dropdownPopoverShow = false;
}

const localeChanged = (locale: string) => {
  loadLanguageAsync(locale).then(toggleDropdown).catch(() => {
    console.log('Async language fetch failed');
  });
}
</script>
<style lang="scss">
.language-button {
  @apply bg-transparent text-green-500 text-sm cursor-pointer border-b border-transparent  hover:border-green-500 hover:bg-green-900 select-none;
}

.menu-language {
  z-index: 200;
  min-width: 2rem;
  @apply bg-lightest-navy text-base float-left py-2 list-none text-left rounded shadow-lg mt-1;
}
</style>
