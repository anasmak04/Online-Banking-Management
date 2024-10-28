import {UserResponse} from "./user-response.interface";

export interface UserState{
  users : UserResponse[],
  usersByRoleUser : UserResponse[],
  error : string | null
}
