import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  public userLoginForm: FormGroup;
  public forgotPassword: FormGroup;

  public token: any;
  public emailId: any;
  public submitted: Boolean = false;
  public signinBox: boolean = true;
  public forgotPasswordBox: boolean = false;
  public isChecked = false;
  public isChcekBoxChecked = false;
  public rememberMe: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private user: UserService,
  ) {
    this.formBuilder = formBuilder;
    this.userLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2),
      Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      password: ['', Validators.required]
    });
    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$'), Validators.minLength(3), Validators.maxLength(40)]]
    })
   }

   ngOnInit() {

  }
  userLogin(value) {
    this.submitted = true;
    console.log('--->',value)
    if (value.email === "" || value.email === null || value.password === "" || value.password === null) {
      this.toastr.error("error", "Please fill the form");
    } else {
      this.blockUI.start('User login...');
      this.user.login(value).subscribe((response) => {
        if (response.code === 404) {
          this.toastr.error('error', response.message);
          setTimeout(() => {
            this.blockUI.stop();
          }, 10);
        } else if (response.code === 200) {
          if (this.isChecked) {
            const dateOffset = (24 * 60 * 60 * 1000) * 15; //5 days
            let myDate = new Date();
            myDate.setTime(myDate.getTime() + dateOffset);
            document.cookie = 'u_email = ' + value.email + '; expires = ' + myDate + '; path = /';
            document.cookie = 'u_String = ' + value.password + '; expires = ' + myDate + '; path = /';
            document.cookie = 'u_rememberMe = 1; expires = ' + myDate + '; path = /';
          } else {
            document.cookie = 'u_email =; expires =; path = /';
            document.cookie = 'u_String =; expires =; path = /';
            document.cookie = 'u_rememberMe = 0; expires =; path = /';
          }
          console.log('response------->', response);
          
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('email', value.email);
          localStorage.setItem('id', response.data.id);
          this.router.navigate(['']);
        
          setTimeout(() => {
            this.blockUI.stop();
            this.toastr.success('success', response.message);
         
          },2000);
        } else {
          this.toastr.warning('warning', response.message);
          setTimeout(() => {
            this.blockUI.stop();
          }, 3000);
        }

      });
    }
  }
  public forgotpassword(valid: boolean) {
    this.signinBox = false;
    this.forgotPasswordBox = true;

  }
  public signInClicked() {
    this.signinBox = true;
    this.forgotPasswordBox = false;
  }
  
  public RememberMe() {
    if (this.isChecked === false) {
      this.isChecked = true;
    } else if (this.isChecked === true) {
      this.isChecked = false;
    }
  }
}
