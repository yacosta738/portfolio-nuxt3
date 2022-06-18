import { defineStore } from 'pinia';
import type { IJob } from '../../models/job';
import { useLocal } from '~/composables/locale';
import { queryContent } from '#imports';

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

/**
 * Get all jobs
 */
function getAllJobs() {
  const { locale } = useLocal();
  return this.jobs
  .filter(
    (job: IJob) => job.published && job.lang === locale.value.split('-')[0],
  )
  .sort((a: IJob, b: IJob) => {
    if (a.startDate > b.startDate) return -1;
    if (a.startDate < b.startDate) return 1;
    return 0;
  });
}

const getters = {
  getActiveTabId(): number {
    return this.jobActiveTabId;
  },
  getJobs(): IJob[] {
    return getAllJobs.call(this);
  },
};

const actions = {
  setJobActiveTabId(activeTabId: number) {
    this.jobActiveTabId = activeTabId;
    if (process.client)
      localStorage.setItem(jobActiveTabIdKey, activeTabId.toString());
  },
  async fetchJobs() {
  const jobsContent = await queryContent('jobs')/*.where({ published: { $eq: true } })*/.find();
  console.log("Content: ", jobsContent);
  this.jobs = jobsContent.map((job: any) => ({
    ...job,
    startDate: new Date(job.startDate),
    endDate: new Date(job.endDate),
  }));
  console.log(this.jobs);
  },
};

export const useJobStore = defineStore('jobStore', {
  state,
  getters,
  actions,
});
