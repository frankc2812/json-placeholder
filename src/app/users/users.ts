export interface UsersInterface {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
        geo: {
            lat: String;
            lng: String;
        };
    };
    phone: String;
    website: String;
    company: {
        name: String;
        catchPhrase: String;
        bs: String;
    };
}

export class Users implements UsersInterface {
    constructor(
        public id: Number,
        public name: String,
        public username: String,
        public email: String,
        public address: {
            street: String;
            suite: String;
            city: String;
            zipcode: String;
            geo: {
                lat: String;
                lng: String;
            };
        },
        public phone: String,
        public website: String,
        public company: {
            name: String;
            catchPhrase: String;
            bs: String;
        }
    ) { }
}