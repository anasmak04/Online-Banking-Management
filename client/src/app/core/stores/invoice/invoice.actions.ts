import { createActionGroup, emptyProps, props } from "@ngrx/store";
import {InvoiceResponse} from "../../models/invoice-response.interface";
import {LoanRequest} from "../../models/loan-request.interface";
import {LoanResponse} from "../../models/loan-response.interface";
import {InvoiceRequest} from "../../models/invoice-request.interface";


export const InvoiceActions = createActionGroup({
  source: 'Invoice',
  events: {
    'Get All Invoices': emptyProps(),
    'Get All Invoices Success': props<{ invoices: InvoiceResponse[] }>(),
    'Get All Invoices Failure': props<{ error: string }>(),

    'Add New Invoice': props<{invoice : InvoiceRequest}>(),
    'Add New Invoice Success': props<{ invoice: InvoiceResponse }>(),
    'Add New Invoice Failure': props<{ error: string }>(),

    'Get Invoice By Id ': props<{invoiceId: number}>(),
    'Get Invoice By Id Success': props<{ loan: InvoiceResponse }>(),
    'Get Invoice By Id Failure': props<{ error: string }>(),

    'Delete Invoice By Id ': props<{invoiceId: number}>(),
    'Delete Invoice By Id Success': emptyProps(),
    'Delete Invoice By Id Failure': props<{ error: string }>(),
  },
});
