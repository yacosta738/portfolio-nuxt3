<template>
  <div
    v-if="show"
    class="w-10 fixed bottom-0 z-10 text-gray-500 hidden md:block"
    :class="
      orientation === 'left'
        ? 'md:left-5 lg:left-10 right-auto'
        : 'md:right-5 lg:right-10 left-auto '
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: { required: true, type: Boolean },
  orientation: { required: true, type: String },
});
</script>

<style scoped></style>
