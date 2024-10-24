package com.bankapp.server.domain.dto;

import com.bankapp.server.domain.enums.Status;

public class LoanDTO {
    private Long id;
    private Double amount;
    private Double interestRate;
    private Status status;
    private Long userId;
}
