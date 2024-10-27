import {UserResponse} from "./user-response.interface";

export interface LoginResponse {
  token : string,
  expiresIn : number,
  user : UserResponse
}
