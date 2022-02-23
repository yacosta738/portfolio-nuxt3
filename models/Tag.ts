export interface ITag {
  title?: string;
}

export default class Tag implements ITag {
  static fromJson(title): Tag {
    return new Tag(title);
  }
  constructor(
    public title?: string
  ) {}
}
