
export interface IImage {
  name?: string;
  url?: string;
  rawUrl?: string;
}

export class Image implements IImage {
  static fromJson(cover): string | Image {
    if (typeof cover === 'string') {
      return cover;
    } else {
      return new Image(
        cover?.name,
        cover?.url,
        cover?.rawUrl,
      );
    }
  }
  constructor(
    public name?: string,
    public url?: string,
    public rawUrl?: string
  ) {}
}
