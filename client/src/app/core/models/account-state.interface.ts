import {AccountResponse} from "./account-response.interface";

export interface AccountState {
  accounts : AccountResponse[],
  error : string | null
}
