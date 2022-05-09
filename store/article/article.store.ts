import { defineStore } from 'pinia';
import { compareAsc } from 'date-fns';
import Article from '../../models/article';
import type { IArticle } from '../../models/article';
import type { ITag } from '../../models/tag';
import type { ICategory } from '../../models/category';

export interface IArticleStore {
  articles: IArticle[];
  message: string;
}

const state = (): IArticleStore => ({
  articles: [],
  message: '',
});

const getters = {
  getMessage: (state: IArticleStore) => state.message,
  getArticles: (state: IArticleStore) =>
    state.articles
      .filter(article => article.published)
      .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date))),
  getAllArticles: (state: IArticleStore): IArticle[] => state.articles,
  getLatestArticles(state: IArticleStore): (n: number) => IArticle[] {
    return (n: number) =>
      state.articles
        .filter(article => article.published && article.lang === 'en')
        .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
        .slice(0, n);
  },
  getAllTags(state: IArticleStore): ITag[] {
    const lang = 'en';
    return state.articles
      .filter(article => article.published && article.lang === lang)
      .reduce((acc, article) => {
        article.tags.forEach(tag => {
          if (!acc.some(t => t.name === tag)) {
            acc.push({
              name: tag,
              count: 1,
              lang,
            });
          } else {
            acc.find(t => t.name === tag).count++;
          }
        });
        return acc;
      }, [])
      .sort((a, b) => b.count - a.count);
  },
  getAllCategories(state: IArticleStore): ICategory[] {
    const lang = 'en';
    return state.articles
      .filter(article => article.published && article.lang === lang)
      .reduce((acc, article) => {
        article.categories.forEach(category => {
          if (!acc.some(c => c.name === category)) {
            acc.push({
              name: category,
              count: 1,
              lang,
            });
          } else {
            acc.find(c => c.name === category).count++;
          }
        });
        return acc;
      }, [])
      .sort((a, b) => b.count - a.count);
  },
  getArticleById(state: IArticleStore): (id: string) => IArticle | undefined {
    return (id: string) => state.articles.find(article => article.id === id);
  },
  getArticleBySlug(
    state: IArticleStore
  ): (slug: string) => IArticle | undefined {
    return (slug: string) => {
      return state.articles.find(article => article.slug === slug);
    };
  },
};

const actions = {
  setMessage(message: string) {
    this.message = message;
  },
  async fetchArticles() {
    const config = useRuntimeConfig();
    const { $notion } = useNuxtApp();
    const { data } = await useAsyncData('notion', () =>
      $notion.getPageTable(config.BLOG_PAGE_ID, config.NOTION_URL)
    );

    if (data.value) {
      this.articles = (data.value as Array<any>)
        .map(post => new Article(post))
        .filter(post => post.published)
        .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
    }
    this.message = 'Articles fetched';
  },
  setArticles(articles: IArticle[]) {
    this.articles = articles;
  },
};

export const useArticleStore = defineStore('articleStore', {
  state,
  getters,
  actions,
});
