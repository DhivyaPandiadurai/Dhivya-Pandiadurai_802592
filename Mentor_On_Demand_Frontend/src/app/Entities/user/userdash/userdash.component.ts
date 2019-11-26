import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Service/training.service';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { Training } from 'src/app/Models/training';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  
  item:User;
  list:User[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;

  UserName:number;
  constructor(private router : Router,private _service:UserService,private _trservice:TrainingService) {
    this.UserName = +localStorage.getItem('token');
    this.item=new User();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.uid=this.UserName;
    this.items=new Training();
   
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['login']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['login']);
 
   }
   public add()
  {
    this.addclick=1;
  }
   public Update()
{
  this.item.active=true;
  // this.item.availability=true;
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public UserCurrentTrainings(){
  this._trservice.GetTrainingByUser(this.UserName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}


  }



  




 