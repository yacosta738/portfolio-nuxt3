import type { IPerson } from './person';
import type Person from './person';
import type { Image } from './image';

export abstract class IArticle {
  id?: string;
  title?: string;
  date?: string;
  slug?: string;
  lang?: string;
  timeToRead?: number;
  summary?: string;
  tags?: string[];
  categories?: string[];
  authors?: IPerson[];
  cover?: Image[];
  content?: any;
  published?: boolean;
}

export default class Article implements IArticle {
  id: string;
  title: string;
  date: string;
  slug: string;
  lang: string;
  timeToRead: number;
  summary: string;
  tags?: string[];
  categories?: string[];
  authors?: Person[];
  cover?: Image[];
  content: any;
  published: boolean;

  constructor(article: IArticle) {
    Object.assign(this, article);
  }
}
