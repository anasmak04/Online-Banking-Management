import {TransactionType} from "../enums/transaction-type";

export interface TransactionRequest {
  amount: number;
  type: TransactionType;
  sourceAccountId: number;
  destinationAccountId: number;
}
