import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../@core/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../@core/services/alert.service';
import { ConfirmPasswordValidator } from '../must-match.validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    errorMessage: string = "";
    registerMessage: string = "Регистрацията е успешна !";
    
    constructor(
        private fb: FormBuilder,
        public authService: AuthService,
        private router: Router,
        private alertService: AlertService
    ) { }

    ngOnInit() {

        this.registerForm = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            confirmPassword: ['', [
                Validators.required,
            ]]
        },{
            validator: ConfirmPasswordValidator
        })
    }

    get email() {
        return this.registerForm.get('email');
    }

    get password() {
        return this.registerForm.get('password');
    }

    get confirmPassword() {
        return this.registerForm.get('confirmPassword');
    }

    tryRegister(value) {
        this.authService.onRegister(value)
            .then(resolve => {
                this.alertService.success(this.registerMessage);
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 3000);
            }, error => {
                console.log(error);
                this.errorMessage = error.message;
                this.alertService.error(this.errorMessage);
            })
    }

}