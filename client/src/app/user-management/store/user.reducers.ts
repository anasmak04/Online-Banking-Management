import { UserState } from '../../models/user-state.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import {UserActions} from "./user.actions";

const initialState: UserState = {
  users: [],
  error: null,
};

const userFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(UserActions.getAllUsers, (state) => ({
      ...state,
      error: null,
    })),
    on(UserActions.getAllUsersSuccess, (state, { users }) => {
      return {
        ...state,
        users: users,
        error: null
      };
    }),
    on(UserActions.getAllUsersFailure, (state, { error }) => ({
      ...state,
      error,
    }))
  ),
});

export const { name: usersFeatureKey, reducer: usersReducer, selectUsers } = userFeature;
