import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {UserResponse} from "../../../core/models/user-response.interface";
import {selectUsersByRoleUser} from "../../../core/stores/user/user.reducers";
import {UserActions} from "../../../core/stores/user/user.actions";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";
import {createRegisterForm} from "../../../core/validators/register-validators";
import {createAccountForm} from "../../../core/validators/account-validator";
import {RegisterRequest} from "../../../core/models/register-request.interface";
import {AuthActions} from "../../../core/stores/auth/auth.actions";
import {AccountRequest} from "../../../core/models/account-request.interface";
import {AccountActions} from "../../../core/stores/account/account.actions";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  @Output() closePopup = new EventEmitter<void>();
  @Output() openPopup = new EventEmitter<void>();

  accountForm!: FormGroup;

  users$: Observable<UserResponse[]>;

  constructor(private store$: Store, private fb: FormBuilder) {
    this.users$ = this.store$.select(selectUsersByRoleUser);
    this.accountForm = createAccountForm(this.fb);

  }

  ngOnInit(): void {
    this.store$.dispatch(UserActions.getAllUsersWithRoleUser());
  }

  open() {
    this.closePopup.emit();
  }

  cancel() {
    this.openPopup.emit();
  }

  onSubmit(){
    const formValues = this.accountForm.getRawValue();
    const account : AccountRequest = {
      accountNumber : formValues.accountNumber,
      balance : formValues.balance,
      userId : formValues.userId,
    }

    this.store$.dispatch(AccountActions.addNewAccount({account}));
    this.cancel();
  }

}
