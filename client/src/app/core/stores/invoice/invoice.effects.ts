import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {InvoiceActions} from "./invoice.actions";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {AccountActions} from "../account/account.actions";

@Injectable()
export class InvoiceEffects {

  constructor(private actions$: Actions, private invoiceService: InvoiceService) {}

  LoadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.getAllInvoices),
      switchMap(() =>
        this.invoiceService.findAll().pipe(
          map((invoices) => InvoiceActions.getAllInvoicesSuccess({ invoices })),
          catchError((error) => of(InvoiceActions.getAllInvoicesFailure({ error: error.message })))
        )
      )
    )
  );

  AdNewAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.addNewInvoice),
      mergeMap(({ invoice }) =>
        this.invoiceService.save(invoice).pipe(
          map((response) => {
            return InvoiceActions.addNewInvoiceSuccess({ invoice: response });
          }),
          catchError((error) =>
            of(InvoiceActions.addNewInvoiceFailure({ error: error.message }))
          )
        )
      )
    )
  );



  addInvoiceSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.addNewInvoiceSuccess),
      map(() => InvoiceActions.getAllInvoices())
    )
  );




}
