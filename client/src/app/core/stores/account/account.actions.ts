import { createActionGroup, emptyProps, props } from "@ngrx/store";
import {AccountResponse} from "../../models/account-response.interface";
import {AccountRequest} from "../../models/account-request.interface";


export const AccountActions = createActionGroup({
  source: 'Account',
  events: {
    'Get All Accounts': emptyProps(),
    'Get All Accounts Success': props<{ accounts: AccountResponse[] }>(),
    'Get All Accounts Failure': props<{ error: string }>(),

    'Add New Account': props<{account : AccountRequest}>(),
    'Add New Account Success': props<{ account: AccountResponse }>(),
    'Add New Account Failure': props<{ error: string }>(),

    'Get Account By Id ': props<{accountId: number}>(),
    'Get Account By Id Success': props<{ account: AccountResponse }>(),
    'Get Account By Id Failure': props<{ error: string }>(),

    'Delete Account By Id ': props<{accountId: number}>(),
    'Delete Account By Id Success': emptyProps(),
    'Delete Account By Id Failure': props<{ error: string }>(),

  },
});
