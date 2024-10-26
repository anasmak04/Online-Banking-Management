package com.bankapp.server.domain.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceRequest {

    @NotNull(message = "Amount cannot be null")
    @Positive(message = "Amount must be a positive value")
    private Double amount;

    @NotNull(message = "date cannot be empty")
    private Date dueDate;

    @NotNull(message = "termMonths cannot be null")
    @Positive(message = "termMonths must be a positive value")
    private int termMonths;

    @NotNull(message = "User ID cannot be null")
    private Long userId;
}
