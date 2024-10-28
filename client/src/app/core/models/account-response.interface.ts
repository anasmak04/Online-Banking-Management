import {UserResponse} from "./user-response.interface";

export interface AccountResponse{
  id : number,
  accountNumber : String,
  balance : number,
  user : UserResponse
}
