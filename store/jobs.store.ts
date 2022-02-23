import {defineStore} from "pinia";

const jobActiveTabIdKey: string = 'jobActiveTabId';
const getActiveTabId = (): number => {
    if (process.client && !localStorage.getItem(jobActiveTabIdKey)) {
        localStorage.setItem(jobActiveTabIdKey, '0');
    }

    return process.client ? parseInt(localStorage.getItem(jobActiveTabIdKey) || '0') : 0;
}
type IStore = {
    jobActiveTabId: number;
}

export const useJobStore = defineStore(
    {
        id: 'jobStore',
        state: (): IStore => ({
            jobActiveTabId: getActiveTabId(),
        }),
        getters: {
            getActiveTabId(): number {
                return this.jobActiveTabId;
            }
        },
        actions: {
            setJobActiveTabId(activeTabId: number) {
                console.log('setJobActiveTabId', activeTabId);
                this.jobActiveTabId = activeTabId;
                if (process.client) {
                    localStorage.setItem(jobActiveTabIdKey, activeTabId.toString());
                }
            }
        }
    }
);