<template>
  <div class="container-inner mx-auto py-16">
    <h1 class="text-4xl font-bold mb-16">
      <slot name="title">
        Page Not Found (404)
      </slot>
    </h1>
    <img class="w-1/2" src="/oops.png" alt="404 page not found">
    <p>
      <slot name="message">
        Don't know how you ended up here, but the page doesn't exist. Or well, <em>this</em>
        page exists, but it's a <em>page not found</em> page...you get the point.
      </slot>
    </p>
    <div class="mt-16">
      <slot name="actions">
        <AppButton :on-click="onClick">
          Go Home
        </AppButton>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const onClick = () => {
  console.log('Go home!')
  router.push('/')
}
</script>
