import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {UserResponse} from "../../../core/models/user-response.interface";
import {Store} from "@ngrx/store";
import {selectUsersByRoleUser} from "../../../core/stores/user/user.reducers";
import {UserActions} from "../../../core/stores/user/user.actions";
import {createInvoiceForm} from "../../../core/validators/invoice-validators";
import {InvoiceRequest} from "../../../core/models/invoice-request.interface";
import {InvoiceActions} from "../../../core/stores/invoice/invoice.actions";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  @Output() closePopup = new EventEmitter<void>();
  @Output() openPopup = new EventEmitter<void>();

  invoiceForm!: FormGroup;

  users$: Observable<UserResponse[]>;

  constructor(private store$: Store, private fb: FormBuilder) {
    this.users$ = this.store$.select(selectUsersByRoleUser);
    this.invoiceForm = createInvoiceForm(this.fb);

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
    const formValues = this.invoiceForm.getRawValue();
    const invoice : InvoiceRequest = {
      amount : formValues.amount,
      dueDate : formValues.dueDate,
      status : formValues.status,
      userId : formValues.userId,
    }

    this.store$.dispatch(InvoiceActions.addNewInvoice({invoice}));
    this.cancel();
  }

}
