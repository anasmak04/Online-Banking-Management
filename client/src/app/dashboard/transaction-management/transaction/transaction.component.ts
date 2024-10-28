import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {TransactionResponse} from "../../../core/models/transaction-response.interface";
import {selectTransactions} from "../../../core/stores/transaction/transaction.reducers";
import {TransactionActions} from "../../../core/stores/transaction/transaction.actions";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  showModal = false;

  transactions$: Observable<TransactionResponse[]>;

  constructor(private store: Store) {
    this.transactions$ = this.store.select(selectTransactions);
  }

  ngOnInit(): void {
    this.store.dispatch(TransactionActions.getAllTransactions());
  }


  closePopup(): void {
    this.showModal = false;
  }

  openPopup() : void{
    this.showModal = true;
  }

}
