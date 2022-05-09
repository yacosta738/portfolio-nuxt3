export interface IJob {
  id?: string;
  lang?: string;
  role?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  company?: string;
  location?: string;
  url?: string;
  content?: string;
  published?: boolean;
}

export default class Job implements IJob {
  id: string;
  lang: string;
  role: string;
  startDate: Date | string;
  endDate: Date | string;
  company: string;
  location: string;
  url: string;
  content: string;
  published: boolean;

  constructor(job: IJob) {
    this.id = job.id;
    this.lang = job.lang;
    this.role = job.role;
    this.startDate = job.startDate;
    this.endDate = job.endDate;
    this.company = job.company;
    this.location = job.location;
    this.url = job.url;
    this.content = job.content;
    this.published = job.published;
  }
}
