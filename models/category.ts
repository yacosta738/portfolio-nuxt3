export interface ICategory {
  name?: string;
  count?: number;
  lang?: string;
}

export default class Category implements ICategory {
  name?: string;
  count?: number;
  lang?: string;

  constructor(data?: ICategory) {
    if (data) {
      // eslint-disable-next-line no-restricted-syntax
      for (const property in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }
}
