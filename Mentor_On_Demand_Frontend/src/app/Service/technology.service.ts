import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../Models/training';
import { Observable } from 'rxjs';
import { Technology } from '../Models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  path:string='http://localhost:51018/api/Technology';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Technology[]>
  {
    return this._client.get<Technology[]>(this.path+'/GetTechnology');
  }
  public Add(item:Technology):Observable<string>
  {
    return this._client.post<string>(this.path+'/AddSkill',item);
  }
  
  
}
