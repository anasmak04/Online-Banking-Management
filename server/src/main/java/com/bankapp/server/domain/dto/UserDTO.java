package com.bankapp.server.domain.dto;

import com.bankapp.server.domain.entities.Token;
import com.bankapp.server.domain.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Set<RoleDTO> roles;
    private String token;
    private List<Long> accountIds;
    private List<Long> invoiceIds;
    private List<Long> loanIds;
}
