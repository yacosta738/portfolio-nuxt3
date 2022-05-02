<script setup lang="ts">
import { useLocal } from '#imports';

const { setLocale, locale } = useLocal();
const localeList: string[] = ['en', 'es'];

const flag = (localeValue: string): string => {
  switch (localeValue) {
    case 'en':
      return 'uk-flag';
    case 'es':
      return 'es-flag';
    default:
      return 'uk-flag';
  }
};
</script>

<template>
  <div class="inline-flex align-middle w-full">
    <Dropdown id="btnDropdownRef" :icon="flag(locale)">
      <div class="flex flex-col justify-center items-center">
        <div
          v-for="l in localeList"
          :key="l"
          class="m-1 cursor-pointer flex justify-around items-start"
          @click="setLocale(l)"
        >
          <ClientOnly>
            <SvgIcon :name="flag(l)" height="20" width="20" />
          </ClientOnly>
        </div>
      </div>
    </Dropdown>
  </div>
</template>
