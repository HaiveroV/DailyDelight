import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

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

        this.loginForm.valueChanges.subscribe(console.log);
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
}