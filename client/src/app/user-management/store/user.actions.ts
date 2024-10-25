import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserResponse } from "../../models/user-response.interface";
import {UserRequest} from "../../models/user-request.interafce";

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Get All Users': emptyProps(),
    'Get All Users Success': props<{ users: UserResponse[] }>(),
    'Get All Users Failure': props<{ error: string }>(),

    'Add User': props<{ userRequest: UserRequest }>(),
    'Add User Success': props<{ userResponse: UserResponse }>(),
    'Add User Failure': props<{ error: string }>(),

    'Get User By Id': props<{ userId: number }>(),
    'Get User By Id Success': props<{ userResponse: UserResponse }>(),
    'Get User By Id Failure': props<{ error: string }>(),

    'Delete User': props<{ userId: number }>(),
    'Delete User Success': emptyProps(),
    'Delete User Failure': props<{ error: string }>(),

  },
});
