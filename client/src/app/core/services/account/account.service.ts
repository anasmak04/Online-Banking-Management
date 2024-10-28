import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountResponse} from "../../models/account-response.interface";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {AccountRequest} from "../../models/account-request.interface";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  API_ACCOUNT = environment.API_ACCOUNT;
  constructor(private htpClient : HttpClient) { }

  findAll() : Observable<AccountResponse[]>{
    return this.htpClient.get<AccountResponse[]>(this.API_ACCOUNT+"all");
  }

  save(account : AccountRequest) : Observable<AccountResponse> {
    return this.htpClient.post<AccountResponse>(this.API_ACCOUNT+"init",account);

  }
}
