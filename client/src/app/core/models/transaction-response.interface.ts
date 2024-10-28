import {TransactionType} from "../enums/transaction-type";
import {AccountResponse} from "./account-response.interface";

export interface TransactionResponse{
  id : number,
  amount : number,
  type : TransactionType,
  sourceAccount : AccountResponse,
  destinationAccount : AccountResponse,
}
