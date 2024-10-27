import {createFeature, createReducer, on} from '@ngrx/store';
import {AuthState} from "../../models/auth-state.interface";
import {AuthActions} from "./auth.actions";


const initialState: AuthState = {
  user: null,
  error: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    on(AuthActions.registerUser, (state) => ({
      ...state,
      error: null,
    })),

    on(AuthActions.registerUserSuccess, (state, action) => ({
      ...state,
      user : action.user,
      error: null,
    })),


    on(AuthActions.registerUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),


    on(AuthActions.loginUser, (state) => ({
      ...state,
      error: null,
    })),

    on(AuthActions.loginUserSuccess, (state, action) => ({
      ...state,
      user : action.user,
      error: null,
    })),


    on(AuthActions.loginUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),


  )
});

export const { name: authFeatureKey, reducer: authReducer } = authFeature;

