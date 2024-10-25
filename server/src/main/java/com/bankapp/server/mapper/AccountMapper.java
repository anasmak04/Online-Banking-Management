package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.AccountDTO;
import com.bankapp.server.domain.entities.Account;
import com.bankapp.server.domain.request.AccountRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AccountMapper {

    AccountMapper INSTANCE = Mappers.getMapper(AccountMapper.class);

    @Mapping(target = "userId", source = "user.id")
    AccountDTO toDTO(Account account);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    Account toEntity(AccountRequest accountRequest);

    List<AccountDTO> toDTOList(List<Account> accounts);

}

