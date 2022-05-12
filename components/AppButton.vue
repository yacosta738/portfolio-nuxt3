<template>
  <button class="big-button" @click="onClick">
    <slot name="icon">
      <SvgIcon :name="icon" />
    </slot>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  onClick: {
    type: Function,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
});
</script>

<style scoped></style>
