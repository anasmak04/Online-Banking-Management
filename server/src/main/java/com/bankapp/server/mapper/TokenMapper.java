package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.LoanDTO;
import com.bankapp.server.domain.dto.TokenDTO;
import com.bankapp.server.domain.entities.Loan;
import com.bankapp.server.domain.entities.Token;
import com.bankapp.server.domain.request.LoanRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TokenMapper {
    TokenMapper INSTANCE = Mappers.getMapper(TokenMapper.class);

    @Mapping(target = "userId", source = "user.id")
    TokenDTO toDTO(Token token);

    @Mapping(target = "user", ignore = true)
    Token toEntity(TokenDTO tokenDTO);

}
