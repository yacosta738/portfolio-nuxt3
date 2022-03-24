<template>
  <section class="min-h-screen">
    <div class="container mx-auto flex flex-col items-start h-full">
      <h1 class="text-base text-green-500 font-mono my-2 md:my-6 font-normal">
        Hi, my name is
      </h1>
      <h2 id="generalName" class="text-5xl md:text-8xl">
        Yuniel Acosta
      </h2>
      <h3 id="phrase" class="text-4xl md:text-7xl md:my-2 text-gray-500">
        If I cannot do great things, I can do small things in a great way
      </h3>
      <p class="my-4 max-w-none md:max-w-2xl">
        I’m a software engineer, technology and science enthusiast, specialized in building mobile and web applications.
      </p>
      <a :href="`mailto:${myEmail}`" class="big-button my-10">Get In Touch</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { email } from '~/models/configuration'
import { typed } from '~/util/utilities'
//
// onMounted(() => {
//   const startDelay = 500
//   typed('#generalName', {
//     showCursor: false,
//     strings: ['Yuniel Acosta'],
//     disableBackTyping: true,
//     startDelay,
//   })
//   typed('#phrase', {
//     showCursor: false,
//     strings: ['If I cannot do great things, I can do small things in a great way'],
//     disableBackTyping: true,
//     startDelay: startDelay + 2000,
//   })
// })

const myEmail = email
</script>

<style scoped>
</style>
