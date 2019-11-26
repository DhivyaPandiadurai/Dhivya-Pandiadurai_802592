import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '../Models/mentor';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  path: String = 'http://localhost:51015/api/User';
  constructor(private _client : HttpClient) { }
  public SearchMentor(skill): Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetMentor/'+skill);
  }
}

