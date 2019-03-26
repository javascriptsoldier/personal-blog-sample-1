import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component'
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'add-blog',
    canActivate: [AuthGuard],
    component: AddBlogComponent,
  }, {
    path: '',
    canActivate: [AuthGuard],
    component: ListBlogComponent,
  }, {
    path: '**',
    canActivate: [AuthGuard],
    component: ListBlogComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
