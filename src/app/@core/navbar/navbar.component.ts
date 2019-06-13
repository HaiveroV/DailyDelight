import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'DailyDelight™';
  shortTitle = 'D & D';
  logoutMsg = 'Вие излязохте от профила си.'
  user: firebase.User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private afAuth: AngularFireAuth,
    public router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authService.getLoggedInUser()
      .subscribe(user => {
        // console.log(user)
        this.user = user;
      })
  }


  logOut() {
    this.afAuth.auth.signOut().then(() => {

      this.alertService.warn(this.logoutMsg);
      this.router.navigate(['/login']);
    })
  }

}
