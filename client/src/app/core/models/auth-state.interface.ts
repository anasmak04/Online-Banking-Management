import {RegisterResponse} from "./register-response.interface";
import {LoginResponse} from "./login-response.interface";

export interface AuthState {
  user: RegisterResponse | null | LoginResponse;
  error: string | null;
}
