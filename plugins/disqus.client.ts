import VueDisqus from 'vue-disqus';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueDisqus, { shortname: 'blastkode' });
});
