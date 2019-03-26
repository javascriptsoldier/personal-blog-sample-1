import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token: any;
    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('just hitting')
        if (localStorage.getItem('token')) {
            // let isAdminroute =
            const token = localStorage.getItem('token');
            console.log('token---------------->', token);
            // console.log(">>>>>>>>>>>>>>>>>>>>>>>", this.activatedRouter, this.router.url, this.router.url.includes('/admin'), 'token-------------->', token)
            const accessReq = req.clone({
                headers: req.headers.set('authorization', 'Bearer ' + token)
            });
            return next.handle(accessReq);
        } else {
            return next.handle(req);
        }

    }
};