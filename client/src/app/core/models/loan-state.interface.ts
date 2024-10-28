import {LoanResponse} from "./loan-response.interface";

export interface LoanState{
  loans : LoanResponse[],
  error : string | null
}
