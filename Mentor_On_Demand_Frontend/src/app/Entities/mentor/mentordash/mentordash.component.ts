import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Service/training.service';
import { MentorService } from 'src/app/Service/mentor.service';
import { Router } from '@angular/router';
import { Mentor } from 'src/app/Models/mentor';
import { Training } from 'src/app/Models/training';

@Component({
  selector: 'app-mentordash',
  templateUrl: './mentordash.component.html',
  styleUrls: ['./mentordash.component.css']
})
export class MentordashComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;

  MentorId:number;
  constructor(private router : Router,private _service:MentorService,private _trservice:TrainingService) {

    this.MentorId = +localStorage.getItem('token');
    this.item=new Mentor();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.mid=this.MentorId;
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
{ this.item.active=true;
  this.item.Availability=true;
 
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
  public MentorTrainings(){
    this._trservice.GetTrainingByUser(this.MentorId).subscribe(k=>this.lists=k);
    // this.curtrainingclick=1;
    // this.updatepassclick=0;
  }
 

}
