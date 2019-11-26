import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/Service/mentor.service';
import { Mentor } from 'src/app/Models/mentor';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;
  router: any;
  _activatedRoute: any;
    constructor(private _service:MentorService) {
      this.item=new Mentor();
      // this._service.GetAll().subscribe(k=>this.list=k);
     }
  
    ngOnInit() {
    }
    public Add(){
      this.item.active=true;
      this.item.Availability=true;
      this._service.Add(this.item).subscribe(k=>this.msg=k);
     
        // this.router.navigate(['login'],{relativeTo:this._activatedRoute});


    }
    // public Search(){
    //   this._service.Search(this.item.eid).subscribe(k=>this.item=k);
    //   console.log(this.item);
    // }
    public Update(){
    this._service.Update(this.item).subscribe(k=>k=this.msg);
    }
    public Delete(){
      this._service.Delete(this.item.mid).subscribe(k=>k=this.msg);
    }
  

}
