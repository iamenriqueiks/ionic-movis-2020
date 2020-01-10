import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    currentUser;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.getCurrentUser().then(user => {
            this.currentUser = user;
        });
    }


}
