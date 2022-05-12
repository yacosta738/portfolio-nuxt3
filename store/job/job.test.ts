import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useJobStore } from './job.store';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('Jobs Store', () => {
  let store: ReturnType<typeof useJobStore>;
  beforeEach(() => {
    store = useJobStore();
  });
  afterEach(() => {
    store.$reset();
  });
  test('creates a store', () => {
    expect(typeof useJobStore).toEqual('function');
    expect(store).toBeDefined();
  });

  test('sets the initial state', () => {
    expect(store.jobActiveTabId).toEqual(0);
  });

  test('test getters', () => {
    expect(store.getActiveTabId).toBeDefined();
    expect(store.getActiveTabId).toEqual(0);
    // Jobs
    expect(store.getJobs).toBeDefined();
    expect(store.getJobs).toEqual([]);
  });

  test('set job active tab id', () => {
    store.setJobActiveTabId(1);
    expect(store.jobActiveTabId).toEqual(1);
  });
});
