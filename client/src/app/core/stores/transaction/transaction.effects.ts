import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {TransactionActions} from "./transaction.actions";
import {TransactionService} from "../../services/transaction/transaction.service";
import {UserActions} from "../user/user.actions";
import {AccountActions} from "../account/account.actions";

@Injectable()
export class TransactionEffects {

  constructor(private actions$: Actions, private transactionService: TransactionService) {}

  LoadTransactions = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.getAllTransactions),
      switchMap(() =>
        this.transactionService.findAll().pipe(
          map((transactions) => TransactionActions.getAllTransactionsSuccess({ transactions })),
          catchError((error) => of(TransactionActions.getAllTransactionsFailure({ error: error.message })))
        )
      )
    )
  );

  AddTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.addNewTransaction),
      switchMap(({ transaction }) =>
        this.transactionService.save(transaction).pipe(
          map((transaction) => TransactionActions.addNewTransactionSuccess({ transaction })),
          catchError((error) => of(TransactionActions.addNewTransactionFailure({ error: error.message })))
        )
      )
    )
  );

  addTransactionSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.addNewTransaction),
      map(() => TransactionActions.getAllTransactions())
    )
  );



}
