package com.bankapp.server.exception;

public class AccountNotFoundException extends RuntimeException{
    public AccountNotFoundException(){
        super("ACCOUNT_NOT_FOUND");
    }
}
