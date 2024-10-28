import {InvoiceType} from "../enums/invoice-type";

export interface InvoiceRequest {
  amount : number,
  dueDate : Date,
  status :InvoiceType,
  userId : number,
}
