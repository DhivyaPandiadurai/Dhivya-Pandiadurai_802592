import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;
    constructor(private _service:UserService) {
      this.item=new User();
      // this._service.GetAll().subscribe(k=>this.list=k);
     }
  
   
    public Add(){
      this.item.active=true;
      // this.item.Availability=true;
      this._service.Add(this.item).subscribe(k=>this.msg=k);
    }
    // public Search(){
    //   this._service.Search(this.item.primary_skill).subscribe(k=>this.item=k);
    //   console.log(this.item);
    // }
    public Update(){
    this._service.Update(this.item).subscribe(k=>k=this.msg);
    }
    public Delete(){
      this._service.Delete(this.item.uid).subscribe(k=>k=this.msg);
    }
  

  

  ngOnInit() {
  }

}
