import { defineStore } from 'pinia'
import { navMenus } from '~/models/configuration'
import type Menu from '~/models/menu'

const DARK = 'dark'
const LIGHT = 'light'

const getTheme = (): string => {
  if (process.client && !localStorage.getItem('theme'))
    localStorage.setItem('theme', DARK)

  return process.client ? localStorage.getItem('theme') : DARK
}

const getNavMenus = (): Menu[] => navMenus || []

type IStore = {
  theme: string
  postId: number
  drawer: boolean
  showNavbar: boolean
  showSide: boolean
  loading: boolean
  firstTimeLoading: boolean
  swStatus: string
  isOpenSearchModal: boolean
  menus: Menu[]
}

export const useGeneralStore = defineStore(
  {
    id: 'generalStore',
    state: (): IStore => ({
      theme: getTheme(),
      postId: -1,
      drawer: false,
      showNavbar: true,
      showSide: true,
      loading: false,
      firstTimeLoading: true,
      swStatus: 'pending',
      isOpenSearchModal: false,
      menus: getNavMenus(),
    }),
    getters: {
      getThemeClass: (state: IStore) => (state.theme === DARK ? 'dark' : 'light'),
      getTheme: (state: IStore) => state.theme,
      getPostId: (state: IStore) => state.postId,
      getDrawer: (state: IStore) => state.drawer,
      getShowNavbar: (state: IStore) => state.showNavbar,
      getShowSide: (state: IStore) => state.showSide,
      getLoading: (state: IStore) => state.loading,
      getFirstTimeLoading: (state: IStore) => state.firstTimeLoading,
      getSwStatus: (state: IStore) => state.swStatus,
      getIsOpenSearchModal: (state: IStore) => state.isOpenSearchModal,
      getMenus: (state: IStore) => state.menus,
    },
    actions: {
      toggleTheme() {
        const isDark = this.theme === DARK
        const message = isDark
          ? '🌙 Setting dark mode'
          : '🌞 Setting light mode'
        console.log(message)
        const newTheme = isDark ? LIGHT : DARK

        if (process.client)
          localStorage.setItem('theme', newTheme)

        this.theme = newTheme
        const classToAdd = newTheme
        const classToRemove = isDark ? LIGHT : DARK
        document.body.classList.add(classToAdd)
        document.body.classList.remove(classToRemove)
      },
      changePostId(id) {
        this.postId = id
      },
      toggle() {
        this.drawer = !this.drawer
      },
      updateDrawer(drawer) {
        this.drawer = drawer
      },
      updateShowNavbar(showNavbar) {
        this.showNavbar = showNavbar
      },
      updateShowSide(showSide) {
        this.showSide = showSide
      },
      updateFirstTimeLoading(firstTimeLoading) {
        this.firstTimeLoading = firstTimeLoading
      },
      loadingOn() {
        this.loading = !this.loading
      },
      loadingOff() {
        this.loading = !this.loading
      },
      swUpdate(status) {
        this.swStatus = status
      },
      toggleSearchModal() {
        this.searchModal = !this.searchModal
      },
      updateSearchModal(searchModal: boolean) {
        this.searchModal = searchModal
      },
      updateMenus(menus: Menu[]) {
        this.menus = menus
      },
      addMenu(menu: Menu) {
        this.menus.push(menu)
      },
      removeMenu(menu: Menu) {
        this.menus = this.menus.filter(m => m.name !== menu.name && m.url !== menu.url,
        )
      },
    },
  },
)
