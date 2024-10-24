package com.bankapp.server.service;

import com.bankapp.server.domain.dto.AccountDTO;
import com.bankapp.server.domain.entities.Account;
import com.bankapp.server.domain.request.AccountRequest;
import com.bankapp.server.mapper.AccountMapper;
import com.bankapp.server.repository.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublicV1AccountService {

    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;

    public AccountDTO save(AccountRequest accountRequest) {
        Account account = accountMapper.toEntity(accountRequest);
        return accountMapper.toDTO(accountRepository.save(account));
    }

    public List<AccountDTO> findAll(){
        return accountMapper.toDTOList(accountRepository.findAll());
    }

    public Optional<AccountDTO> findById(Long id) {
        return accountRepository.findById(id).map(accountMapper::toDTO);
    }

    public void delete(Long id) {
        accountRepository.deleteById(id);
    }
}
