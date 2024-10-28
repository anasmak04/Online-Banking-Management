import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AccountActions} from "../../../core/stores/account/account.actions";
import {AccountResponse} from "../../../core/models/account-response.interface";
import {selectAccounts} from "../../../core/stores/account/account.reducers";
import {createTransactionForm} from "../../../core/validators/transaction-validators";
import {TransactionActions} from "../../../core/stores/transaction/transaction.actions";
import {TransactionRequest} from "../../../core/models/transaction-request.interface";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  @Output() closePopup = new EventEmitter<void>();
  @Output() openPopup = new EventEmitter<void>();

  transactionForm!: FormGroup;

  accounts$: Observable<AccountResponse[]>;

  constructor(private store$: Store, private fb: FormBuilder) {
    this.accounts$ = this.store$.select(selectAccounts);
    this.transactionForm = createTransactionForm(this.fb);

  }

  ngOnInit(): void {
    this.store$.dispatch(AccountActions.getAllAccounts());
  }

  open() {
    this.closePopup.emit();
  }

  cancel() {
    this.openPopup.emit();
  }

  onSubmit(){
    const formValues = this.transactionForm.getRawValue();

    const transaction : TransactionRequest = {
      amount : formValues.amount,
      type : formValues.type,
      sourceAccountId : formValues.sourceAccountId,
      destinationAccountId : formValues.destinationAccountId,
    }

    this.store$.dispatch(TransactionActions.addNewTransaction({transaction}));
    this.cancel();
  }

}
