import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {RegisterRequest} from "../../models/register-request.interface";
import {Observable} from "rxjs";
import {RegisterResponse} from "../../models/register-response.interface";
import {LoginResponse} from "../../models/login-response.interface";
import {LoginRequest} from "../../models/login-request.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_AUTH = environment.API_AUTH;
  constructor(private http : HttpClient) { }

  register(register : RegisterRequest) : Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.API_AUTH+"register",register);
  }

  login(login : LoginRequest) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.API_AUTH+"login",login);
  }

}
