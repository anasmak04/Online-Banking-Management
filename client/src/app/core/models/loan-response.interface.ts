import {UserResponse} from "./user-response.interface";

export interface LoanResponse{
  id : number,
  amount : number,
  interestRate : number,
  approved : boolean,
  user : UserResponse,
}
