import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorsignupComponent } from './Entities/mentor/mentorsignup/mentorsignup.component';
import { UsersignupComponent } from './Entities/user/usersignup/usersignup.component';
import { LoginComponent } from './Entities/login/login.component';
import { AdmindashComponent } from './Entities/admin/admindash/admindash.component';
import { AuserComponent } from './Entities/admin/admindash/auser/auser.component';
import { AmentorComponent } from './Entities/admin/admindash/amentor/amentor.component';
import { SearchComponent } from './search/search.component';
import { AtrainingComponent } from './Entities/admin/admindash/atraining/atraining.component';
import { AtechnologyComponent } from './Entities/admin/admindash/atechnology/atechnology.component';
import { ApaymentComponent } from './Entities/admin/admindash/apayment/apayment.component';
import { MentordashComponent } from './Entities/mentor/mentordash/mentordash.component';
import { UserdashComponent } from './Entities/user/userdash/userdash.component';


const routes: Routes = [{path:'mentorsignup',component:MentorsignupComponent},
{path:'usersignup',component:UsersignupComponent},
{path:'search',component:SearchComponent},
{path:'login',component:LoginComponent},
{path:'mentordash',component:MentordashComponent},
{path:'userdash',component:UserdashComponent},
{path:'admindash',component:AdmindashComponent}, {path:'auser',component:  AuserComponent
  },
  {
  path:  'amentor',
  component:AmentorComponent
  },
  {
    path:'atraining',
    component:AtrainingComponent
    },
    {
      path:'atechnology',
      component:AtechnologyComponent
      },
      {
        path:'apayment',
        component:ApaymentComponent
        }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
