package com.bankapp.server.repository;

import com.bankapp.server.domain.entities.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Long> {
}
