<template>
  <header
    class="fixed z-50 w-full"
    :class="{ 'navbar--hidden': !showNavbar, 'navbar--show':scrollDirection === 'UP' && lastScrollPosition !== 0 }"
  >
    <nav id="acosta-navbar" class="relative flex flex-wrap w-full justify-between items-center py-2 md:py-4">
      <NuxtLink :to="'/'" class="py-0 my-0 border-none">
        <img src="/logo.svg" class="w-12  py-0 my-0" alt="logo">
      </NuxtLink>
      <div class="z-50 block lg:hidden">
        <svg
          class="ham hamRotate ham7"
          ref="menu-svg"
          :class="{'active-menu': generalStore.drawer}"
          viewBox="0 0 100 100"
          width="60"
          @click="generalStore.toggle()"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
          />
          <path
            class="line middle"
            d="m 70,50 h -40"
          />
          <path
            class="line bottom"
            d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
          />
        </svg>
      </div>
      <Menus class="hidden lg:block" />
      <div
        v-if="generalStore.drawer"
        v-closable="{ exclude:['menu-svg'], handler: 'onClose' }"
        :class="{ 'navbar-menu-open':generalStore.drawer, 'navbar-menu-close':!generalStore.drawer}"
        class="navbar-menu z-40 w-64 absolute bg-light-navy top-0 right-0 h-screen flex-grow px-4 py-8 md:pb-0 overflow-y-hidden -mx-14"
      >
        <Menus />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useGeneralStore } from '~/stores'
import Menus from '~/components/Menus.vue'

const generalStore = useGeneralStore()
let scrollDirection = 'DOWN'
let lastScrollPosition = 0

// get breakpoint(): string {
//   return this.$screen?.breakpoint ? this.$screen?.breakpoint : '';
// }
//
// @Watch('breakpoint')
// changedBreakpoint() {
//   if (this.isOpen && (this.$screen.breakpoint === 'md' || this.$screen.breakpoint === 'xl')) {
//     this.$store.commit('toggle');
//   }
// }

const showNavbar = computed({
  get() {
    return generalStore.showNavbar
  },
  set(show: boolean) {
    generalStore.updateShowNavbar(show)
  },
})

const onClose = () => {
  generalStore.updateDrawer(false)
}


const onScroll = () => {
  const currentScrollPosition = (process.client) ? window.scrollY || document.documentElement.scrollTop : 0
  if (currentScrollPosition < 0 || generalStore.drawer)
    return

  // const navbar = document.getElementById('acosta-navbar');
  // // Stop executing this function if the difference between
  // // current scroll position and last scroll position is less than some offset
  // if (Math.abs(currentScrollPosition - this.lastScrollPosition) < navbar.offsetHeight) {
  //   return
  // }
  showNavbar.value = currentScrollPosition < lastScrollPosition
  scrollDirection = (currentScrollPosition < lastScrollPosition) ? 'UP' : 'DOWN'
  lastScrollPosition = currentScrollPosition
}

onMounted(() => {
  if (process.client)
    window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  if (process.client)
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped lang="scss">
.navbar-menu {
  transition: all 530ms ease-out;
}

.navbar-menu-open {
  transform: translateX(0%);
}

.navbar-menu-close {
  transform: translateX(100%);
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hamRotate.active-menu {
  transform: rotate(45deg);
}

.hamRotate180.active-menu {
  transform: rotate(180deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #64ffda;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.ham7 {
  .top {
    stroke-dasharray: 40 82;
  }

  .middle {
    stroke-dasharray: 30 111;
  }

  .bottom {
    stroke-dasharray: 20 161;
  }
}

.ham7.active-menu {
  .top {
    stroke-dasharray: 40 82;
    stroke-dashoffset: -62px;
  }

  .middle {
    stroke-dasharray: 40 60;
    stroke-dashoffset: 23px;
  }

  .bottom {
    stroke-dasharray: 40 82;
    stroke-dashoffset: -82px;
  }
}

</style>
