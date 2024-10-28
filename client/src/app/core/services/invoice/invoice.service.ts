import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {Observable} from "rxjs";
import {InvoiceResponse} from "../../models/invoice-response.interface";
import {InvoiceRequest} from "../../models/invoice-request.interface";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  API_INVOICE = environment.API_INVOICE;

  constructor(private httpClient : HttpClient) { }

  findAll() : Observable<InvoiceResponse[]>{
    return this.httpClient.get<InvoiceResponse[]>(this.API_INVOICE+"all");
  }

  save(invoice : InvoiceRequest) : Observable<InvoiceResponse> {
    return this.httpClient.post<InvoiceResponse>(this.API_INVOICE+"init",invoice);

  }
}
