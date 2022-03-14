
import {
  ArgsType,
  Field, InputType, Int,
} from 'type-graphql'
import { Max, Min } from 'class-validator'
export * from '~/models/article'

@InputType()
export class ArticleInput {
  @Field(() => String)
    title: string
}

@ArgsType()
export class ArticleArgs {
  @Field(() => String, { nullable: true })
    title?: string

  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
    skip: number

  @Field(() => Int)
  @Min(1)
  @Max(50)
    take = 25

  // helpers - index calculations
  get startIndex(): number {
    return this.skip
  }

  get endIndex(): number {
    return this.skip + this.take
  }
}
