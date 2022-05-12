import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { navMenus } from '../../models/configuration';
import { useGeneralStore } from './general.store';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('General Store', () => {
  let store: ReturnType<typeof useGeneralStore>;
  beforeEach(() => {
    store = useGeneralStore();
  });
  afterEach(() => {
    store.$reset();
  });
  test('creates a store', () => {
    expect(typeof useGeneralStore).toEqual('function');
    expect(store).toBeDefined();
  });

  test('sets the initial state', () => {
    expect(store.theme).toEqual('dark');
    expect(store.postId).toEqual(-1);
    expect(store.drawer).toEqual(false);
    expect(store.showNavbar).toEqual(true);
    expect(store.showSide).toEqual(true);
    expect(store.loading).toEqual(false);
    expect(store.firstTimeLoading).toEqual(true);
    expect(store.swStatus).toEqual('pending');
    expect(store.isOpenSearchModal).toEqual(false);
    expect(store.menus).toEqual(navMenus);
  });

  test('test getters', () => {
    expect(store.getThemeClass).toBeDefined();
    expect(store.getTheme).toBeDefined();
    expect(store.getPostId).toBeDefined();
    expect(store.getDrawer).toBeDefined();
    expect(store.getShowNavbar).toBeDefined();
    expect(store.getShowSide).toBeDefined();
    expect(store.getLoading).toBeDefined();
    expect(store.getFirstTimeLoading).toBeDefined();
    expect(store.getSwStatus).toBeDefined();
    expect(store.isOpenSearchModal).toBeDefined();
    expect(store.getMenus).toBeDefined();

    expect(store.getThemeClass).toEqual('dark');
    expect(store.getTheme).toEqual('dark');
    expect(store.getPostId).toEqual(-1);
    expect(store.getDrawer).toEqual(false);
    expect(store.getShowNavbar).toEqual(true);
    expect(store.getShowSide).toEqual(true);
    expect(store.getLoading).toEqual(false);
    expect(store.getFirstTimeLoading).toEqual(true);
    expect(store.getSwStatus).toEqual('pending');
    expect(store.isOpenSearchModal).toEqual(false);
    expect(store.getMenus).toEqual(navMenus);
  });

  test('sets the theme', () => {
    store.toggleTheme();
    expect(store.theme).toEqual('light');
  });

  test('sets the postId', () => {
    store.changePostId(1);
    expect(store.postId).toEqual(1);
  });

  test('sets the drawer', () => {
    store.toggleDrawer();
    expect(store.drawer).toEqual(true);

    store.updateDrawer(false);
    expect(store.drawer).toEqual(false);
  });

  test('sets the showNavbar', () => {
    store.updateShowNavbar(false);
    expect(store.showNavbar).toEqual(false);
  });

  test('sets the showSide', () => {
    store.updateShowSide(false);
    expect(store.showSide).toEqual(false);
  });

  test('sets the loading', () => {
    store.updateLoading(true);
    expect(store.loading).toEqual(true);

    store.updateLoading(false);
    expect(store.loading).toEqual(false);
  });

  test('sets the firstTimeLoading', () => {
    store.updateFirstTimeLoading(false);
    expect(store.firstTimeLoading).toEqual(false);
  });

  test('sets the swStatus', () => {
    store.swUpdate('installed');
    expect(store.swStatus).toEqual('installed');
  });

  test('sets the isOpenSearchModal', () => {
    store.updateSearchModal(true);
    expect(store.isOpenSearchModal).toEqual(true);

    store.updateSearchModal(false);
    expect(store.isOpenSearchModal).toEqual(false);

    store.toggleSearchModal();
    expect(store.isOpenSearchModal).toEqual(true);
  });

  test('sets the menus', () => {
    store.updateMenus([]);
    expect(store.menus).toEqual([]);

    store.updateMenus(navMenus);
    expect(store.menus).toEqual(navMenus);
  });
});
