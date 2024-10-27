import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionComponent} from "./transaction/transaction.component";


@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [TransactionComponent]
})
export class TransactionModule { }
