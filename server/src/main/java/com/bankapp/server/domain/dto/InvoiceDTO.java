package com.bankapp.server.domain.dto;

import com.bankapp.server.domain.enums.InvoiceStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceDTO {
    private Long id;
    private Double amount;
    private Date dueDate;
    private InvoiceStatus status;
    private UserDTO user;
}
