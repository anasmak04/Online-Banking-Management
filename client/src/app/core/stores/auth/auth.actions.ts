import { createActionGroup, emptyProps, props } from "@ngrx/store";
import {RegisterRequest} from "../../models/register-request.interface";
import {RegisterResponse} from "../../models/register-response.interface";
import {LoginRequest} from "../../models/login-request.interface";
import {LoginResponse} from "../../models/login-response.interface";


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register User': props<{ register: RegisterRequest }>(),
    'Register User Success': props<{ user: RegisterResponse }>(),
    'Register User Failure': props<{ error: string }>(),

    'Login User': props<{ login: LoginRequest }>(),
    'Login User Success': props<{ user: LoginResponse }>(),
    'Login User Failure': props<{ error: string }>(),
  },
});
