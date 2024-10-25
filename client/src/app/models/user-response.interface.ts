export interface UserResponse {
    id: number;
    username: string;
    email: string;
    role?: string;
    accountIds: number[] | null;
    billIds: number[] | null;
    loanIds: number[] | null;
}
