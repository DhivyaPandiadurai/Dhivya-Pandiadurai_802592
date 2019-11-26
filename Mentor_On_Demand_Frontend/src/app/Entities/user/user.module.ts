import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserdashComponent } from './userdash/userdash.component';
import { LoginComponent } from '../login/login.component';
//import { UserloginComponent } from './userlogin/userlogin.component';



@NgModule({
  declarations: [UsersignupComponent, UserdashComponent],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forRoot([{path:'usersignup',component:UsersignupComponent},{path:'userdash',component:UserdashComponent}]) 
  ]
})
export class UserModule { }
