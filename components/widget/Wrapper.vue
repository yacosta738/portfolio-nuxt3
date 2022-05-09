<template>
  <div class="p-4 md:p-0 mb-5">
    <div class="bg-light-navy">
      <h3
        class="font-bold text-lightest-slate font-mono text-3xl text-center md:text-left uppercase p-1 m-1"
      >
        {{ title }}
      </h3>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
