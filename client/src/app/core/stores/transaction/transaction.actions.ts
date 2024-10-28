import { createActionGroup, emptyProps, props } from "@ngrx/store";
import {TransactionResponse} from "../../models/transaction-response.interface";
import {TransactionRequest} from "../../models/transaction-request.interface";


export const TransactionActions = createActionGroup({
  source: 'transactions',
  events: {
    'Get All Transactions': emptyProps(),
    'Get All Transactions Success': props<{ transactions: TransactionResponse[] }>(),
    'Get All Transactions Failure': props<{ error: string }>(),

    'Add New Transaction': props<{transaction : TransactionRequest}>(),
    'Add New Transaction Success': props<{ transaction: TransactionResponse }>(),
    'Add New Transaction Failure': props<{ error: string }>(),

    'Get Transaction By Id ': props<{transactionId: number}>(),
    'Get Transaction By Id Success': props<{ transaction: TransactionResponse }>(),
    'Get Transaction By Id Failure': props<{ error: string }>(),

    'Delete Transaction By Id ': props<{transactionId: number}>(),
    'Delete Transaction By Id Success': emptyProps(),
    'Delete Transaction By Id Failure': props<{ error: string }>(),


  },
});
