export default abstract class Entity {
  id: string;
  title: string;
  content: any;
  createdAt?: Date;
  updatedAt?: Date;

  protected constructor(
    id: string,
    title: string,
    content: any,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }
}
