import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class AuthService {

    user: User;
    user$:EventEmitter<User> = new EventEmitter<User>();

    constructor() {
    }

    login() {
        this.user = {name: 'Bob'};
        this.user$.next(this.user);
    }
    logout() {
        this.user = null;
        this.user$.next(this.user);
    }

}

export class User{
    constructor(public name:string){}
}
