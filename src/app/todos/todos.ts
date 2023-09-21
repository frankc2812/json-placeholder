export interface TodoInterface {
    userId: Number;
    id: Number;
    title: String;
    completed: Boolean;  
}

export class Todos implements TodoInterface {
    constructor(
        public userId: Number,
        public id: Number,
        public title: String,
        public completed: Boolean){}
};