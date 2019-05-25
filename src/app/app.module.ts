import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CustomAngularMaterialsModule } from './@core/angular-materials.module';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './@shared/components/privacy/privacy.component';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './@modules/home/home.component';
import { VerifyEmailComponent } from './@modules/auth/verify-email/verify-email.component';
import { RegisterComponent } from './@modules/auth/register/register.component';
import { LoginComponent } from './@modules/auth/login/login.component';
import { ForgottenPasswordComponent } from './@modules/auth/forgotten-password/forgotten-password.component';
import { FooterComponent } from './@core/footer/footer.component';
import { WelcomeComponent } from './@modules/home/welcome/welcome.component';
import { NavbarComponent } from './@core/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

var config = {
  apiKey: "AIzaSyCtrMa720Y_af612fMzUwq7NKaIoCKwNSg",
  authDomain: "dailydelight-6b195.firebaseapp.com",
  databaseURL: "https://dailydelight-6b195.firebaseio.com",
  projectId: "dailydelight-6b195",
  storageBucket: "dailydelight-6b195.appspot.com",
  messagingSenderId: "317294291225",
  appId: "1:317294291225:web:34962cff435727c4"
};


@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    NotFoundComponent,
    HomeComponent,
    VerifyEmailComponent,
    RegisterComponent,
    LoginComponent,
    ForgottenPasswordComponent,
    FooterComponent,
    WelcomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    CustomAngularMaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
