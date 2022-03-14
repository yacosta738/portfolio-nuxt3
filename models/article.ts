import { Field, GraphQLTimestamp, ID, Int, InterfaceType, ObjectType } from 'type-graphql'
import { Image } from '~/models/image'
import type { IPerson } from '~/models/person'
import Person from '~/models/person'

@InterfaceType()
export abstract class IArticle {
  @Field(() => ID)
    id?: string

  @Field(() => String)
    title?: string

  @Field(() => GraphQLTimestamp)
    date?: Date | string

  @Field(() => String, { nullable: true })
    slug?: string

  @Field(() => String, { nullable: true })
    lang?: string

  @Field(() => Int, { nullable: true })
    timeToRead?: number

  @Field(() => String, { nullable: true })
    summary?: string

  @Field(() => [String], { nullable: true })
    tags?: string[]

  @Field(() => [String], { nullable: true })
    categories?: string[]

  @Field(() => [Person], { nullable: true })
    authors?: IPerson[]

  @Field(() => [Image], { nullable: true })
    cover?: Image | string

  @Field(() => String, { nullable: true })
    content?: string
}

@ObjectType({ implements: IArticle })
export default class Article implements IArticle {
  id: string

  title: string

  date: Date

  slug: string

  lang: string

  timeToRead: number

  summary: string

  tags?: string[]

  categories?: string[]

  authors?: Person[]

  cover?: Image

  content: string

  constructor(article: IArticle) {
    Object.assign(this, article)
  }
}
