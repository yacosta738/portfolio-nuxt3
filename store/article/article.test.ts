import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { compareAsc } from 'date-fns';
import { useArticleStore } from './article.store';
import * as data from './articles.json';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('Article Store', () => {
  let store: ReturnType<typeof useArticleStore>;
  beforeEach(() => {
    store = useArticleStore();
  });
  afterEach(() => {
    store.$reset();
    vi.restoreAllMocks();
  });
  test('creates a store', () => {
    expect(typeof useArticleStore).toEqual('function');
    expect(store).toBeDefined();
  });
  test('sets the initial state', () => {
    expect({ articles: store.articles, message: store.message }).toEqual({
      articles: [],
      message: '',
    });
  });

  test('sets the message', () => {
    store.setMessage('Hello');
    expect(store.message).toEqual('Hello');
    expect(store.getMessage).toEqual('Hello');
  });

  test('fetch the articles', () => {
    store.fetchArticles = vi
      .fn()
      .mockImplementation(() => store.setArticles(data.articles));
    store.fetchArticles();
    expect(store.articles).toMatchObject(data.articles);
  });

  test('sets the articles', () => {
    store.setArticles(data.articles);
    expect(store.articles).toMatchObject(data.articles);
  });

  test('get all articles', () => {
    expect(store.getAllArticles).toMatchObject([]);
    store.setArticles(data.articles);
    expect(store.getAllArticles).toMatchObject(data.articles);
  });

  test('get articles', () => {
    expect(store.getArticles).toMatchObject([]);
    store.setArticles(data.articles);
    console.log({
      Expected: store.getArticles.length,
      Received: data.articles.length,
    });
    expect(store.getArticles).toMatchObject(
      data.articles.filter(article => article.published)
    );
  });

  test('get last n articles', () => {
    expect(store.getLatestArticles(5)).toMatchObject([]);
    store.setArticles(data.articles);
    expect(store.getLatestArticles(5)).toMatchObject(
      data.articles
        .filter(article => article.published)
        .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
        .slice(0, 5)
    );
  });

  test('get all tags', () => {
    expect(store.getAllTags).toMatchObject([]);
    store.setArticles(data.articles);
    const lang = 'en';
    const tags = data.articles
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
    expect(store.getAllTags).toMatchObject(tags);
  });

  test('get all categories', () => {
    expect(store.getAllCategories).toMatchObject([]);
    store.setArticles(data.articles);
    const lang = 'en';
    const categories = data.articles
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
    expect(store.getAllCategories).toMatchObject(categories);
  });

  test('get article by id', () => {
    expect(
      store.getArticleById('88406a2a-7758-4735-81d6-1dfe01bb1a82')
    ).toMatchObject({});
    store.setArticles(data.articles);
    expect(
      store.getArticleById('88406a2a-7758-4735-81d6-1dfe01bb1a82')
    ).toMatchObject(data.articles[0]);
  });

  test('get article by slug', () => {
    expect(
      store.getArticleBySlug('graphql-in-django-an-overview')
    ).toMatchObject({});
    store.setArticles(data.articles);
    expect(
      store.getArticleBySlug('graphql-in-django-an-overview')
    ).toMatchObject(data.articles[0]);
  });
});
