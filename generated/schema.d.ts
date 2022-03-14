export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
