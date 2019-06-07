import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './@modules/home/home.component';
import { AuthGuard } from './@core/guards/auth.guard';
import { PrivacyComponent } from './@shared/components/privacy/privacy.component';
import { LoginComponent } from './@modules/auth/login/login.component';
import { RegisterComponent } from './@modules/auth/register/register.component';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';
import { WelcomeComponent } from './@modules/home/welcome/welcome.component';
import { RecipesComponent } from './@shared/components/recipes/recipes.component';

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
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'recipes',
        component: RecipesComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}