package com.bankapp.server.domain.dto;

import com.bankapp.server.domain.entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenDTO {
    private Long id;
    private String accessToken;
    private String refreshToken;
    private boolean loggedOut;
    private Long userId;
}
