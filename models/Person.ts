export interface IPerson {
  id?: string;
  firstName?: string;
  lastLame?: string;
  fullName?: string;
  profilePhoto?: string;
}

export default class Person implements IPerson {
  static fromJson(jsonData): Person {
    return new Person(
      jsonData?.id,
      jsonData?.firstName,
      jsonData?.lastLame,
      jsonData?.fullName,
      jsonData?.profilePhoto,
    );
  }
  constructor(
    public id?: string,
    public firstName?: string,
    public lastLame?: string,
    public fullName?: string,
    public profilePhoto?: string,
  ) {}
}
