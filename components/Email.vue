<script setup lang="ts">
import { onMounted } from 'vue'
import { useGeneralStore } from '../store'
import { email } from '../models/configuration'

const store = useGeneralStore()
const myEmail = email

onMounted(() => {
  console.log('Email mounted')
  console.log(store)
})
</script>

<template>
  <Side :show="store.showSide" orientation="right">
    <div class="email-side">
      <a :href="`mailto:${myEmail}`">{{ myEmail }}</a>
    </div>
  </Side>
</template>

<style scoped>
.email-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.email-side:after {
  content: '';
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color: var(--light-slate);
}

.email-side a {
  margin: 20px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
}

.email-side a:hover, .email-side a:focus {
  transform: translateY(-3px);
}

</style>
