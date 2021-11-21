import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url: string = "http://localhost:3000/users"
  // url2:string="http://localhost:3000/insurance"

  getUsers()
  {
    return this.http.get<User[]>(this.url);
  }

  insertUser(userobj:User):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(userobj);
    console.log(body);
      return this.http.post(this.url,body,{'headers':headers});
  }
  deleteRecord(id:number):Observable<any>
  {
    let deleteURL =this.url +"/"+id;
    console.log("URL for delete :" +deleteURL);
    return this.http.delete(deleteURL);
  }
  // getProductonID(id:number)

  // {
  //   return this.url.id==id;
  // }
}
