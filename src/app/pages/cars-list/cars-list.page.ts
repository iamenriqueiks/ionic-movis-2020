import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {CarsService} from '../../services/cars.service';
import {Car} from '../../models/car';

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.page.html',
    styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
    currentUser;

    carsToDisplay: Car[] = [];

    constructor(private authenticationService: AuthenticationService,
                private carsService: CarsService,
                private router: Router) {
    }

    ngOnInit() {
        this.authenticationService.getCurrentUser().then(user => {
            this.currentUser = user;
        });

        this.carsService.getCars().then(cars => {
            console.log(cars);
            this.carsToDisplay = cars;
        });
    }

    onLogOut() {
        this.authenticationService.logOut().then(() => {
            this.router.navigate(['public']);
        });
    }
}
