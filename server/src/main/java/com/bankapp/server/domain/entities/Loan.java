package com.bankapp.server.domain.entities;

import com.bankapp.server.domain.enums.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "loans")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double amount;
    private Double interestRate;
    private Status status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
