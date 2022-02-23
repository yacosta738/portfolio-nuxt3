import {defineNuxtPlugin} from '#app';
import closable from "~/directives/closable";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('closable', () => closable);
})