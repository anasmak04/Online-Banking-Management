package com.bankapp.server.exception;

public class UserEmailNotFoundException extends RuntimeException{
    public UserEmailNotFoundException(){
        super("USER_EMAIL_NOT_FOUND");
    }
}
