import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoiceComponent} from "./invoice/invoice.component";


@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule
  ],

  exports : [
    InvoiceComponent
  ]
})
export class InvoiceModule { }
