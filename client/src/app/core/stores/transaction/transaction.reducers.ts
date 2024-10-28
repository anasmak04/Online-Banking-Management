import { createFeature, createReducer, on } from '@ngrx/store';
import {TransactionActions} from "./transaction.actions";
import {TransactionState} from "../../models/transaction-state.interface";

const initialState: TransactionState = {
  transactions: [],
  error: null,
};

const transactionFeature = createFeature({
  name: 'transactions',
  reducer: createReducer(
    initialState,
    on(TransactionActions.getAllTransactions, (state) => ({
      ...state,
      error: null,
    })),
    on(TransactionActions.getAllTransactionsSuccess, (state, actions) => ({
      ...state,
      transactions: actions.transactions,
      error: null,
    })),
    on(TransactionActions.getAllTransactionsFailure, (state, { error }) => ({
      ...state,
      error,
    })),


    on(TransactionActions.addNewTransaction, (state) => ({
      ...state,
      error: null,
    })),
    on(TransactionActions.addNewTransactionSuccess, (state, actions) => ({
      ...state,
      transaction: actions.transaction,
      error: null,
    })),
    on(TransactionActions.addNewTransactionFailure, (state, { error }) => ({
      ...state,
      error,
    })),


  ),
});

export const { name: transactionsFeatureKey, reducer: transactionsReducer, selectTransactions } = transactionFeature;
