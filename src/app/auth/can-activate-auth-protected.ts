import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class CanActivateAuthProtected implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.authService.user){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    constructor(private authService: AuthService, private router:Router) {

    }
}