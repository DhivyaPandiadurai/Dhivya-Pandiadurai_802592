import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  path:string='http://localhost:51028/api/Payment';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Payment[]>
  {
    return this._client.get<Payment[]>(this.path+'/GetPayment');
  }
  
}
