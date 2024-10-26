package com.bankapp.server.domain.dto;

import com.bankapp.server.domain.enums.TransactionStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoanDTO {
    private Long id;
    private Double amount;
    private Double interestRate;
    private int termMonths;
    private boolean approved;
    private Long userId;
}
