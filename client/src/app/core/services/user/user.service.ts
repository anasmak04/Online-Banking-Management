import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {Observable} from "rxjs";
import {UserResponse} from "../../models/user-response.interface";
import {UserRequest} from "../../models/user-request.interafce";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API = environment.API_USER;
  constructor(private http : HttpClient) { }

  findAll(): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(this.USER_API+"all");
  }

  findByUser_name() : Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(this.USER_API+"role/USER");
  }

  findById(userId: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.USER_API}/${userId}`);
  }

  save(userRequest: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.USER_API+"init", userRequest);
  }


  update(userRequest : string){
    return this.http.put(this.USER_API,userRequest);
  }

  delete(userId : number){
    return this.http.delete(this.USER_API);
  }

}
