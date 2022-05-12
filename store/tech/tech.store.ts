import { defineStore } from 'pinia';
import Tech from '../../models/tech';
import type { ITech } from '../../models/tech';

export interface ITechStore {
  technologies: ITech[];
}

const state = (): ITechStore => ({
  technologies: [] as ITech[],
});

const getters = {
  getTechnologies(): ITech[] {
    return this.technologies;
  },
};

const actions = {
  async fetchTechnologies() {
    const config = useRuntimeConfig();
    const { $notion } = useNuxtApp();
    const data = await $notion.getPageTable(
      config.TECH_PAGE_ID,
      config.NOTION_URL
    );
    if (data) {
      this.technologies = data.map((tech: ITech) => {
        return new Tech(tech);
      });
    }
  },
};

export const useTechStore = defineStore('techStore', {
  state,
  getters,
  actions,
});
