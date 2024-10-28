import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {Observable} from "rxjs";
import {LoanResponse} from "../../models/loan-response.interface";
import {LoanRequest} from "../../models/loan-request.interface";

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  API_LOAN = environment.API_LOAN;
  constructor(private httpClient : HttpClient) { }

  findAll() : Observable<LoanResponse[]>{
    return this.httpClient.get<LoanResponse[]>(this.API_LOAN+"all");
  }

  save(loan : LoanRequest) : Observable<LoanResponse>{
    return this.httpClient.post<LoanResponse>(this.API_LOAN+"init",loan);

  }
}
