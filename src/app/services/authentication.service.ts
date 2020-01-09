import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private _currentUser;

    constructor() {
    }

    isAuthenticated(): boolean {
        // TODO: Esto es temporal!
        return !!this._currentUser;
    }

    get currentUser() {
        return this._currentUser;
    }

    logIn(email: string, password: string): Promise<boolean> {
        return new Promise(resolve => {
            this._currentUser = {email: 'enrique@iknesoft.com', name: 'Enrique Diaz R.'};
            setTimeout(resolve, 100, true);
        });
    }
}
