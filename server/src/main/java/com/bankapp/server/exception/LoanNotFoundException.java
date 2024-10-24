package com.bankapp.server.exception;

public class LoanNotFoundException  extends RuntimeException{
    public LoanNotFoundException(){
        super("LOAN_NOT_FOUND");
    }
}
