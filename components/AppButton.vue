<template>
  <button class="big-button" @click="onClick">
    <slot name="icon">
      <Icones :icon="icon"/>
    </slot>
    <slot>
    </slot>
  </button>
</template>

<script setup lang="ts">
import Icones from "~/components/Icones.vue";

const props = defineProps({
  onClick: {
    type: Function,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
  }
});
</script>

<style scoped>

</style>