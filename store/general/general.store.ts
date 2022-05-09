import { defineStore } from 'pinia';
import { navMenus } from '../../models/configuration';
import type Menu from '../../models/menu';
/* eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
const DARK = 'dark';
const LIGHT = 'light';

const getTheme = (): string => {
  if (process.client && !localStorage.getItem('theme'))
    localStorage.setItem('theme', DARK);

  return process.client ? localStorage.getItem('theme') : DARK;
};

const getNavMenus = (): Menu[] => navMenus || [];

export interface IGeneralStore {
  theme: string;
  postId: number;
  drawer: boolean;
  showNavbar: boolean;
  showSide: boolean;
  loading: boolean;
  firstTimeLoading: boolean;
  swStatus: string;
  searchModal: boolean;
  menus: Menu[];
}
const state = (): IGeneralStore => ({
  theme: getTheme(),
  postId: -1,
  drawer: false,
  showNavbar: true,
  showSide: true,
  loading: false,
  firstTimeLoading: true,
  swStatus: 'pending',
  searchModal: false,
  menus: getNavMenus(),
});

const getters = {
  getThemeClass: (state: IGeneralStore) =>
    state.theme === DARK ? 'dark' : 'light',
  getTheme: (state: IGeneralStore) => state.theme,
  getPostId: (state: IGeneralStore) => state.postId,
  getDrawer: (state: IGeneralStore) => state.drawer,
  getShowNavbar: (state: IGeneralStore) => state.showNavbar,
  getShowSide: (state: IGeneralStore) => state.showSide,
  getLoading: (state: IGeneralStore) => state.loading,
  getFirstTimeLoading: (state: IGeneralStore) => state.firstTimeLoading,
  getSwStatus: (state: IGeneralStore) => state.swStatus,
  isOpenSearchModal: (state: IGeneralStore) => state.searchModal,
  getMenus: (state: IGeneralStore) => state.menus,
};
const actions = {
  toggleTheme() {
    const isDark = this.theme === DARK;
    const message = isDark ? '🌙 Setting dark mode' : '🌞 Setting light mode';
    console.info(message);
    const newTheme = isDark ? LIGHT : DARK;

    if (process.client) localStorage.setItem('theme', newTheme);

    this.theme = newTheme;
    const classToAdd = newTheme;
    const classToRemove = isDark ? LIGHT : DARK;
    if (process.client) {
      document.body.classList.add(classToAdd);
      document.body.classList.remove(classToRemove);
    }
  },
  changePostId(id) {
    this.postId = id;
  },
  toggleDrawer() {
    this.drawer = !this.drawer;
  },
  updateDrawer(drawer) {
    this.drawer = drawer;
  },
  updateShowNavbar(showNavbar) {
    this.showNavbar = showNavbar;
  },
  updateShowSide(showSide) {
    this.showSide = showSide;
  },
  updateFirstTimeLoading(firstTimeLoading) {
    this.firstTimeLoading = firstTimeLoading;
  },
  updateLoading(loading: boolean) {
    this.loading = loading;
  },
  swUpdate(status) {
    this.swStatus = status;
  },
  toggleSearchModal() {
    this.searchModal = !this.searchModal;
  },
  updateSearchModal(searchModal: boolean) {
    this.searchModal = searchModal;
  },
  updateMenus(menus: Menu[]) {
    this.menus = menus;
  },
  addMenu(menu: Menu) {
    this.menus.push(menu);
  },
  removeMenu(menu: Menu) {
    this.menus = this.menus.filter(
      (m: Menu) => m.name !== menu.name && m.hash !== menu.hash
    );
  },
};

export const useGeneralStore = defineStore('generalStore', {
  state,
  getters,
  actions,
});
