package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.AccountDTO;
import com.bankapp.server.domain.entities.Account;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface AccountMapper {

    AccountMapper INSTANCE = Mappers.getMapper(AccountMapper.class);

    AccountDTO toDTO(Account account);
    Account toEntity(AccountDTO accountDTO);
}
