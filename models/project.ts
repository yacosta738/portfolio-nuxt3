import type Entity from '~/models/entity';
import type { Image } from '~/models/image';
import type { ITech } from '~/models/tech';

export interface IProject extends Entity {
  lang: string;
  cover?: Image[];
  date: Date | string;
  company?: string;
  tech?: ITech[];
  repository?: string;
  url?: string;
  showInProjects?: boolean;
  featured?: boolean;
  published?: boolean;
}

export default class Project implements IProject {
  id: string;
  title: string;
  content: any;
  lang: string;
  cover?: Image[];
  date: Date | string;
  company?: string;
  tech?: ITech[];
  repository?: string;
  url?: string;
  showInProjects?: boolean;
  featured?: boolean;
  published?: boolean;
  constructor(data: IProject) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.lang = data.lang;
    this.cover = data.cover;
    this.date = data.date instanceof Date ? data.date : new Date(data.date);
    this.company = data.company;
    this.tech = data.tech;
    this.repository = data.repository;
    this.url = data.url;
    this.showInProjects = data.showInProjects ?? false;
    this.featured = data.featured ?? false;
    this.published = data.published ?? false;
  }
}
