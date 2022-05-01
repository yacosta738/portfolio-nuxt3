export interface IMenu {
  name?: string;
  url?: string;
  dataCypress?: string;
  vScrollTo?: string;
}

export default class Menu implements IMenu {
  constructor(
    public name?: string,
    public url?: string,
    public dataCypress?: string,
    public vScrollTo?: string
  ) {}
}
