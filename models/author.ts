import type { Image } from './image';

export interface IAuthor {
  id?: string;
  name?: string;
  lang?: string;
  path?: string;
  role?: string;
  summary?: any;
  image?: Image | string;
  content?: string;
}

export default class Author implements IAuthor {
  id: string;
  name: string;
  lang: string;
  path: string;
  role: string;
  summary?: string;
  image?: Image | string;
  content?: string;

  constructor(author: IAuthor) {
    this.id = author.id || '';
    this.name = author.name || '';
    this.lang = author.lang || '';
    this.path = author.path || '';
    this.role = author.role || '';
    this.summary = author.summary || '';
    this.image = author.image || '';
    this.content = author.content || '';
  }
}
