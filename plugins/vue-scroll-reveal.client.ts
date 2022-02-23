import {defineNuxtPlugin} from "#app";
import VueScrollTo from "vue-scrollto";

let duration = 800;
let lastScrollPosition = 0;
if (process.client) {
    window.addEventListener('scroll', () => {
        const currentScrollPosition = process.client
            ? window.scrollY || document.documentElement.scrollTop
            : 0;
        if (currentScrollPosition < 0) {
            return;
        }
        duration = currentScrollPosition < lastScrollPosition ? 50 : 800;
        lastScrollPosition = currentScrollPosition;
    });
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
        duration,
        scale: 1,
        distance: '10px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        mobile: false,
        reset: true,
        cleanup: true,
    });
});