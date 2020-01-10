import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor() {
    }

    isAuthenticated(): Promise<boolean> {
        return Backendless.UserService.isValidLogin();
    }

    getCurrentUser(): Promise<Backendless.User> {
        return Backendless.UserService.getCurrentUser();
    }

    logIn(email: string, password: string): Promise<boolean> {
        return Backendless.UserService.login(email, password, true)
            .then((loggedInUser) => {
                return true;
            }).catch((error) => {
                return false;
            });
    }

    logOut(): Promise<void> {
        return Backendless.UserService.logout();
    }
}
