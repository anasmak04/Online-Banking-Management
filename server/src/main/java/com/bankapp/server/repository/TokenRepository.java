package com.bankapp.server.repository;

import com.bankapp.server.domain.entities.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token,Long> {
}
