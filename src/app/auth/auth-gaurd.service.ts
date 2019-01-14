import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({ providedIn: 'root' })
export class LoggedIn implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }

    canActivate() {
        if (this.loginService.isAuthorized) {
            return true;
        } else if (localStorage.getItem('currentUser')) {
            this.loginService.isAuthorized = true;
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}
