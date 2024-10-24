package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.BillDTO;
import com.bankapp.server.domain.entities.Bill;
import com.bankapp.server.domain.request.BillRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BillMapper {

    BillMapper INSTANCE = Mappers.getMapper(BillMapper.class);
    @Mapping(source = "user.id", target = "userId")
    BillDTO toDTO(Bill bill);
    @Mapping(target = "user", ignore = true)
    Bill toEntity(BillRequest billRequest);

    List<BillDTO> toDTOList(List<Bill> bills);

}
