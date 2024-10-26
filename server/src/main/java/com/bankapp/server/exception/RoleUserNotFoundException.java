package com.bankapp.server.exception;

public class RoleUserNotFoundException extends RuntimeException{
    public RoleUserNotFoundException(){
        super("USER_ROLE_NOT_FOUND");
    }
}
