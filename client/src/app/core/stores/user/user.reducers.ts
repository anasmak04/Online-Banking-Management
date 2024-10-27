import { UserState } from '../../models/user-state.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

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
    on(UserActions.getAllUsersSuccess, (state, { users }) => ({
      ...state,
      users: users,
      error: null,
    })),
    on(UserActions.getAllUsersFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(UserActions.addUser, (state) => ({
      ...state,
      error: null,
    })),
    on(UserActions.addUserSuccess, (state, { userResponse }) => ({
      ...state,
      users: [...state.users, userResponse],
      error: null,
    })),
    on(UserActions.addUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(UserActions.getUserByIdSuccess, (state, { userResponse }) => ({
      ...state,
      currentUser: userResponse,
      error: null,
    })),
    on(UserActions.getUserByIdFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(UserActions.deleteUser, (state) => ({
      ...state,
      error: null,
    })),
    on(UserActions.deleteUserSuccess, (state) => ({
      ...state,
      error: null,
    })),
    on(UserActions.deleteUserFailure, (state, { error }) => ({
      ...state,
      error,
    }))
  ),
});

export const { name: usersFeatureKey, reducer: usersReducer, selectUsers } = userFeature;
