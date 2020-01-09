import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string;
    password: string;
    isSubmitting = false;

    constructor(private authenticationService: AuthenticationService,
                private router: Router,
                private toastController: ToastController) {
    }

    ngOnInit() {
    }

    onLogIn() {
        this.isSubmitting = true;
        this.authenticationService.logIn(this.email, this.password).then(didLogin => {
            this.isSubmitting = false;
            if (didLogin) {
                this.router.navigate(['auth']);
            } else {
                this.toastController.create({
                    message: 'Login NO',
                    duration: 2000
                }).then(toast => {
                    toast.present();
                });
            }
        });
    }
}
