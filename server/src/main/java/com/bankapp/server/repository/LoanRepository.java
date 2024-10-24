package com.bankapp.server.repository;

import com.bankapp.server.domain.entities.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}
