import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {LoanService} from "../../services/loan/loan.service";
import {LoanActions} from "./loan.actions";
import {InvoiceActions} from "../invoice/invoice.actions";
import {AccountActions} from "../account/account.actions";

@Injectable()
export class LoanEffects {

    constructor(private actions$: Actions, private loanService: LoanService) {}

    LoadLoans$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoanActions.getAllLoans),
            switchMap(() =>
                this.loanService.findAll().pipe(
                    map((loans) => LoanActions.getAllLoansSuccess({ loans })),
                    catchError((error) => of(LoanActions.getAllLoansFailure({ error: error.message })))
                )
            )
        )
    );

  AdNewLoan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoanActions.addNewLoan),
      mergeMap(({ loan }) =>
        this.loanService.save(loan).pipe(
          map((response) => {
            return LoanActions.addNewLoanSuccess({ loan: response });
          }),
          catchError((error) =>
            of(LoanActions.addNewLoanFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addLoanSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoanActions.addNewLoanSuccess),
      map(() => LoanActions.getAllLoans())
    )
  );


}
