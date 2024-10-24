package com.bankapp.server.service;

import com.bankapp.server.domain.dto.TransactionDTO;
import com.bankapp.server.domain.entities.Transaction;
import com.bankapp.server.domain.request.TransactionRequest;
import com.bankapp.server.exception.TransactionNotFoundException;
import com.bankapp.server.mapper.TransactionMapper;
import com.bankapp.server.repository.TransactionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublicV1TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;

    public TransactionDTO save(TransactionRequest transactionRequest) {
        Transaction transaction = transactionMapper.toEntity(transactionRequest);
        return transactionMapper.toDTO(transactionRepository.save(transaction));
    }

    public List<TransactionDTO> findAll(){
        return transactionMapper.toDTOList(transactionRepository.findAll());
    }

    public void delete(Long id){
        transactionRepository.deleteById(id);
    }

    public Optional<TransactionDTO> findById(Long id){
        return Optional.ofNullable(transactionRepository.findById(id)
                .map(transactionMapper::toDTO)
                .orElseThrow(TransactionNotFoundException::new));
    }

}
