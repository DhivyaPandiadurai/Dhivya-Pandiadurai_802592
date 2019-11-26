import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-auser',
  templateUrl: './auser.component.html',
  styleUrls: ['./auser.component.css']
})
export class AuserComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;
  constructor(private _service:UserService) { 
    this.item=new User();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }

  ngOnInit() {
  }
   public Delete(Id:number){
    this._service.Delete(Id).subscribe(k=>k=this.msg)
  }
  public Block(Id:number){
    this._service.Block(Id).subscribe(k=>k=this.msg)
  }
  public UnBlock(Id:number){
    this._service.UnBlock(Id).subscribe(k=>k=this.msg)
  }

}
