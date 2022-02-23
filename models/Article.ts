import Tag, { ITag } from '~/models/Tag';
import Category, { ICategory } from '~/models/Category';
import { Image } from '~/models/Image';
import Person, {IPerson} from "~/models/Person";

export interface IArticle {
  id?: string;
  title?: string;
  date?: Date | string;
  path?: string;
  lang?: string;
  timeToRead?: number;
  summary?: string;
  tags?: ITag[];
  categories?: ICategory[];
  authors?: IPerson[];
  cover?: Image | string;
  content?: string;
}

export default class Article implements IArticle {
  static fromJson(jsonData): Article {
    return new Article(
      jsonData?.id,
      jsonData?.title,
      jsonData?.date,
        `/${jsonData?.slug}`,
      jsonData?.lang,
      jsonData?.timeToRead,
      jsonData?.summary,
      jsonData?.tags?.map(tag => Tag.fromJson(tag)),
      jsonData?.categories?.map(category => Category.fromJson(category)),
        jsonData?.authors?.map(person => Person.fromJson(person)),
      jsonData?.cover && Image.fromJson(jsonData?.cover),
      jsonData?.content
    );
  }
  constructor(
    public id?: string,
    public title?: string,
    public date?: Date | string,
    public path?: string,
    public lang?: string,
    public timeToRead?: number,
    public summary?: string,
    public tags?: ITag[],
    public categories?: ICategory[],
    public authors?: IPerson[],
    public cover?: Image | string,
    public content?: string
  ) {}
}
