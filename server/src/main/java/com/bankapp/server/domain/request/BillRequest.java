package com.bankapp.server.domain.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BillRequest {

    @NotBlank(message = "Description cannot be empty")
    private String description;

    @NotNull(message = "Amount cannot be null")
    @Positive(message = "Amount must be a positive value")
    private Double amount;

    @NotNull(message = "User ID cannot be null")
    private Long userId;
}
