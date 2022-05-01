export interface ISocialMedia {
  name?: string;
  url?: string;
}

export default class SocialMedia implements ISocialMedia {
  constructor(public name?: string, public url?: string) {}
}
