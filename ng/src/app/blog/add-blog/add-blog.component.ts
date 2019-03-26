import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  public AddPostForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private user: UserService,
  ) {
    this.formBuilder = formBuilder;
    this.AddPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  addPost(values) {
    if (values.title === "" || values.title === null || values.description === "" || values.description === null) {
      this.toastr.error("error", "Please fill the form");
    } else {

      this.user.addPost(values).subscribe((Response) => {
        if (Response.code === 200) {
          this.router.navigate(['']);
        } else {
          this.toastr.warning('warning', Response.message);
        }
      })
    }
  }

}
