import { defineStore } from 'pinia';
import Job from '../../models/job';
import type { IJob } from '../../models/job';

const jobActiveTabIdKey = 'jobActiveTabId';
const getActiveTabId = (): number => {
  if (process.client && !localStorage.getItem(jobActiveTabIdKey))
    localStorage.setItem(jobActiveTabIdKey, '0');

  return process.client
    ? Number.parseInt(localStorage.getItem(jobActiveTabIdKey) || '0')
    : 0;
};

export interface IJobStore {
  jobs: IJob[];
  jobActiveTabId: number;
}

const state = (): IJobStore => ({
  jobs: [],
  jobActiveTabId: getActiveTabId(),
});

const getters = {
  getActiveTabId(): number {
    return this.jobActiveTabId;
  },
  getJobs(): IJob[] {
    return this.jobs
      .filter((job: IJob) => job.published && job.lang === 'en')
      .sort((a: IJob, b: IJob) => {
        if (a.startDate > b.startDate) return -1;
        if (a.startDate < b.startDate) return 1;
        return 0;
      });
  },
};

const actions = {
  setJobActiveTabId(activeTabId: number) {
    this.jobActiveTabId = activeTabId;
    if (process.client)
      localStorage.setItem(jobActiveTabIdKey, activeTabId.toString());
  },
  async fetchJobs() {
    const config = useRuntimeConfig();
    const { $notion } = useNuxtApp();
    const data = await $notion.getPageTable(
      config.JOBS_PAGE_ID,
      config.NOTION_URL
    );
    if (data) {
      this.jobs = (data as Array<any>)
        .filter(job => job.published)
        .map(job => new Job(job));
      this.jobs.forEach(job => {
        $notion.getPageBlocks(job.id, config.NOTION_URL).then(block => {
          job.content = block;
        });
      });
    }
  },
};

export const useJobStore = defineStore('jobStore', {
  state,
  getters,
  actions,
});
