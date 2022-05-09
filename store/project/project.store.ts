import { defineStore } from 'pinia';
import Project from '../../models/project';
import Tech from '../../models/tech';
import type { IProject } from '../../models/project';

export interface IProjectStore {
  projects: IProject[];
}

const state = (): IProjectStore => ({
  projects: [],
});

const getters = {
  /**
   * Get all projects
   * @returns {IProject[]}
   */
  getProjects(): IProject[] {
    return this.projects
      .filter(project => project.published && project.lang === 'en')
      .sort((a, b) => {
        if (a.startDate > b.startDate) return -1;
        if (a.startDate < b.startDate) return 1;
        return 0;
      });
  },
  /**
   * Get the featured projects
   * @returns {IProject[]}
   */
  getFeaturedProjects(): IProject[] {
    return this.projects
      .filter(
        project =>
          project.published && project.lang === 'en' && project.featured
      )
      .sort((a, b) => {
        if (a.startDate > b.startDate) return -1;
        if (a.startDate < b.startDate) return 1;
        return 0;
      });
  },
  getCommonProjects(): IProject[] {
    return this.projects
      .filter(
        (project: IProject) =>
          project.published && project.lang === 'en' && project.showInProjects
      )
      .sort((a, b) => {
        if (a.startDate > b.startDate) return -1;
        if (a.startDate < b.startDate) return 1;
        return 0;
      });
  },
};

const actions = {
  async fetchProjects() {
    const config = useRuntimeConfig();
    const { $notion } = useNuxtApp();
    const data = await $notion.getPageTable(
      config.PROJECTS_PAGE_ID,
      config.NOTION_URL
    );
    if (data) {
      this.projects = (data as Array<any>)
        .filter(project => project.published)
        .map(project => {
          project.tech = project.tech?.map(tech => new Tech({ id: tech }));
          return new Project(project);
        });
      this.projects.forEach(project => {
        if (project.id) {
          $notion.getPageBlocks(project.id, config.NOTION_URL).then(block => {
            project.content = block;
          });
        } else console.warn('Project has no id');
      });
    }
  },
};

export const useProjectStore = defineStore('projectStore', {
  state,
  getters,
  actions,
});
