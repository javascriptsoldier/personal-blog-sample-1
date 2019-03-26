import { forwardRef, Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { observable } from 'rxjs';


@Injectable()
export class UserService {

  public apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private https: HttpClient,
  ) {
    console.log(environment.apiUrl);
   }
   signUp(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'user-sign-up', data)
  }
  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'user-login', data)
  }
  checkUserLogin(): Observable<any> {
    return this.http.get(this.apiUrl + 'check-user-login')
  }


  userLoggedIn(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'check-if-user-logged-in', data)
  }

  userLogout(): Observable<any> {
    return this.http.get(this.apiUrl + 'user-logout');
  }
  forgotpassword(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'forgot-password', data)
  }


  // blog apis
  
  listblogs(): Observable<any> {
    return this.http.get(this.apiUrl + 'list-posts')
  }
  addPost(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'add-post', data)
  }

}
