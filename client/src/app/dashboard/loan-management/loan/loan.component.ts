import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {LoanResponse} from "../../../core/models/loan-response.interface";
import {selectLoans} from "../../../core/stores/loan/loan.reducers";
import {LoanActions} from "../../../core/stores/loan/loan.actions";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  showModal : boolean = false;

  loans$: Observable<LoanResponse[]>;

  constructor(private store: Store) {
    this.loans$ = this.store.select(selectLoans);
  }

  ngOnInit(): void {
    this.store.dispatch(LoanActions.getAllLoans());
  }

  closePopup(): void {
    this.showModal = false;
  }

  openPopup() : void{
    this.showModal = true;
  }


}
