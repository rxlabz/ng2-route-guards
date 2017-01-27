export class User {
    firstName: string;
    lastName: string;

    get name():string{
        return `${this.firstName} ${this.lastName}`
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}