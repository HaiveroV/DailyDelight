import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../@core/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../@core/services/alert.service'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    errorMessage: string = '';
    loginMessage: string = "Вие влязохте успешно! "

    constructor(
        private fb: FormBuilder,
        public authService: AuthService,
        public router: Router,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
        })
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    tryLogin(value) {
        this.authService.onLogin(value)
            .then(resolve => {
                this.alertService.success(this.loginMessage + this.email.value);
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 1500);
            }, error => {
                this.errorMessage = error.message;
                this.alertService.error(this.errorMessage);
            })
    }
}