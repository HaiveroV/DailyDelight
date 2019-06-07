import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './@core/services/auth.service';

import { AuthGuard } from './@core/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { CustomAngularMaterialsModule } from './@core/angular-materials.module';
import { AlertModule } from './@modules/alert/alert.module';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { PrivacyComponent } from './@shared/components/privacy/privacy.component';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { HomeComponent } from './@modules/home/home.component';
import { RegisterComponent } from './@modules/auth/register/register.component';
import { LoginComponent } from './@modules/auth/login/login.component';
import { FooterComponent } from './@core/footer/footer.component';
import { WelcomeComponent } from './@modules/home/welcome/welcome.component';
import { NavbarComponent } from './@core/navbar/navbar.component';
import { RecipesComponent } from './@shared/components/recipes/recipes.component';
import { RecipeDetailsComponent } from './@shared/components/recipes/recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    WelcomeComponent,
    NavbarComponent,
    RecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CustomAngularMaterialsModule,
    AlertModule,
    StarRatingModule.forRoot(),

  ],
  providers: [
    AuthService,
    AngularFirestore,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

 }
