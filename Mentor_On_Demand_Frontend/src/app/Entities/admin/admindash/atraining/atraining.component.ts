import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/Service/training.service';

@Component({
  selector: 'app-atraining',
  templateUrl: './atraining.component.html',
  styleUrls: ['./atraining.component.css']
})
export class AtrainingComponent implements OnInit {
  item:Training;
  list:Training[];
  msg:string;
  constructor(private _service:TrainingService) { 
    this.item=new Training();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }


  ngOnInit() {
  }

}
