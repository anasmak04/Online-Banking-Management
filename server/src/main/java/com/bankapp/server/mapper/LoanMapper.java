package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.LoanDTO;
import com.bankapp.server.domain.entities.Loan;
import com.bankapp.server.domain.request.LoanRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")

public interface LoanMapper {
    LoanMapper INSTANCE = Mappers.getMapper(LoanMapper.class);

    @Mapping(target = "user", source = "user")
    LoanDTO toDTO(Loan loan);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user.id", source = "userId")
    Loan toEntity(LoanRequest loanRequest);

    List<LoanDTO> toDTOList(List<Loan> loans);

}
