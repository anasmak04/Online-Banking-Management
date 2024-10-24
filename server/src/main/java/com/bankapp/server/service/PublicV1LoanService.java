package com.bankapp.server.service;

import com.bankapp.server.domain.dto.LoanDTO;
import com.bankapp.server.domain.entities.Loan;
import com.bankapp.server.domain.request.LoanRequest;
import com.bankapp.server.mapper.LoanMapper;
import com.bankapp.server.repository.LoanRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublicV1LoanService {
    private final LoanRepository loanRepository;
    private final LoanMapper loanMapper;

    public LoanDTO save(LoanRequest loanRequest) {
        Loan loan = loanMapper.toEntity(loanRequest);
        return loanMapper.toDTO(loanRepository.save(loan));
    }

    public List<LoanDTO> findAll() {
        return loanMapper.toDTOList(loanRepository.findAll());
    }

    public Optional<LoanDTO> findById(Long id) {
        return loanRepository.findById(id).map(loanMapper::toDTO);
    }

    public void delete(Long id) {
        loanRepository.deleteById(id);
    }
}
