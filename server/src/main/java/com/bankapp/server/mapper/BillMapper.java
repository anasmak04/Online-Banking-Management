package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.BillDTO;
import com.bankapp.server.domain.entities.Bill;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface BillMapper {

    BillMapper INSTANCE = Mappers.getMapper(BillMapper.class);

    BillDTO toDTO(Bill bill);
    Bill toEntity(BillDTO billDTO);
}
