export interface ICategory {
  title?: string;
}

export default class Category implements ICategory {
  static fromJson(title): Category {
    return new Category(title);
  }
  constructor(
    public title?: string,
  ) {}
}
