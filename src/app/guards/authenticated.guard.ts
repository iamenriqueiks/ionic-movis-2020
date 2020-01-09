import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        const isAuthenticated = this.authenticationService.isAuthenticated();
        if (isAuthenticated) {
            return true;
        }

        this.router.navigate(['public']);
        return false;
    }
}
