import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from '../services/alert.service'
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  not

  constructor(
    private authService: AuthService,
    public alertService: AlertService,
    private router: Router
  ) { }

 


}

