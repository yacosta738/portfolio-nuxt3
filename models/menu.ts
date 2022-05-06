export interface IMenu {
  name: string;
  title: string;
  hash: string;
  dataCypress?: string;
}

export default class Menu implements IMenu {
  constructor(
    public name: string,
    public title: string,
    public hash: string,
    public dataCypress?: string
  ) {}
}
