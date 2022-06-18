import { defineStore } from 'pinia';
import { compareAsc } from 'date-fns';
import Article from '../../models/article';
import { useLocal } from '../../composables/locale';
import type { IArticle } from '../../models/article';
import type { ITag } from '../../models/tag';
import type { ICategory } from '../../models/category';

export interface IArticleStore {
  articles: IArticle[];
  currentArticle: IArticle | null;
  message: string;
}

const state = (): IArticleStore => ({
  articles: [],
  currentArticle: null,
  message: '',
});

function getArticlesPublished() {
  const { locale } = useLocal();
  return this.articles
    .filter(
      article =>
        article.published && article.lang === locale.value.split('-')[0]
    )
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
}

const getters = {
  getMessage: (state: IArticleStore) => state.message,
  getArticles(): IArticle[] {
    return getArticlesPublished.call(this);
  },
  getCurrentArticle(): IArticle | null {
    return this.currentArticle;
  },
  getAllArticles: (state: IArticleStore): IArticle[] => state.articles,
  getLatestArticles(): (n: number) => IArticle[] {
    return (n: number) => getArticlesPublished.call(this).slice(0, n);
  },
  getAllTags(): ITag[] {
    const { locale } = useLocal();
    return getArticlesPublished
      .call(this)
      .reduce((acc, article) => {
        article.tags.forEach(tag => {
          if (!acc.some(t => t.name === tag)) {
            acc.push({
              name: tag,
              count: 1,
              lang: locale.value,
            });
          } else {
            acc.find(t => t.name === tag).count++;
          }
        });
        return acc;
      }, [])
      .sort((a, b) => b.count - a.count);
  },
  getAllCategories(): ICategory[] {
    const { locale } = useLocal();
    return getArticlesPublished
      .call(this)
      .reduce((acc, article) => {
        article.categories.forEach(category => {
          if (!acc.some(c => c.name === category)) {
            acc.push({
              name: category,
              count: 1,
              lang: locale.value,
            });
          } else {
            acc.find(c => c.name === category).count++;
          }
        });
        return acc;
      }, [])
      .sort((a, b) => b.count - a.count);
  },
  getArticleById(): (id: string) => IArticle | undefined {
    return (id: string) => this.articles.find(article => article.id === id);
  },
  getArticleBySlug(): (slug: string) => IArticle | undefined {
    return (slug: string) =>
      this.articles.find(article => article.slug === slug);
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
  setCurrentArticle(article: IArticle) {
    console.log('setCurrentArticle', article);
    this.currentArticle = article;
  },
  async fetchArticleContent(id: string): Promise<IArticle> {
    const config = useRuntimeConfig();
    const { $notion } = useNuxtApp();
    const article = this.articles.find(article => article.id === id);
    if (article) {
      if (article.content) {
        return article;
      } else {
        const { data } = await useAsyncData('content', () =>
          $notion.getPageBlocks(id, config.NOTION_URL)
        );
        if (data.value) {
          article.content = data.value;
          return article;
        }
      }
    }
    return article;
  },
};

export const useArticleStore = defineStore('articleStore', {
  state,
  getters,
  actions,
});
