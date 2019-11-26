import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { RouterModule } from '@angular/router';
import { AuserComponent } from './admindash/auser/auser.component';
import { AmentorComponent } from './admindash/amentor/amentor.component';
import { AtrainingComponent } from './admindash/atraining/atraining.component';
import { AtechnologyComponent } from './admindash/atechnology/atechnology.component';
import { ApaymentComponent } from './admindash/apayment/apayment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdmindashComponent, AuserComponent, AmentorComponent, AtrainingComponent, AtechnologyComponent, ApaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([{path:'admindash',component:AdmindashComponent,
    children: [
    {
    path:  'auser',
    component:  AuserComponent
    },
    {
    path:  'amentor',
    component:  AmentorComponent
    },
    {
      path:  'atraining',
      component:  AtrainingComponent
      },
      {
        path:  'atechnology',
        component:  AtechnologyComponent
        },
        {
          path:'apayment',
          component:ApaymentComponent
          }]}
  ]) 
  ]
})
export class AdminModule { }
