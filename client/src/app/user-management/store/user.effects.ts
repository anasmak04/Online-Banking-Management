import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../service/user.service";
import { UserActions } from "./user.actions";
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  LoadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getAllUsers),
      switchMap(() =>
        this.userService.findAll().pipe(
          map((users) => UserActions.getAllUsersSuccess({ users })),
          catchError((error) => of(UserActions.getAllUsersFailure({ error: error.message })))
        )
      )
    )
  );

  AddUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      switchMap(({ userRequest }) =>
        this.userService.save(userRequest).pipe(
          map((userResponse) => UserActions.addUserSuccess({ userResponse })),
          catchError((error) => of(UserActions.addUserFailure({ error: error.message })))
        )
      )
    )
  );

  GetUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserById),
      switchMap(({ userId }) =>
        this.userService.findById(userId).pipe(
          map(userResponse => UserActions.getUserByIdSuccess({ userResponse })),
          catchError(error => of(UserActions.getUserByIdFailure({ error: error.message })))
        )
      )
    )
  );

  DeleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({ userId }) =>
        this.userService.delete(userId).pipe(
          map(() => UserActions.deleteUserSuccess()),
          catchError((error) => of(UserActions.deleteUserFailure({ error: error.message })))
        )
      )
    )
  );

}
