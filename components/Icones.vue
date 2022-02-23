<template>
  <div>
    <em v-html="currentIcon(icon)"/>
  </div>
</template>

<script setup lang="ts">
import Icon, {ICONS} from "~/models/Icon";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const icons: Icon[] = ICONS;

const currentIcon = (icon: string) => {
  const iconObj = icons.find(i => i.name === icon);
  return iconObj ? iconObj.icon : "";
};
</script>