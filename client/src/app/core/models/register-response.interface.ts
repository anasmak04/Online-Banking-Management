export interface RegisterResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  token: string;
  accountIds?: number[];
  invoiceIds?: number[];
  loanIds?: number[];
}
