package com.bankapp.server.exception;

public class BillNotFoundException extends RuntimeException{
    public BillNotFoundException(){
        super("BILL_NOT_FOUND");
    }
}
