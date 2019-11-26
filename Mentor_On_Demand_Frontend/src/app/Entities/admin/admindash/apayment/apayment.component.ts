import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/Models/payment';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-apayment',
  templateUrl: './apayment.component.html',
  styleUrls: ['./apayment.component.css']
})
export class ApaymentComponent implements OnInit {
  item:Payment;
  list:Payment[];
  msg:string;
  constructor(private _service:PaymentService) { 
    this.item=new Payment();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }
  ngOnInit() {
  }

}
