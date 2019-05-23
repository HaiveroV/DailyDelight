import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './@modules/home/home.component';
import { VerifyEmailComponent } from './@modules/auth/verify-email/verify-email.component';
// import { AuthGuard } from './@core/guards/auth.guard';
import { PrivacyComponent } from './@shared/components/privacy/privacy.component';
import { TermsOfUseComponent } from './@shared/components/terms-of-use/terms-of-use.component';
import { ForgottenPasswordComponent } from './@modules/auth/forgotten-password/forgotten-password.component';
import { LoginComponent } from './@modules/auth/login/login.component';
import { RegisterComponent } from './@modules/auth/register/register.component';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { WelcomeComponent } from './@modules/home/welcome/welcome.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'forgotten-password',
        component: ForgottenPasswordComponent
    },
    {
        path: 'verify-email',
        component: VerifyEmailComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'terms',
        component: TermsOfUseComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule{

}