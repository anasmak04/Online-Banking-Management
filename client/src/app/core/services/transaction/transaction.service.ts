import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {Observable} from "rxjs";
import {TransactionResponse} from "../../models/transaction-response.interface";
import {TransactionRequest} from "../../models/transaction-request.interface";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  API_TRANSACTION = environment.API_TRANSACTION;

  constructor(private httpClient : HttpClient) { }

  findAll() : Observable<TransactionResponse[]>{
    return this.httpClient.get<TransactionResponse[]>(this.API_TRANSACTION+"all");
  }

  save(transaction : TransactionRequest) : Observable<TransactionResponse>{
      return this.httpClient.post<TransactionResponse>(this.API_TRANSACTION+"init",transaction);
  }
}
