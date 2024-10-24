package com.bankapp.server.exception;

public class TransactionNotFoundException extends RuntimeException{
    public TransactionNotFoundException(){
        super("TRANSACTION_NOT_FOUND");
    }
}
