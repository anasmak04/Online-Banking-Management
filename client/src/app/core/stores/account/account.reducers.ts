import { createFeature, createReducer, on } from '@ngrx/store';
import {AccountActions} from "./account.actions";
import {AccountState} from "../../models/account-state.interface";

const initialState: AccountState = {
  accounts: [],
  error: null,
};

const accountFeature = createFeature({
  name: 'accounts',
  reducer: createReducer(
    initialState,
    on(AccountActions.getAllAccounts, (state) => ({
      ...state,
      error: null,
    })),
    on(AccountActions.getAllAccountsSuccess, (state, action) => ({
      ...state,
      accounts: action.accounts,
      error: null,
    })),
    on(AccountActions.getAllAccountsFailure, (state, { error }) => ({
      ...state,
      error,
    })),


    on(AccountActions.addNewAccount, (state) => ({
      ...state,
      error: null,
    })),
    on(AccountActions.addNewAccountSuccess, (state, action) => ({
      ...state,
      account: action.account,
      error: null,
    })),
    on(AccountActions.addNewAccountFailure, (state, { error }) => ({
      ...state,
      error,
    })),

  ),
});

export const { name: accountsFeatureKey, reducer: accountsReducer, selectAccounts } = accountFeature;
