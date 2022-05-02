<script setup lang="ts">
import { onMounted } from 'vue';
import { email } from '../models/configuration';
import { typed } from '../util/utilities';
import { useLocal } from '../composables/locale';

const { t } = useLocal();

onMounted(() => {
  const startDelay = 500;
  typed('#generalName', {
    showCursor: false,
    strings: [t('name') as string],
    disableBackTyping: true,
    startDelay,
  });
  typed('#phrase', {
    showCursor: false,
    strings: [t('slogan') as string],
    disableBackTyping: true,
    startDelay: startDelay + 2000,
  });
});
const myEmail = email;
</script>

<template>
  <section class="min-h-screen">
    <div class="container mx-auto flex flex-col items-start h-full">
      <h1 class="text-base text-green-500 font-mono my-2 md:my-6 font-normal">
        {{ $t('welcome') }}
      </h1>
      <h2 id="generalName" class="text-5xl md:text-8xl">{{ $t('name') }}</h2>
      <h3 id="phrase" class="text-4xl md:text-7xl md:my-2 text-gray-500">
        {{ $t('slogan') }}
      </h3>
      <p class="my-4 max-w-none md:max-w-2xl">
        {{ $t('my-self') }}
      </p>
      <a :href="`mailto:${myEmail}`" class="big-button my-10">
        {{ $t('get-in-touch') }}
      </a>
    </div>
  </section>
</template>

<style scoped></style>
