import { Field, InterfaceType, ObjectType } from 'type-graphql'

@InterfaceType()
export abstract class IImage {
  @Field(() => String, { nullable: true })
    name?: string

  @Field(() => String, { nullable: true })
    url?: string

  @Field(() => String, { nullable: true })
    rawUrl?: string
}

@ObjectType({ implements: IImage })
export class Image implements IImage {
  name?: string

  url?: string

  rawUrl?: string
}
