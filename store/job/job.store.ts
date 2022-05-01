import { defineStore } from 'pinia'

const jobActiveTabIdKey = 'jobActiveTabId'
const getActiveTabId = (): number => {
  if (process.client && !localStorage.getItem(jobActiveTabIdKey))
    localStorage.setItem(jobActiveTabIdKey, '0')

  return process.client ? parseInt(localStorage.getItem(jobActiveTabIdKey) || '0') : 0
}
export interface IJobStore {
  jobActiveTabId: number
}
const state = (): IJobStore => ({
  jobActiveTabId: getActiveTabId(),
})

const getters = {
  getActiveTabId(): number {
    return this.jobActiveTabId
  },
}

const actions = {
  setJobActiveTabId(activeTabId: number) {
    console.log('setJobActiveTabId', activeTabId)
    this.jobActiveTabId = activeTabId
    if (process.client)
      localStorage.setItem(jobActiveTabIdKey, activeTabId.toString())
  },
}

export const useJobStore = defineStore(
  'jobStore', {
    state,
    getters,
    actions,
  },
)
