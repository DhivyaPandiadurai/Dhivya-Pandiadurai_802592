import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Mentor} from '../Models/mentor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  path:string='http://localhost:55555/api/Mentor';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetAllMentor');
  }
  public Add(item:Mentor):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  // public search(id:number):Observable<Mentor>{
  //   return this._client.get<Mentor>(this.path+'/GetById/'+id);
  // }
  public Update(item:Mentor){
    return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:Number){
    return this._client.delete(this.path+'/Delete/'+id);
  }
  public Block(id:Number){
    return this._client.put(this.path+'/BlockMentor/'+id,id);
  }
  public UnBlock(id:Number){
    return this._client.put(this.path+'/UnBlockMentor/'+id,id);
  }
}


