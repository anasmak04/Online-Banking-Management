package com.bankapp.server.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BillDTO {
    private Long id;
    private String description;
    private Double amount;
    private Long userId;
}
