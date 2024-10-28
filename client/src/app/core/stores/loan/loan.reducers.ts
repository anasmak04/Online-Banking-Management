import { createFeature, createReducer, on } from '@ngrx/store';
import {LoanState} from "../../models/loan-state.interface";
import {LoanActions} from "./loan.actions";

const initialState: LoanState = {
  loans: [],
  error: null,
};

const loanFeature = createFeature({
  name: 'loans',
  reducer: createReducer(
    initialState,
    on(LoanActions.getAllLoans, (state) => ({
      ...state,
      error: null,
    })),
    on(LoanActions.getAllLoansSuccess, (state, actions) => ({
      ...state,
      loans: actions.loans,
      error: null,
    })),
    on(LoanActions.getAllLoansFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(LoanActions.addNewLoan, (state) => ({
      ...state,
      error: null,
    })),
    on(LoanActions.addNewLoanSuccess, (state, actions) => ({
      ...state,
      loan: actions.loan,
      error: null,
    })),
    on(LoanActions.addNewLoanFailure, (state, { error }) => ({
      ...state,
      error,
    })),


  ),
});

export const { name: loansFeatureKey, reducer: loansReducer, selectLoans } = loanFeature;
