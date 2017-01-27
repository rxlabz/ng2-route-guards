import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/RX";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class CurrentUserResolver implements Resolve<any>{


    constructor(private service:AuthService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return Observable.of(this.service.user) ;
    }
}