import { Field, ObjectType } from 'type-graphql'
import { Image } from '~/models/image'

export interface IAuthor {
  id?: string
  name?: string
  lang?: string
  path?: string
  role?: string
  summary?: any
  image?: Image | string
  content?: string
}
@ObjectType()
export default class Author implements IAuthor {
  @Field(() => String)
    id: string

  @Field(() => String)
    name: string

  @Field(() => String)
    lang: string

  @Field(() => String)
    path: string

  @Field(() => String)
    role: string

  @Field(() => String, { nullable: true })
  public summary?: string

  @Field(() => [Image], { nullable: true })
  public image?: Image

  @Field(() => String, { nullable: true })
  public content?: string

  constructor(author: IAuthor) {
    this.id = author.id || ''
    this.name = author.name || ''
    this.lang = author.lang || ''
    this.path = author.path || ''
    this.role = author.role || ''
    this.summary = author.summary || ''
    this.image = author.image || ''
    this.content = author.content || ''
  }
}
