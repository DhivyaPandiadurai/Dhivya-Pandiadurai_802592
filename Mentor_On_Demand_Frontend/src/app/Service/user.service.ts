import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path:string='http://localhost:55555/api/User';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<User[]>
  {
    return this._client.get<User[]>(this.path+'/GetAllUser');
  }
  public Add(item:User):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  public Search(primary_skill:string):Observable<User>{
    return this._client.get<User>(this.path+'/GetMentor/'+primary_skill);
  }
  public Update(item:User){
    return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:Number){
    return this._client.delete(this.path+'/Delete/'+id); 
  }
  public Block(id:Number){
    return this._client.put(this.path+'/BlockUser/'+id,id);
  }
  public UnBlock(id:Number){
    return this._client.put(this.path+'/UnBlockUser/'+id,id);
  }
}
