import {UserResponse} from "./user-response.interface";
import {InvoiceType} from "../enums/invoice-type";

export interface InvoiceResponse{
  id : number,
  amount : number,
  dueDate : Date,
  status: InvoiceType,
  user : UserResponse
}
