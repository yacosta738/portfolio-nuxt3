<template>
  <div>
    <div class="z-50">
      <!-- Dropdown toggle button -->
      <button
        :id="id"
        class="language-button flex justify-center items-center"
        type="button"
        @click.prevent="show = !show"
      >
        <span v-if="title && title.length > 0" class="mr-4">{{ title }}</span>
        <SvgIcon
          v-if="icon && icon.length > 1"
          :name="icon"
          height="20"
          width="20"
        />
      </button>

      <!-- Dropdown menu -->
      <div v-show="show" class="menu-language">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '../util/utilities';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
});

const show = ref(false);

const onClick = event =>
  onClickOutside(event, props.id, () => {
    show.value = false;
  });

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', onClick);
    document.addEventListener('touchstart', onClick);
  }
});

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', onClick);
    document.removeEventListener('touchstart', onClick);
  }
});
</script>

<style lang="scss" scoped>
.dropdown-button {
  @apply bg-transparent text-green-500 text-sm cursor-pointer border-b border-transparent  hover:border-green-500 hover:bg-green-900 select-none;
}
.menu-language {
  z-index: 200;
  min-width: 2rem;
  @apply absolute bg-lightest-navy text-base float-left py-2 list-none text-left rounded shadow-lg mt-1;
}
</style>
