package com.bankapp.server.exception;

public class InvoiceNotFoundException extends RuntimeException{
    public InvoiceNotFoundException(){
        super("BILL_NOT_FOUND");
    }
}
