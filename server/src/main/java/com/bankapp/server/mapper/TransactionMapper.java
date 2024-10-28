package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.TransactionDTO;
import com.bankapp.server.domain.entities.Transaction;
import com.bankapp.server.domain.request.TransactionRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TransactionMapper {

    TransactionMapper INSTANCE = Mappers.getMapper(TransactionMapper.class);

    @Mapping(target = "account", source = "account")
    @Mapping(target = "type", source = "type")
    TransactionDTO toDTO(Transaction transaction);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "account.id", source = "accountId")
    @Mapping(target = "type", source = "type")
    Transaction toEntity(TransactionRequest transactionRequest);

    List<TransactionDTO> toDTOList(List<Transaction> transactions);

}
