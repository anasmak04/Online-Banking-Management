import {UserResponse} from "./user-response.interface";

export interface UserState{
  users : UserResponse[],
  error : string | null
}
