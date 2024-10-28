import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {UserResponse} from "../../../core/models/user-response.interface";
import {Store} from "@ngrx/store";
import {selectUsersByRoleUser} from "../../../core/stores/user/user.reducers";
import {createLoanForm} from "../../../core/validators/loan-validators";
import {LoanRequest} from "../../../core/models/loan-request.interface";
import {LoanActions} from "../../../core/stores/loan/loan.actions";
import {UserActions} from "../../../core/stores/user/user.actions";

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  @Output() closePopup = new EventEmitter<void>();
  @Output() openPopup = new EventEmitter<void>();

  loanForm!: FormGroup;

  users$: Observable<UserResponse[]>;

  constructor(private store$: Store, private fb: FormBuilder) {
    this.users$ = this.store$.select(selectUsersByRoleUser);
    this.loanForm = createLoanForm(this.fb);

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
    const formValues = this.loanForm.getRawValue();
    const loan : LoanRequest = {
      amount : formValues.amount,
      interestRate : formValues.interestRate,
      approved : formValues.approved,
      userId : formValues.userId,
    }

    this.store$.dispatch(LoanActions.addNewLoan({loan}));
    this.cancel();
  }
}
