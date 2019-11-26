import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  path:string='http://localhost:44444/api/Training';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Training[]>
  {
    return this._client.get<Training[]>(this.path+'/GetAllTraining');
  }
  public GetTrainingByUser(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByUser/'+id);
  }

  public GetTrainingByMentor(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByMentor/'+id);
  }
 
}
