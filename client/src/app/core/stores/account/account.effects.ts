import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, of, switchMap} from 'rxjs';
import {AccountActions} from "./account.actions";
import {AccountService} from "../../services/account/account.service";
import {AuthActions} from "../auth/auth.actions";
import {InvoiceActions} from "../invoice/invoice.actions";

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private accountService: AccountService) {}

  LoadAccounts = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getAllAccounts),
      switchMap(() =>
        this.accountService.findAll().pipe(
          map((accounts) => AccountActions.getAllAccountsSuccess({ accounts })),
          catchError((error) => of(AccountActions.getAllAccountsFailure({ error: error.message })))
        )
      )
    )
  );


  AdNewAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.addNewAccount),
      mergeMap(({ account }) =>
        this.accountService.save(account).pipe(
          map((response) => {
            return AccountActions.addNewAccountSuccess({ account: response });
          }),
          catchError((error) =>
            of(AccountActions.addNewAccountFailure({ error: error.message }))
          )
        )
      )
    )
  );


  addAccountSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.addNewAccountSuccess),
      map(() => AccountActions.getAllAccounts())
    )
  );



}
