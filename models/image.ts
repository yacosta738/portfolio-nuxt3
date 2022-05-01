export abstract class IImage {
  name?: string;
  url?: string;
  rawUrl?: string;
}

export class Image implements IImage {
  name?: string;
  url?: string;
  rawUrl?: string;
}
