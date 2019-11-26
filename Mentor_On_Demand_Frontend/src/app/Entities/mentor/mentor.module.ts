import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentordashComponent } from './mentordash/mentordash.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import{FormsModule}from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MentordashComponent, MentorsignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([{path:'mentorsignup',component:MentorsignupComponent},{path:'mentordash',component:MentordashComponent}]) 

  ]    

  
})
export class MentorModule { }
