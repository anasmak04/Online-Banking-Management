package com.bankapp.server.domain.entities;

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
    private Double principal;
    private Double interestRate;
    private int termMonths;
    private boolean approved;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
