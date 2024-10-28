package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.InvoiceDTO;
import com.bankapp.server.domain.entities.Invoice;
import com.bankapp.server.domain.request.InvoiceRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface InvoiceMapper {

    InvoiceMapper INSTANCE = Mappers.getMapper(InvoiceMapper.class);

    @Mapping(target = "user", source = "user")
    InvoiceDTO toDTO(Invoice invoice);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user.id", source = "userId")
    Invoice toEntity(InvoiceRequest invoiceRequest);

    List<InvoiceDTO> toDTOList(List<Invoice> invoices);
}