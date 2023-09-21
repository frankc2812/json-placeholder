export interface CommentsInterface {
    postId: Number;
    id: Number;
    name: String;
    email: String;
    body: String;
  }
  
  export class Comments implements CommentsInterface {
    constructor(
      public postId: Number,
      public id: Number,
      public name: String,
      public email: String,
      public body: String
    ) { }
  };
