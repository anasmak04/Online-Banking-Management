import { createFeature, createReducer, on } from '@ngrx/store';
import {InvoiceActions} from "./invoice.actions";
import {InvoiceState} from "../../models/invoice-state.interface";

const initialState: InvoiceState = {
  invoices: [],
  error: null,
};

const invoiceFeature = createFeature({
  name: 'invoices',
  reducer: createReducer(
    initialState,
    on(InvoiceActions.getAllInvoices, (state) => ({
      ...state,
      error: null,
    })),
    on(InvoiceActions.getAllInvoicesSuccess, (state, actions) => ({
      ...state,
      invoices: actions.invoices,
      error: null,
    })),
    on(InvoiceActions.getAllInvoicesFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(InvoiceActions.addNewInvoice, (state) => ({
      ...state,
      error: null,
    })),
    on(InvoiceActions.addNewInvoiceSuccess, (state, actions) => ({
      ...state,
      invoice: actions.invoice,
      error: null,
    })),
    on(InvoiceActions.addNewInvoiceFailure, (state, { error }) => ({
      ...state,
      error,
    })),


  ),
});

export const { name: invoicesFeatureKey, reducer: invoicesReducer ,  selectInvoices } = invoiceFeature;
