import {InvoiceResponse} from "./invoice-response.interface";

export interface InvoiceState {
  invoices : InvoiceResponse[],
  error: string | null
}
