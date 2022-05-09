export interface ITech {
  id: string;
  title?: string;
  icon?: string;
  url?: string;
}

export default class Tech implements ITech {
  id: string;
  title?: string;
  icon?: string;
  url?: string;

  constructor(tech: ITech) {
    this.id = tech.id;
    this.title = tech.title;
    this.icon = tech.icon;
    this.url = tech.url;
  }
}
