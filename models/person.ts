export abstract class IPerson {
  id?: string;
  firstName?: string;
  lastLame?: string;
  fullName?: string;
  profilePhoto?: string;
}

export default class Person implements IPerson {
  id: string;

  firstName: string;

  lastLame: string;

  fullName: string;

  profilePhoto: string;
}
