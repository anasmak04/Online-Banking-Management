import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {UserResponse} from "../../models/user-response.interface";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API = environment.API_USER;
  constructor(private http : HttpClient) { }

  findAll(): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(this.USER_API+"all");
  }

  save(userRequest : string){
    return this.http.post(this.USER_API,userRequest);
  }

  update(userRequest : string){
    return this.http.put(this.USER_API,userRequest);
  }

  delete(userId : number){
    return this.http.delete(this.USER_API);
  }

}
