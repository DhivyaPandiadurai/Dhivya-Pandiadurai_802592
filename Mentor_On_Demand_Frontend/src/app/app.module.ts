import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorModule } from './Entities/mentor/mentor.module';
import { MentorService } from './Service/mentor.service';
import{FormsModule}  from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { MentorsignupComponent } from './Entities/mentor/mentorsignup/mentorsignup.component';
import { UserModule } from './Entities/user/user.module';
import { UserService } from './Service/user.service';
import { LoginComponent } from './Entities/login/login.component';
import { AdminModule } from './Entities/admin/admin.module';
import { SearchComponent } from './search/search.component';
import { LoginService } from './Service/login.service';
import { SearchService } from './Service/search.service';
import { TrainingService } from './Service/training.service';


@NgModule({      
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MentorModule,
    UserModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MentorService,UserService,LoginService,SearchService,TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
