export interface UserResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];
    accountIds: number[] | null;
    billIds: number[] | null;
    loanIds: number[] | null;
}
