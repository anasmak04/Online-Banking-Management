import {TransactionResponse} from "./transaction-response.interface";

export interface TransactionState {
  transactions : TransactionResponse[],
  error: string | null;
}
