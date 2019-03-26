import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  public userSignupForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private user: UserService,
  ) {
    this.formBuilder = formBuilder;
  this.userSignupForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.minLength(2),
    Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
    password: ['', Validators.required]
  });
  }

  ngOnInit() {
  }
  userSignup(value){
    console.log(value)
    this.blockUI.start('User login...');
    if (value.firstName === "" || value.firstName === null || value.lastName === "" || value.lastName === null || value.email === "" || value.email === null || value.password === "" || value.password === null) {
      this.toastr.error("error", "Please fill the form");
      this.blockUI.stop();
    } else {

    
    this.user.signUp(value).subscribe((response) => {
      console.log('sadfasdfasdfadfasdf===>',response)    
      if (response.code === 404) {
        this.toastr.error('error', response.message);
        setTimeout(() => {
          this.blockUI.stop();
        }, 10);
      } else if (response.code === 200) {  
        // localStorage.setItem('business_name', response.data.business_name);
        // localStorage.setItem('token', response.data.token);
        // localStorage.setItem('email', response.data.email_id);
        // localStorage.setItem('user_id', response.data.user_id);
        // localStorage.setItem('create_time', response.data.create_time);
        // localStorage.setItem('userType', response.data.userType);
        this.router.navigate(['/login']);
      
        setTimeout(() => {
          this.blockUI.stop();
          this.toastr.success('success', response.message);
       
        },0);
      } else {
        this.toastr.warning('warning', response.message);
        setTimeout(() => {
          this.blockUI.stop();
        }, 0);
      }

    });
  }

  }

}
