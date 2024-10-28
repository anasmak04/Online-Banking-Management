import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {InvoiceResponse} from "../../../core/models/invoice-response.interface";
import {selectInvoices} from "../../../core/stores/invoice/invoice.reducers";
import {InvoiceActions} from "../../../core/stores/invoice/invoice.actions";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  showModal : boolean = false;

  invoices$: Observable<InvoiceResponse[]>;

  constructor(private store: Store) {
    this.invoices$ = this.store.select(selectInvoices);
  }

  ngOnInit(): void {
    this.store.dispatch(InvoiceActions.getAllInvoices());
  }

  closePopup(): void {
    this.showModal = false;
  }

  openPopup() : void{
    this.showModal = true;
  }

}
