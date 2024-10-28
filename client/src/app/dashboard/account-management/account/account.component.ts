import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AccountActions} from "../../../core/stores/account/account.actions";
import {selectAccounts} from "../../../core/stores/account/account.reducers";
import {AccountResponse} from "../../../core/models/account-response.interface";
import {UserResponse} from "../../../core/models/user-response.interface";
import {selectUsersByRoleUser} from "../../../core/stores/user/user.reducers";
import {UserActions} from "../../../core/stores/user/user.actions";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts$: Observable<AccountResponse[]>;

  showModal = false;


  constructor(private store: Store) {
    this.accounts$ = this.store.select(selectAccounts);
  }

  ngOnInit(): void {
    this.store.dispatch(AccountActions.getAllAccounts());
  }

  closePopup(): void {
    this.showModal = false;
  }

  openPopup() : void{
    this.showModal = true;
  }

}
