package com.bankapp.server.repository;

import com.bankapp.server.domain.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {
}
