import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/Models/technology';
import { TechnologyService } from 'src/app/Service/technology.service';

@Component({
  selector: 'app-atechnology',
  templateUrl: './atechnology.component.html',
  styleUrls: ['./atechnology.component.css']
})
export class AtechnologyComponent implements OnInit {
  item:Technology;
  list:Technology[];
  msg:string;
  addclick;
  constructor(private _service:TechnologyService) { 
    this.item=new Technology();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }
 
  ngOnInit() {
  }
  public add(){
    this.addclick=1;
  }
  public Add(){
    this._service.Add(this.item).subscribe(k=>this.msg=k)
  }
}
