import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Article = IArticle & {
  __typename?: 'Article';
  authors?: Maybe<Array<Person>>;
  categories?: Maybe<Array<Scalars['String']>>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Array<Image>>;
  date: Scalars['Timestamp'];
  id: Scalars['ID'];
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  timeToRead?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type IArticle = {
  authors?: Maybe<Array<Person>>;
  categories?: Maybe<Array<Scalars['String']>>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Array<Image>>;
  date: Scalars['Timestamp'];
  id: Scalars['ID'];
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  timeToRead?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type IImage = {
  name?: Maybe<Scalars['String']>;
  rawUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type IPerson = {
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastLame?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<Scalars['String']>;
};

export type Image = IImage & {
  __typename?: 'Image';
  name?: Maybe<Scalars['String']>;
  rawUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Person = IPerson & {
  __typename?: 'Person';
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastLame?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all articles */
  articles: Array<Article>;
};


export type QueryArticlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ArticleQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
}>;


export type ArticleQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: string, title: string, content?: string | null }> };


export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useArticleQuery__
 *
 * To run a query within a Vue component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useArticleQuery({
 *   title: // value for 'title'
 * });
 */
export function useArticleQuery(variables: ArticleQueryVariables | VueCompositionApi.Ref<ArticleQueryVariables> | ReactiveFunction<ArticleQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ArticleQuery, ArticleQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ArticleQuery, ArticleQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ArticleQuery, ArticleQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, variables, options);
}
export function useArticleLazyQuery(variables: ArticleQueryVariables | VueCompositionApi.Ref<ArticleQueryVariables> | ReactiveFunction<ArticleQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ArticleQuery, ArticleQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ArticleQuery, ArticleQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ArticleQuery, ArticleQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, variables, options);
}
export type ArticleQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ArticleQuery, ArticleQueryVariables>;