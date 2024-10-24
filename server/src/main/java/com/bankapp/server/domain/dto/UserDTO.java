package com.bankapp.server.domain.dto;

import com.bankapp.server.domain.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private Role role;
    private List<Long> accountIds;
    private List<Long> billIds;
    private List<Long> loanIds;
}
