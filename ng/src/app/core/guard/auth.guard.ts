import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthGuard implements CanActivate {

    public isUserLoggedIn: any;

    constructor(private user: UserService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.checkLogin();
    }

    checkLogin() {
        let isUserLoggedIn: boolean;
        return this.user.checkUserLogin().map((response) => {
            console.log('response-------->',response)
            if (response.code === 200) {
                this.isUserLoggedIn = true;
                return true;
            } else {
                this.router.navigate(['/login'])
                this.isUserLoggedIn = false;
                return false;
            }
        });
    }
}