import type { NonEmptyArray } from 'type-graphql'
import article from './article/resolver'
const resolvers: NonEmptyArray<Function> = [
  article,
]
export default resolvers
