import { Field, ID, InterfaceType, ObjectType } from 'type-graphql'

@InterfaceType()
export abstract class IPerson {
  @Field(() => ID)
    id?: string

  @Field(() => String, { nullable: true })
    firstName?: string

  @Field(() => String, { nullable: true })
    lastLame?: string

  @Field(() => String, { nullable: true })
    fullName?: string

  @Field(() => String, { nullable: true })
    profilePhoto?: string
}

@ObjectType({ implements: IPerson })
export default class Person implements IPerson {
  id: string

  firstName: string

  lastLame: string

  fullName: string

  profilePhoto: string
}
