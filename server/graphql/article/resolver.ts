import {
  Resolver, Query, Args,
} from 'type-graphql'
import { ArticleArgs } from './schema'

import config from '#config'
import Article from '~/models/article'
const getPageTable = async(pageId, apiUrl = 'https://notion-cms.yunielacosta738.workers.dev/v1') => await fetch(`${apiUrl}/table/${pageId}`)
  .then(res => res.json())
  .then(data => data)
@Resolver(of => Article)
export default class ArticleResolver {
  private articlesCollection: Article[] = []

  @Query(() => [Article], { description: 'Get all articles' })
  async articles(@Args(() => ArticleArgs) { title, startIndex, endIndex }: ArticleArgs): Promise<Article[]> {
    if (this.articlesCollection.length === 0) {
      const data = await getPageTable(config.PAGE_ID, config.NOTION_URL)
      this.articlesCollection = (data as Array<any>).map(post => new Article(post))
    }
    let articles = this.articlesCollection
    if (title)
      articles = articles.filter(article => article.title.toLowerCase().includes(title.toLowerCase()))

    return articles.slice(startIndex, endIndex)
  }
}
