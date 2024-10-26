package com.bankapp.server.domain.response;

import com.bankapp.server.domain.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponse {
    private String token;
    private long expiresIn;
    private UserDTO user;
}
