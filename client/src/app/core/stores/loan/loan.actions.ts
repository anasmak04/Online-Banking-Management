import { createActionGroup, emptyProps, props } from "@ngrx/store";
import {LoanResponse} from "../../models/loan-response.interface";
import {TransactionRequest} from "../../models/transaction-request.interface";
import {TransactionResponse} from "../../models/transaction-response.interface";
import {LoanRequest} from "../../models/loan-request.interface";


export const LoanActions = createActionGroup({
  source: 'Loan',
  events: {
    'Get All Loans': emptyProps(),
    'Get All Loans Success': props<{ loans: LoanResponse[] }>(),
    'Get All Loans Failure': props<{ error: string }>(),

    'Add New Loan': props<{loan : LoanRequest}>(),
    'Add New Loan Success': props<{ loan: LoanResponse }>(),
    'Add New Loan Failure': props<{ error: string }>(),

    'Get Loan By Id ': props<{loanId: number}>(),
    'Get Loan By Id Success': props<{ loan: LoanResponse }>(),
    'Get Loan By Id Failure': props<{ error: string }>(),

    'Delete Loan By Id ': props<{loanId: number}>(),
    'Delete Loan By Id Success': emptyProps(),
    'Delete Loan By Id Failure': props<{ error: string }>(),

  },
});
