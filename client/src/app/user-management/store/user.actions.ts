import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {UserResponse} from "../../models/user-response.interface";

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Get All Users': emptyProps(),
    'Get All Users Success': props<{ users: UserResponse[] }>(),
    'Get All Users Failure': props<{ error: string }>(),
  },
});
