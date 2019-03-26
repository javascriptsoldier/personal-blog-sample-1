import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  posts:any;
  constructor(
    private user : UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user.listblogs().subscribe((responce)=>{
      console.log(responce)
      this.posts = responce.post
    })

  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

}
