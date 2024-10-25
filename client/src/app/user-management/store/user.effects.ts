import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {UserService} from "../service/user.service";
import {UserActions} from "./user.actions";
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService : UserService) {
  }

  LoadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.getAllUsers),
      switchMap(() =>
        this.userService.findAll().pipe(
          map((users) => UserActions.getAllUsersSuccess({ users })),
          catchError(error => of(UserActions.getAllUsersFailure({ error: error.message })))
        )
      )
    )
  )
}
