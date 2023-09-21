export interface PostInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
 
export class Post implements PostInterface {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) {}
}

