export interface ITag {
  name?: string;
  count?: number;
  lang?: string;
}

export default class Tag implements ITag {
  name?: string;
  count?: number;
  lang?: string;

  constructor(data?: ITag) {
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
